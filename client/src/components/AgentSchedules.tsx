import React, { useState } from 'react';
import styled from 'styled-components';

interface Timeslot {
    start: string;
    end: string;
}

interface Schedule {
    [day: string]: Timeslot[];
}

const StyledComponent = styled.div`
  color: #333;
  padding-left: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .day-container {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .timeslot-column {
    margin-right: 40px;
  }

  .timeslot {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
  }

  .day-picker {
    display: flex;
    margin-bottom: 20px;
  }

  .day-picker button:not(.add-slot-button) {
    background-color: transparent;
    color: #333;
    border: 1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 5px;
  }

  button, .add-slot-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
  }

  .day-picker button.active {
    background-color: #007bff;
    color: #fff;
  }
`;

function retrieveScheduleFromServer() {
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    const user_id = localStorage.getItem("session_user_id");

    fetch(`${apiUrl}/users/salesagents/${user_id}/schedules`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve schedule", data.message);
            });
        }
        else {
            return response.json().then(data => {
                console.log("Retrieved schedule", data);
            });
        }
    });
}

function saveScheduleToServer(timeslots: any, selectedDay: string) {
    let dayIdx;
    switch (selectedDay) {
        case 'Sunday':
            dayIdx = 0;
            break;
        case 'Monday':
            dayIdx = 1;
            break;
        case 'Tuesday':
            dayIdx = 2;
            break;
        case 'Wednesday':
            dayIdx = 3;
            break;
        case 'Thursday':
            dayIdx = 4;
            break;
        case 'Friday':
            dayIdx = 5;
            break;
        default:
            dayIdx = 0;
            break;
    }


    const day = new Date();
    day.setDate(day.getDate() + (dayIdx + 7 - day.getDay()) % 7); 
    
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    const user_id = localStorage.getItem("session_user_id");
    if (user_id === null) {
        console.log("Not logged in!");
        return;
    }

    console.log("User ID: ", user_id);
    for (let i = 0; i < timeslots.length; i++) {
        const timeslot = {
            day: day,
            startTime: timeslots[i].start,
            endTime: timeslots[i].end,
        };

        fetch(`${apiUrl}/users/salesagents/${user_id}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(timeslot),
        }).then((response) => {
            if (!response.ok) {
                return response.json().then(data => {
                    console.log("Failed to save schedule", data.message);
                });
            }
            else {
                return response.json().then(data => {
                    console.log("Saved schedule", data);
                });
            }
        });
    }

}

const AgentScheduleComponent = () => {
    const [schedule, setSchedule] = useState<Schedule>({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
    });
    const [selectedDay, setSelectedDay] = useState<string>('Monday');

    const getValidStartTimes = (index: number, start: string): string[] => {
        if (schedule[selectedDay][index] === undefined || start === undefined) {
            return [];
        }

        const validTimes: string[] = [];
        const startHour = parseInt(start.split(':')[0], 10);
        const startMinute = parseInt(start.split(':')[1], 10);
    
        let hour = startHour;
        let minute = startMinute;
    
        while (hour <= 20) {
            if (hour === 20 && minute === 30) {
                break;
            }
    
            validTimes.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            minute = minute === 0 ? 30 : 0;
            hour = minute === 0 ? hour + 1 : hour;
        }
    
        if (!validTimes.includes(schedule[selectedDay][index].start)) {
            schedule[selectedDay][index].start = validTimes[0];
        }

        if  (schedule[selectedDay][index].start === undefined) {
            schedule[selectedDay].splice(index);
        }
        return validTimes;
    };
    
    const getValidEndTimes = (index: number, start: string): string[] => {
        if (schedule[selectedDay][index] === undefined || start === undefined) {
            return [];
        }

        const validTimes: string[] = [];
        const startHour = parseInt(start.split(':')[0], 10);
        const startMinute = parseInt(start.split(':')[1], 10);
    
        let hour = startHour + 1;
        let minute = startMinute + 30;
    
        if (minute === 60) {
            hour += 1;
            minute = 0;
        }
    
        while (hour <= 21) {
            validTimes.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            hour += 1;
            minute += 30;
    
            if (minute === 60) {
                hour += 1;
                minute = 0;
            }
        }
    
        if (!validTimes.includes(schedule[selectedDay][index].end)) {
            schedule[selectedDay][index].end = validTimes[0];
        }

        if  (schedule[selectedDay][index].end === undefined) {
            schedule[selectedDay].splice(index);
        }

        return validTimes;
    };

    const addTimeslot = () => {
        let newSchedule: Timeslot;
        const previousSchedule = schedule[selectedDay][schedule[selectedDay].length - 1];

        if (!previousSchedule) {
            newSchedule = { start: '08:00', end: '09:30' };
        }
        else if (previousSchedule.end !== '21:30' &&
                 previousSchedule.end !== '21:00' &&
                 previousSchedule.end !== '20:30') {
            const oldEnd = previousSchedule.end;
            const oldHour = parseInt(oldEnd.split(':')[0], 10);
            const oldMinute = parseInt(oldEnd.split(':')[1], 10);

            let newHour = oldHour + 1;
            let newMinute = oldMinute + 30;
            if (newMinute === 60) {
                newHour += 1;
                newMinute = 0;
            }

            const newEnd = `${newHour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`;
            newSchedule = { start: previousSchedule.end, end: newEnd };
        }
        else {
            return;
        }

        setSchedule({
            ...schedule,
            [selectedDay]: [...schedule[selectedDay], newSchedule],
        });
    };

    const updateTimeslot = (
        rowIndex: number,
        field: 'start' | 'end',
        value: string
    ) => {
        const newSchedule = schedule[selectedDay];
        const currentTimeslot = newSchedule[rowIndex];

        if (field === 'start') {
            newSchedule[rowIndex] = {
                ...currentTimeslot,
                start: value
            };
        } else {
            newSchedule[rowIndex] = {
                ...currentTimeslot,
                end: value
            };
        }

        setSchedule({
            ...schedule,
            [selectedDay]: newSchedule,
        });
    };

    const array1dTo2d = (arr: Timeslot[], chunkSize: number): Timeslot[][] => {
        const res: Timeslot[][] = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            res.push(arr.slice(i, i + chunkSize));
        }
        return res;
    }

    const renderTimeslots = () => (
        array1dTo2d(schedule[selectedDay], 5).map((column, columnIndex) => (
            <div key={columnIndex} className="timeslot-column">
            {column.map((timeslot, rowIndex) => (
                schedule[selectedDay][columnIndex*5+rowIndex] ?
                (<div key={`${columnIndex}-${rowIndex}`} className="timeslot">
                    <select
                        value={timeslot.start}
                        onChange={(e) => updateTimeslot(columnIndex*5+rowIndex, 'start', e.target.value)}
                    >
                    {getValidStartTimes(columnIndex*5+rowIndex, columnIndex*5+rowIndex - 1 >= 0 ? schedule[selectedDay][columnIndex*5+rowIndex - 1].end : '08:00').map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                    </select>
                    &nbsp;to&nbsp;
                    <select
                        value={timeslot.end}
                        onChange={(e) => updateTimeslot(columnIndex*5+rowIndex, 'end', e.target.value)}
                    >
                    {getValidEndTimes(columnIndex*5+rowIndex, timeslot.start).map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                    </select>
                </div>) : null
            ))}
            </div>
        ))
    );

    return (
        <StyledComponent>
            <h2>My Work Schedule</h2>
            <div className="day-picker">
                <button
                    className={selectedDay === 'Monday' ? 'active' : ''}
                    onClick={() => setSelectedDay('Monday')}
                >
                    Mon
                </button>
                <button
                    className={selectedDay === 'Tuesday' ? 'active' : ''}
                    onClick={() => setSelectedDay('Tuesday')}
                >
                    Tue
                </button>
                <button
                    className={selectedDay === 'Wednesday' ? 'active' : ''}
                    onClick={() => setSelectedDay('Wednesday')}
                >
                    Wed
                </button>
                <button
                    className={selectedDay === 'Thursday' ? 'active' : ''}
                    onClick={() => setSelectedDay('Thursday')}
                >
                    Thu
                </button>
                <button
                    className={selectedDay === 'Friday' ? 'active' : ''}
                    onClick={() => setSelectedDay('Friday')}
                >
                    Fri
                </button>

                <button className="add-slot-button" onClick={addTimeslot}>+</button>
            </div>
        
            <div className="day-container">
                {renderTimeslots()}
            </div>
            <button onClick={() => saveScheduleToServer(schedule[selectedDay], selectedDay)}>Save</button>
        </StyledComponent>
    );
};

export default AgentScheduleComponent;