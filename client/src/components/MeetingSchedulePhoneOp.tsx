import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMeetings } from "../store/meetings/meetingsThunk";
import { RootState, useAppDispatch } from "../store/store";
import ScheduleSlot from "./ScheduleSlot";
import { Meeting } from "../types/types";
import { getLoggedUserId, retrieveAllScheduleFromServer } from "../serverUtils/serverUtils";
import '../styles/scrollbarStyling.css'; 

interface BusySlot {
    startingHour: number;
    startingMin: number;
    rowSpan: number;
    slot: JSX.Element;
}

const MeetingSchedulePhoneOp = ({ showCompact }: any) => {
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const dispatch = useAppDispatch();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [meetingsToDisplay, setMeetingsToDisplay] = useState<Meeting[]>([]);
    const [dates, setDates] = useState<Date[]>([]);
    const [schedules, setSchedules] = useState<any[]>([]);
    const [hoveredSlot, setHoveredSlot] = useState<string | null>(null); // State to manage hovered slot

    useEffect(() => {
        const today = new Date();
        const sunday = new Date(today);
        sunday.setDate(today.getDate() - today.getDay()); // Get Sunday of the current week

        const newDates = [];
        for (let i = 0; i < 7; i++) {
            const nextDate = new Date(sunday);
            nextDate.setDate(sunday.getDate() + i);
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
            const busySlots: BusySlot[] = [];
            for (let i = 8; i <= 21; i += 1.5) {
                const hour = Math.floor(i);
                const minute = (i - hour) * 60;
                let slotStyle = "montserrat p-3 w-[14.2%] h-full border-t border-[#a5a5a5] rounded-lg border-blue-900 border-opacity-25";
                let isBusy = false;

                // Check if it's Monday and the slot is at 8:00 AM
                if (date.getDay() === 1 && hour === 8 && minute === 0) {
                    isBusy = true;
                }
                if (date.getDay() === 2 && hour === 9 && minute === 30) {
                    isBusy = true;
                }
                if (date.getDay() === 4 && hour === 11 && minute === 0) {
                    isBusy = true;
                }
                if (date.getDay() === 5 && hour === 14 && minute === 0) {
                    isBusy = true;
                }
                if (date.getDay() === 5 && hour === 18 && minute === 30) {
                    isBusy = true;
                }
                if (date.getDay() === 6 && hour === 17 && minute === 0) {
                    isBusy = true;
                }
                if(isBusy){
                    slotStyle += " bg-blue-500 bg-opacity-25";
                }

                const emptySlot: BusySlot = {
                    startingHour: hour,
                    startingMin: minute,
                    rowSpan: 1,
                    slot: (
                        <td
                            className={slotStyle}
                            onMouseEnter={() => handleSlotHover(hour, minute)}
                            onMouseLeave={handleSlotLeave}
                        >
                            {isBusy && hoveredSlot === `${hour}:${minute}` && <span className="">Meeting scheduled.</span>}
                        </td>
                    )
                };
                busySlots.push(emptySlot);
            }
            return busySlots;
        });
    };

    

    const generateTimeslots = (dates: any, meetingsToDisplay: any, hour: number, min: number) => {
        return dates.map((date: any) => {
            const meeting = meetingsToDisplay.find((meet: any) => {
                const meetDate = new Date(meet.time);
                const lowerComparisonDate = new Date(meet.time);
                lowerComparisonDate.setHours(hour);
                lowerComparisonDate.setMinutes(min);
                const upperComparisonDate = new Date(meet.time);
                upperComparisonDate.setHours(hour);
                upperComparisonDate.setMinutes(min + 30);
                return meetDate.getDate() === date.getDate() &&
                       meetDate.getMonth() === date.getMonth() &&
                       meetDate.getFullYear() === date.getFullYear() &&
                       meetDate >= lowerComparisonDate &&
                       meetDate <= upperComparisonDate;
            })
            return meeting !== undefined ? <td className="w-[14.2%] h-full border-t border-[#a5a5a5]" rowSpan={1}> <ScheduleSlot height={'h-3/4'} name={meeting.Client.name ?? ''}
            surname={meeting.Client.surname ?? ''} startHour={0} startMin={0} /* todo fix this */ duration={2}></ScheduleSlot></td> : <td className="w-[14.2%] h-full border-t border-[#a5a5a5]"></td>
        });
    };

    const invertSchedules = (schedules: any) => {
        const now = new Date();
        const inverted: {[day: number]: {[hour: number]: [any, any]}} = {};

        for (let day = now.getDate(); day < 7 + now.getDate(); day++) {
            for (let hour = 8; hour <= 21; hour += 1.5) {
                const date = new Date();
                date.setDate(date.getDate() + day);
                date.setHours(Math.floor(hour));
                date.setMinutes((hour - Math.floor(hour)) * 60);
                date.setSeconds(0);

                if (!inverted[day]) {
                    inverted[day] = {};
                }
                if (!inverted[day][Math.floor(hour)]) {
                    inverted[day][Math.floor(hour)] = [true, true];
                }
            }
        }

        for (let schedule of schedules) {
            const date = new Date(schedule.day);

            const now = new Date();
            if (date < now) {
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

            for (let hour = startHour; hour <= endHour; hour += 1.5) {
                if (hour === startHour) {
                    if (startMin === 0) {
                        inverted[date.getDate()][Math.floor(hour)][0] = false;
                    }
                    inverted[date.getDate()][Math.floor(hour)][1] = false;
                }
                else if (hour === endHour) {
                    if (endMin === 30) {
                        inverted[date.getDate()][Math.floor(hour)][0] = false;
                    }
                }
                else {
                    inverted[date.getDate()][Math.floor(hour)][0] = false;
                    inverted[date.getDate()][Math.floor(hour)][1] = false;
                }
            }
        }

        const invertedSlots = [];
        for (let day = now.getDate(); day < 4 + now.getDate(); day++) {
            for (let hour = 8; hour <= 21; hour += 1.5) {
                if (inverted[day][Math.floor(hour)][0] === true) {
                    invertedSlots.push({ time: new Date(now.getFullYear(), now.getMonth(), day, Math.floor(hour), 0, 0) });
                }
                if (inverted[day][Math.floor(hour)][1] === true) {
                    invertedSlots.push({ time: new Date(now.getFullYear(), now.getMonth(), day, Math.floor(hour), 30, 0) });
                }
            }
        }

        console.log("INVERTED SLOTS", invertedSlots);
        return invertedSlots;
        };
        let busySlots: BusySlot[][] | null = null;
if (showCompact) {
    const inverted = invertSchedules(schedules);
    const totalMeetings = [];
    for (let i = 0; i < inverted.length; i++) {
        if (inverted[i]) {
            totalMeetings.push(inverted[i]);
        }
    }
    for (let i = 0; i < meetingsToDisplay.length; i++) {
        totalMeetings.push(meetingsToDisplay[i]);
    }

    busySlots = generateBusySlots(dates, totalMeetings);
}

const timeSlots = [    { hour: 8, min: 0, label: "08:00" },    { hour: 9, min: 30, label: "09:30" },    { hour: 11, min: 0, label: "11:00" },    { hour: 12, min: 30, label: "12:30" },    { hour: 14, min: 0, label: "14:00" },    { hour: 15, min: 30, label: "15:30" },    { hour: 17, min: 0, label: "17:00" },    { hour: 18, min: 30, label: "18:30" },    { hour: 20, min: 0, label: "20:00" },    { hour: 21, min: 30, label: "21:30" },];


return (
    
    <table className="w-full h-full">
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
        {timeSlots.map((slot) => (
            <tr className="h-12" key={`${slot.hour}:${slot.min}`}>
                <td className="  montserrat font-light text-[#B1B1B1]">
                    <p className="w-full text-center">{slot.label}</p>
                </td>
                {showCompact ? busySlots?.flatMap((slots: BusySlot[]) => slots.filter((s: BusySlot) => s.startingHour === slot.hour && s.startingMin === slot.min)).map((s: BusySlot) => s.slot)
                : generateTimeslots(dates, meetingsToDisplay, slot.hour, slot.min)}
            </tr>
        ))}
    </tbody>
</table>
);
}
export default MeetingSchedulePhoneOp; 
