import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLoggedUserId, getLoggedInUser } from '../loginUtils/loginUtils';
import { UserRole } from '../loginUtils/UserRole';

interface Timeslot {
    start: string;
    end: string;
    readonly: boolean;
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


const AgentScheduleComponent = () => {
    const [schedule, setSchedule] = useState<Schedule>({
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    });
    const [selectedDay, setSelectedDay] = useState<number>(1);
    let loggedUser: any | null;

    const retrieveScheduleFromServer = () => {
        const apiUrl = process.env.REACT_APP_API_ENDPOINT;
        const user_id = getLoggedUserId();
    
        return fetch(`${apiUrl}/users/salesagents/${user_id}/schedules`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (!response.ok) {
                return response.json().then(data => {
                    console.log("Failed to retrieve schedule", data.message);
                    return null;
                });
            }
            else {
                return response.json().then(data => {
                    // console.log("Retrieved schedule", data);
                    return data;
                });
            }
        }).catch((error) => {
            console.log("Failed to retrieve schedule", error);
            return null;
        });
    }
    
    const saveScheduleToServer = (selectedDay: number) => {
        const day = new Date();
        day.setDate(day.getDate() + (selectedDay + 7 - day.getDay()) % 7); 
        day.setHours(0, 0, 0, 0);
    
        const apiUrl = process.env.REACT_APP_API_ENDPOINT;
        const user_id = localStorage.getItem("session_user_id");
        if (user_id === null) {
            console.log("Not logged in!");
            return;
        }
    
        const timeslots = schedule[selectedDay];
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
                        
                        const newSchedule = timeslots.map((slot) => {
                            return { ...slot, readonly: true };
                        });

                        setSchedule({
                            ...schedule,
                            [selectedDay]: newSchedule,
                        });
                    });
                }
            });
        }
    }

    useEffect(() => {
        retrieveScheduleFromServer().then((schedules) => {
            if (schedules === null) {
                return;
            }

            schedules.sort((a: any, b: any) => {
                if (a.startTime < b.startTime) {
                    return -1;
                }
                if (a.startTime > b.startTime) {
                    return 1;
                }
                return 0;
            });

            let newSchedule = schedule;
            for (let i = 0; i < schedules.length; i++) {
                const day = new Date(schedules[i].day);
                let dayIdx = day.getDay();

                const timeslot = {
                    start: schedules[i].startTime,
                    end: schedules[i].endTime,
                    readonly: true
                };

                newSchedule = {
                    ...newSchedule,
                    [dayIdx]: [...newSchedule[dayIdx], timeslot],
                };

                // console.log("Day: ", dayIdx, "Timeslot: ", timeslot);
            }

            setSchedule(newSchedule);
        });

        getLoggedInUser().then((user) => {
            loggedUser = user;
        });
    }, []);

    const selectedDayReadonly = (selectedDay: number) => {
        if (loggedUser && loggedUser.role == UserRole.MARKETING_MANAGER) {
            return false;
        }

        for (let i = 0; i < schedule[selectedDay].length; i++) {
            if (schedule[selectedDay][i].readonly === true) {
                return true;
            }
        }

        const nextOccurrence = new Date();
        nextOccurrence.setDate(nextOccurrence.getDate() + (selectedDay + 7 - nextOccurrence.getDay()) % 7); 
        nextOccurrence.setHours(0, 0, 0, 0);

        const nextMonday = new Date();
        nextMonday.setDate(nextMonday.getDate() + (1 + 7 - nextMonday.getDay()) % 7); 
        nextMonday.setHours(0, 0, 0, 0);
        
        if (nextMonday < new Date()) {
            nextMonday.setDate(nextMonday.getDate() + 7);
        }
        
        if (nextOccurrence >= nextMonday) {
            return true;
        }

        return false;
    }

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
            newSchedule = { start: '08:00', end: '09:30', readonly: false };
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
            newSchedule = { start: previousSchedule.end, end: newEnd, readonly: false};
        }
        else {
            return;
        }

        setSchedule({
            ...schedule,
            [selectedDay]: [...schedule[selectedDay], newSchedule],
        });
    };

    const removeTimeslot = (selectedDay: number, slotIndex: number) => {
        schedule[selectedDay].splice(slotIndex, 1);
        setSchedule({
            ...schedule,
            [selectedDay]: schedule[selectedDay],
        });
    }

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
                        disabled={timeslot.readonly}
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
                        disabled={timeslot.readonly}
                        value={timeslot.end}
                        onChange={(e) => updateTimeslot(columnIndex*5+rowIndex, 'end', e.target.value)}
                    >
                    {getValidEndTimes(columnIndex*5+rowIndex, timeslot.start).map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                    </select>
                    {/* { (() => { console.log("AAA ", selectedDay, columnIndex*5+rowIndex, schedule[selectedDay][columnIndex*5+rowIndex]); return null; })() } */}
                    { schedule[selectedDay][columnIndex*5+rowIndex] && !schedule[selectedDay][columnIndex*5+rowIndex].readonly ? (<>&nbsp;<button className="remove-slot-button" onClick={() => removeTimeslot(selectedDay, columnIndex*5+rowIndex)}>x</button></>) : null }
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
                    className={selectedDay === 1 ? 'active' : ''}
                    onClick={() => setSelectedDay(1)}
                >
                    Mon
                </button>
                <button
                    className={selectedDay === 2 ? 'active' : ''}
                    onClick={() => setSelectedDay(2)}
                >
                    Tue
                </button>
                <button
                    className={selectedDay === 3 ? 'active' : ''}
                    onClick={() => setSelectedDay(3)}
                >
                    Wed
                </button>
                <button
                    className={selectedDay === 4 ? 'active' : ''}
                    onClick={() => setSelectedDay(4)}
                >
                    Thu
                </button>
                <button
                    className={selectedDay === 5 ? 'active' : ''}
                    onClick={() => setSelectedDay(5)}
                >
                    Fri
                </button>

                <button className="add-slot-button" disabled={selectedDayReadonly(selectedDay)} onClick={addTimeslot}>+</button>
            </div>
        
            <div className="day-container">
                {renderTimeslots()}
            </div>
            { !selectedDayReadonly(selectedDay) ? (<button onClick={() => saveScheduleToServer(selectedDay)}>Save</button>) : null }
        </StyledComponent>
    );
};

export default AgentScheduleComponent;