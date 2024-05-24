import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLoggedUserId, getLoggedInUser, saveScheduleToServer, retrieveSchedulesFromServer, retrieveAllSalesAgentFromServer, deleteSchedule } from '../serverUtils/serverUtils';
import { UserRole } from '../serverUtils/UserRole';

interface Timeslot {
    start: string;
    end: string;
    readonly: boolean;
    id: number;
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
        6: [],
        0: [],
    });

    const [agents, setAgents] = React.useState<any[]>([]);

    const [modifiedDays, setModifiedDays] = useState<number[]>([]);
    const [timeslotsToRemove, setTimeslotsToRemove] = useState<number[]>([]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDay = today.getDay();

    const [selectedDay, setSelectedDay] = useState<number>(todayDay);
    const [loggedUser, setLoggedUser] = useState<any | null>(null);
    const [selectedAgent, setSelectedAgent] = useState<any | null>(null);

    useEffect(() => {
        getLoggedInUser().then((user) => {
            setLoggedUser(user);
        });
    }, []);

    useEffect(() => {
        if (loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER]) {
            retrieveSchedulesFromServer(selectedAgent).then((schedules: any) => {
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

                let newSchedule: Schedule = {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                    5: [],
                    6: [],
                    0: [],
                };
                
                for (let i = 0; i < schedules.length; i++) {
                    const day = new Date(schedules[i].day);
                    let dayIdx = day.getDay();

                    const timeslot = {
                        start: schedules[i].startTime,
                        end: schedules[i].endTime,
                        readonly: false,
                        id: schedules[i].id
                    };

                    newSchedule = {
                        ...newSchedule,
                        [dayIdx]: [...newSchedule[dayIdx], timeslot],
                    };
                }

                setSchedule(newSchedule);
            }); 
        }
    }, [selectedAgent]);

    useEffect(() => {
        if (loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER]) {
            retrieveAllSalesAgentFromServer().then(agents => {
                if (agents) {
                    setAgents(agents);
                }
            });
        }
        else if (loggedUser && loggedUser.role == UserRole[UserRole.SALES_AGENT]) {
            retrieveSchedulesFromServer(getLoggedUserId() ?? "-1").then((schedules: any) => {
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
                        readonly: true,
                        id: schedules[i].id
                    };

                    newSchedule = {
                        ...newSchedule,
                        [dayIdx]: [...newSchedule[dayIdx], timeslot],
                    };
                }

                setSchedule(newSchedule);
            }); 
        }
    }, [loggedUser]);

    const selectedDayReadonly = (selectedDay: number) => {
        if (loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER]) {
            return false;
        }

        for (let i = 0; i < schedule[selectedDay].length; i++) {
            if (schedule[selectedDay][i].readonly === true) {
                return true;
            }
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
            newSchedule = { start: '08:00', end: '09:30', readonly: false, id: -1 };
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
            newSchedule = { start: previousSchedule.end, end: newEnd, readonly: false, id: -1};
        }
        else {
            return;
        }

        setSchedule({
            ...schedule,
            [selectedDay]: [...schedule[selectedDay], newSchedule],
        });
        
        if (modifiedDays.indexOf(selectedDay) === -1) {
            setModifiedDays([...modifiedDays, selectedDay]);
        }
    };

    const removeTimeslot = (selectedDay: number, slotIndex: number) => {
        setTimeslotsToRemove([...timeslotsToRemove, schedule[selectedDay][slotIndex].id]);

        schedule[selectedDay].splice(slotIndex, 1);
        setSchedule({
            ...schedule,
            [selectedDay]: schedule[selectedDay],
        });

        if (modifiedDays.indexOf(selectedDay) === -1) {
            setModifiedDays([...modifiedDays, selectedDay]);
        }
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

        if (modifiedDays.indexOf(selectedDay) === -1) {
            setModifiedDays([...modifiedDays, selectedDay]);
        }
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
                    { schedule[selectedDay][columnIndex*5+rowIndex] && !schedule[selectedDay][columnIndex*5+rowIndex].readonly ? (<>&nbsp;<button className="remove-slot-button" onClick={() => removeTimeslot(selectedDay, columnIndex*5+rowIndex)}>x</button></>) : null }
                </div>) : null
            ))}
            </div>
        ))
    );

    const dayButtons = [];

    for (let i = todayDay; i < todayDay + 7; i++) {
        dayButtons.push(<button
            className={selectedDay === i%7 ? 'active' : ''}
            onClick={() => setSelectedDay(i%7)}
        >
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i%7]}
        </button>);
    }

    return (
        <StyledComponent>
            {loggedUser && loggedUser.role == UserRole[UserRole.SALES_AGENT] ? <h2>My Work Schedule</h2> : <h2>Agents Work Schedule</h2>}
            {loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER] ?
            <div>
            <h3>Select sales agent</h3>
            <select name="salesAgent" id="salesAgent" onChange={(e) => {setSelectedAgent(e.target.value)}}>
            <option key="" disabled selected value="">Select agent</option>
            {
                agents.map((agent) => {
                     return <option value={agent.id}>{agent.name + " " + agent.surname}</option>
                })
            }
            </select>
            <br/><br/>
            </div>: null}
            <div className="day-picker">
                {dayButtons}
                <button className="add-slot-button" disabled={selectedDayReadonly(selectedDay) || (loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER] && (selectedAgent == "" || selectedAgent == null))} onClick={addTimeslot}>+</button>
            </div>
        
            <div className="day-container">
                {renderTimeslots()}
            </div>
            { modifiedDays.length !== 0 ? (<button onClick={() => {
                let numberOfSetDays = 0;
                for (let day = 0; day < 7; day++) {
                    const timeslots = schedule[day];
                    if (timeslots.length !== 0) {
                        numberOfSetDays++;
                    }
                }

                if (numberOfSetDays < 3 && loggedUser && loggedUser.role == UserRole[UserRole.SALES_AGENT]) {
                    alert("You must set at least 3 days of availability, you have only set " + numberOfSetDays + " days.");
                }
                else {
                    const user_id = loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER] ? selectedAgent : getLoggedUserId();
                    saveScheduleToServer(user_id, schedule, modifiedDays).then(() => {
                        let updatedSchedule = {...schedule};

                        for (let day of modifiedDays) {
                            const timeslots = schedule[day];
                            
                            const newSchedule = timeslots.map((slot) => {
                                return { ...slot, readonly: loggedUser && loggedUser.role == UserRole[UserRole.SALES_AGENT]};
                            });

                            updatedSchedule[day] = newSchedule;
                        }

                        setSchedule(updatedSchedule);
                    });

                    if (loggedUser && loggedUser.role == UserRole[UserRole.MARKETING_MANAGER]) {
                        if (timeslotsToRemove.length !== 0) {
                            for (let timeslot of timeslotsToRemove) {
                                deleteSchedule(selectedAgent, timeslot);
                            }
                        }
                    }
                }
            }}>Save</button>) : null }
        </StyledComponent>
    );
};

export default AgentScheduleComponent;