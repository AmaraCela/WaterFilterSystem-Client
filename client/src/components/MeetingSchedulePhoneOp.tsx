import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMeetings } from "../store/meetings/meetingsThunk";
import { RootState, useAppDispatch } from "../store/store";
import ScheduleSlot from "./ScheduleSlot";
import { Meeting } from "../types/types";
import { getLoggedUserId, retrieveAllScheduleFromServer } from "../serverUtils/serverUtils";
import '../styles/scrollbarStyling.css';
import CompletedMeetingAlert from "./CompletedMeetingAlert";

interface BusySlot {
    startingHour: number;
    startingMin: number;
    endingHour: number;
    endingMin: number;
    rowSpan: number;
    slot: JSX.Element;
}

const MeetingSchedulePhoneOp = ({ showCompact }: any) => {
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const dispatch = useAppDispatch();
    const [chosenMeeting, setChosenMeeting] = useState<Meeting | null>(null);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [meetingsToDisplay, setMeetingsToDisplay] = useState<Meeting[]>([]);
    const [dates, setDates] = useState<Date[]>([]);
    const [schedules, setSchedules] = useState<any[]>([]);
    const [hoveredSlot, setHoveredSlot] = useState<string | null>(null); // State to manage hovered slot\

    useEffect(() => {
        const user_id = getLoggedUserId();
        if (!showCompact) {
            dispatch(getMeetings(user_id));
        }
    }, [chosenMeeting]);

    useEffect(() => {
        let newDates = [];
        let today = new Date();
        newDates.push(today);

        for (let i = 1; i < 6; i++) {
            let nextDate = new Date();
            nextDate.setDate(today.getDate() + i);
            newDates.push(nextDate);
        }
        setDates(newDates);
        const user_id = getLoggedUserId();

        if (!showCompact) {
            dispatch(getMeetings(user_id));
        } else {
            dispatch(getMeetings(null));
        }
    }, []);

    useEffect(() => {
        retrieveAllScheduleFromServer().then((response) => {
            setSchedules(response);
            setMeetingsToDisplay(meetings);
        });
    }, [meetings]);

    const handleSlotHover = (hour: number, min: number) => {
        setHoveredSlot(`${hour}:${min}`);
    };

    const handleSlotLeave = () => {
        setHoveredSlot(null);
    };

    const generateBusySlots = (dates: any, meetingsToDisplay: any): BusySlot[][] => {
        return dates.map((date: any) => {
            let meetings = meetingsToDisplay.filter((meet: any) => {
                let meetDate = new Date(meet.time);
                return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear();
            });

            meetings = meetings.sort((a: any, b: any) => {
                let aDate = new Date(a.time);
                let bDate = new Date(b.time);
                return aDate.getHours() - bDate.getHours();
            });

            const busySlots: BusySlot[] = [];
            let currentSlot: BusySlot | null = null;

            for (let meeting of meetings) {
                const dateTime = new Date(meeting.time);
                const meetingHour = dateTime.getHours();
                const meetingMin = dateTime.getMinutes();

                let meetingEndHour;
                let meetingEndMinutes;

                meetingEndHour = meetingHour;
                meetingEndMinutes = meetingMin + 30;
                if (meetingEndMinutes === 60) {
                    meetingEndHour += 1;
                    meetingEndMinutes = 0;
                }

                if (!currentSlot) {
                    const diff = ((meetingEndHour - 8) * 60 + meetingEndMinutes) - ((meetingHour - 8) * 60 + meetingMin);
                    currentSlot = {
                        startingHour: meetingHour,
                        startingMin: meetingMin,
                        endingHour: meetingEndHour,
                        endingMin: meetingEndMinutes,
                        rowSpan: diff / 30,
                        slot: (
                            <td
                                className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25 bg-blue-500 bg-opacity-25"
                                // onMouseEnter={() => handleSlotHover(meetingHour, meetingMin)}
                                // onMouseLeave={handleSlotLeave}
                                rowSpan={diff / 30}
                            >
                                {`${meetingHour.toString().padStart(2, '0')}:${meetingMin.toString().padStart(2, '0')} - ${meetingEndHour.toString().padStart(2, '0')}:${meetingEndMinutes.toString().padStart(2, '0')}`}
                                {/* {hoveredSlot === `${meetingHour}:${meetingMin}` && <span className="">Unavailable</span>} */}
                            </td>
                        )
                    };

                    busySlots[2 * (meetingHour - 8) + (meetingMin === 30 ? 1 : 0)] = currentSlot;
                }
                else if (meetingHour * 60 + meetingMin <= currentSlot.endingHour * 60 + currentSlot.endingMin) {
                    const diff = (meetingEndHour * 60 + meetingEndMinutes) - (currentSlot.endingHour * 60 + currentSlot.endingMin);
                    currentSlot.rowSpan += diff / 30;

                    currentSlot.endingHour = meetingEndHour;
                    currentSlot.endingMin = meetingEndMinutes;
                    currentSlot.slot = (
                        <td
                            className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25 bg-blue-500 bg-opacity-25"
                            // onMouseEnter={() => handleSlotHover(meetingHour, meetingMin)}
                            // onMouseLeave={handleSlotLeave}
                            rowSpan={currentSlot.rowSpan}
                        >
                            {`${currentSlot.startingHour.toString().padStart(2, '0')}:${currentSlot.startingMin.toString().padStart(2, '0')} - ${currentSlot.endingHour.toString().padStart(2, '0')}:${currentSlot.endingMin.toString().padStart(2, '0')}`}
                            {/* {hoveredSlot === `${meetingHour}:${meetingMin}` && <span className="">Unavailable</span>} */}
                        </td>
                    );
                }
                else {
                    const diff = ((meetingEndHour - 8) * 60 + meetingEndMinutes) - ((meetingHour - 8) * 60 + meetingMin);

                    currentSlot = {
                        startingHour: meetingHour,
                        startingMin: meetingMin,
                        endingHour: meetingEndHour,
                        endingMin: meetingEndMinutes,
                        rowSpan: diff / 30,
                        slot: (
                            <td
                                className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25 bg-blue-500 bg-opacity-25"
                                onMouseEnter={() => handleSlotHover(meetingHour, meetingMin)}
                                onMouseLeave={handleSlotLeave}
                                rowSpan={diff / 30}
                            >
                                {`${currentSlot.startingHour.toString().padStart(2, '0')}:${currentSlot.startingMin.toString().padStart(2, '0')} - ${currentSlot.endingHour.toString().padStart(2, '0')}:${currentSlot.endingMin.toString().padStart(2, '0')}`}
                                {/* {hoveredSlot === `${meetingHour}:${meetingMin}` && <span className="">Unavailable</span>} */}
                            </td>
                        )
                    };

                    busySlots[2 * (meetingHour - 8) + (meetingMin === 30 ? 1 : 0)] = currentSlot;
                }
            }

            let time = 8 * 60;
            for (const slot of busySlots) {
                if (slot === undefined) {
                    continue;
                }

                while (slot.startingHour * 60 + slot.startingMin > time) {
                    const emptySlot: BusySlot = {
                        startingHour: Math.floor(time / 60),
                        startingMin: time % 60,
                        endingHour: 0,//Math.floor((time + 30) / 60),
                        endingMin: 0,
                        rowSpan: 1,
                        slot: (
                            <td
                                className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25"
                                onMouseEnter={() => handleSlotHover(0, 0)}
                                onMouseLeave={handleSlotLeave}
                            >
                            </td>
                        )
                    };

                    busySlots.splice(Math.floor((time - 8 * 60) / 30), 1, emptySlot);
                    time += 30;
                }
                time += slot.rowSpan * 30;
            }

            while (time < 21 * 60) {
                const emptySlot: BusySlot = {
                    startingHour: Math.floor(time / 60),
                    startingMin: time % 60,
                    endingHour: 0, //Math.floor((time + 30) / 60),
                    endingMin: 0, //(time + 30) % 60,
                    rowSpan: 1,
                    slot: (
                        <td
                            className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25"
                            onMouseEnter={() => handleSlotHover(0, 0)}
                            onMouseLeave={handleSlotLeave}
                        >
                        </td>
                    )
                };
                busySlots.splice(Math.floor((time - 8 * 60) / 30), 1, emptySlot);
                time += 30;
            }
            return busySlots;
        });
    };


    const generateTimeslots = (dates: any, meetingsToDisplay: any, hour: number, min: number) => {
        return dates.map((date: any) => {
            const meeting = meetingsToDisplay.find((meet: any) => {
                const meetDate = new Date(meet.time);
                return meetDate.getDate() === date.getDate() &&
                    meetDate.getMonth() === date.getMonth() &&
                    meetDate.getFullYear() === date.getFullYear() &&
                    meetDate.getHours() === hour &&
                    meetDate.getMinutes() === min;
            });

            if (meeting !== undefined) {
                const dateTime = new Date(meeting.time);
                const meetingHour = dateTime.getHours();
                const meetingMin = dateTime.getMinutes();
                return {
                    date: date.getDate(), hour: hour, min: min, slot: <td className="w-[14.2%] h-full border-t border-[#a5a5a5] border-blue-900 border-opacity-25" rowSpan={3}>
                        <button onClick={() => {
                            setChosenMeeting(meeting);
                        }}>{meeting && <ScheduleSlot height={'h-full'} name={meeting.Client?.name ?? ''} surname={meeting.Client?.surname ?? ''} startHour={meetingHour} startMin={meetingMin}></ScheduleSlot>}</button></td>
                };
            }
            return { date: date.getDate(), hour: hour, min: min, slot: <td className="montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25"></td> };
        });
    };

    const invertSchedules = (schedules: any) => {
        const now = new Date();
        const inverted: { [day: number]: { [hour: number]: [any, any] } } = {};

        for (let day = now.getDate(); day < 7 + now.getDate(); day++) {
            for (let hour = 8; hour <= 20; hour++) {
                const date = new Date();
                date.setDate(date.getDate() + day);
                date.setHours(hour);
                date.setMinutes(0);
                date.setSeconds(0);

                if (!inverted[day]) {
                    inverted[day] = {};
                }
                if (!inverted[day][hour]) {
                    inverted[day][hour] = [0, 0]; // number of agents free at both time slots for the hour (HH:00 and HH:30)
                }
            }
        }

        for (let schedule of schedules) {
            const date = new Date(schedule.day);
            const now = new Date();
            now.setHours(0);
            now.setMinutes(0);
            now.setSeconds(0);
            if (date.getDate() < now.getDate()) {
                continue;
            }

            const startTime = schedule.startTime;
            const endTime = schedule.endTime;

            const startHour = parseInt(startTime.split(":")[0]);
            const startMin = parseInt(startTime.split(":")[1]);

            const endHour = parseInt(endTime.split(":")[0]);
            const endMin = parseInt(endTime.split(":")[1]);

            date.setHours(startHour);
            date.setMinutes(startMin);
            date.setSeconds(0);

            for (let hour = startHour; hour <= endHour; hour++) {
                if (hour === startHour) {
                    if (startMin === 0) {
                        inverted[date.getDate()][hour][0]++;
                    }
                    inverted[date.getDate()][hour][1]++;
                }
                else if (hour === endHour) {
                    if (endMin === 30 && hour < 21) {
                        inverted[date.getDate()][hour][0]++;
                    }
                }
                else {
                    inverted[date.getDate()][hour][0]++;
                    inverted[date.getDate()][hour][1]++;
                }
            }
        }

        const invertedSlots = [];
        for (let day = now.getDate(); day < 7 + now.getDate(); day++) {
            for (let hour = 8; hour <= 20; hour++) {
                invertedSlots.push([inverted[day][hour][0], { time: new Date(now.getFullYear(), now.getMonth(), day, hour, 0, 0) }]);
                invertedSlots.push([inverted[day][hour][1], { time: new Date(now.getFullYear(), now.getMonth(), day, hour, 30, 0) }]);
            }
        }

        // console.log("INVERTED SLOTS", invertedSlots);
        return invertedSlots;
    };

    let busySlots: BusySlot[][] | null = null;
    if (showCompact) {
        const inverted = invertSchedules(schedules);
        const totalMeetings: any = [];
        const copyMeetings: any = meetingsToDisplay.map((m: any) => {
            return { ...m, meetingEnd: null }
        });

        for (let i = 0; i < inverted.length; i++) {
            if (inverted[i][0] === 0) {
                totalMeetings.push(inverted[i][1]);
            }
            else {
                for (let j = 0; j < copyMeetings.length; j++) {
                    if (copyMeetings[j] === null) {
                        continue;
                    }

                    const meetingDate = new Date(copyMeetings[j].time);
                    const invertedDate = new Date(inverted[i][1].time);
                    let meetingStart = meetingDate.getHours() * 60 + meetingDate.getMinutes();
                    if (copyMeetings[j].meetingEnd === null) {
                        copyMeetings[j].meetingEnd = meetingStart + 90;
                    }
                    const meetingEnd = copyMeetings[j].meetingEnd; // meetingStart + 90;
                    const slotStart = invertedDate.getHours() * 60 + invertedDate.getMinutes();

                    if (meetingDate.getDate() === invertedDate.getDate() &&
                        slotStart < meetingEnd &&
                        slotStart >= meetingStart) {
                        // if a meeting is matched to a free slot, decrement the number of free slots
                        inverted[i][0]--;
                        // if there are no more free slots, add the meeting to the totalMeetings array to display the slot as busy
                        if (inverted[i][0] === 0) {
                            totalMeetings.push(copyMeetings[j]);
                        }
                        // copyMeetings[j] = null;
                        meetingStart += 30;
                        if (meetingStart === meetingEnd) {
                            copyMeetings[j] = null;
                        }
                        else {
                            copyMeetings[j] = { ...copyMeetings[j], time: new Date(meetingDate.getTime() + 30 * 60000) };
                        }
                    }
                }
            }
        }

        // console.log("TOTAL MEETINGS: ", totalMeetings);
        busySlots = generateBusySlots(dates, totalMeetings);
        // console.log("BUSY SLOT: ", busySlots);
        // console.log("BUSY SLOTS: ", busySlots?.flatMap((slots: BusySlot[]) => slots.filter((s: BusySlot) => s.startingHour === 8 && s.startingMin === 0)).map((s: BusySlot) => s.slot))
    }

    const timeSlots = [];
    let j = 0;
    for (let i = 8; i < 21; i++) {
        timeSlots.push({ hour: i, min: 0, label: j % 3 === 0 ? `${i}:00` : '' });
        j++;
        timeSlots.push({ hour: i, min: 30, label: j % 3 === 0 ? `${i}:30` : '' });
        j++;
    }

    return (
        <><table className="w-full h-full">
            <thead>
                <tr>
                    <th className=" montserrat font-light text-[#B1B1B1]">Week</th>
                    {dates.map((date) => (
                        date.getDate() === new Date().getDate() ?
                            <th key={date.getDate()} className={`w-[14.2%] montserrat font-light text-[#5272E9]`}>
                                {date.getDate()}<br />{days[date.getDay()]}
                            </th> :
                            <th key={date.getDate()} className={`w-[14.2%] montserrat font-light text-[#B1B1B1]`}>
                                {date.getDate()}<br />{days[date.getDay()]}
                            </th>
                    ))}
                </tr>
                <tr className="flex justify-between gap-5">
                    <th className=" "></th>
                    <th className=" "></th>
                    <th className=" "></th>
                    <th className=" "></th>
                    <th className=" "></th>
                </tr>
            </thead>
            <tbody className="mt-4">
                {timeSlots.map((slot) => {
                    let meetingsSlots;
                    if (!showCompact) {
                        meetingsSlots = generateTimeslots(dates, meetingsToDisplay, slot.hour, slot.min).filter((m: any) => m !== null);
                        for (let meeting of meetingsToDisplay) {
                            const dateTime = new Date(meeting.time);
                            const meetingHour = dateTime.getHours();
                            const meetingMin = dateTime.getMinutes();

                            meetingsSlots = meetingsSlots.filter((m: any) => {
                                if (m.date !== dateTime.getDate()) {
                                    return true;
                                }
                                const startMeeting = (meetingHour * 60 + meetingMin);
                                const endMeeting = startMeeting + 90;
                                const startSlot = (m.hour * 60 + m.min);

                                if (startSlot > startMeeting && startSlot < endMeeting) {
                                    return false;
                                }

                                return true;
                            });
                        }

                        meetingsSlots = meetingsSlots.map((m: any) => m.slot);
                    }

                    return <tr className="h-4" key={`${slot.hour}:${slot.min}`}>
                        <td className=" montserrat font-light text-[#B1B1B1]">
                            <p className="w-full text-center">{slot.label}</p>
                        </td>
                        {showCompact ? busySlots?.flatMap((slots: BusySlot[]) => slots.filter((s: BusySlot) => s.startingHour === slot.hour && s.startingMin === slot.min)).map((s: BusySlot) => s.slot)
                            : meetingsSlots}
                    </tr>;

                    { /* <td className="w-[14.2%] h-full border-t border-[#a5a5a5]"></td> */ }
                })}
            </tbody>
        </table>
            {chosenMeeting && <CompletedMeetingAlert meeting={chosenMeeting} setChosenMeeting={setChosenMeeting}></CompletedMeetingAlert>}
        </>
    );
}
export default MeetingSchedulePhoneOp; 