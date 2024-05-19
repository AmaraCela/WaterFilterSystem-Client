import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMeetings } from "../store/meetings/meetingsThunk";
import { RootState, useAppDispatch } from "../store/store";
import ScheduleSlot from "./ScheduleSlot";
import { Meeting } from "../types/types";
import { getLoggedUserId, retrieveAllScheduleFromServer } from "../serverUtils/serverUtils";
import '../styles/scrollbarStyling.css'; 

const MeetingSchedule = ({showCompact}: any) => {
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const dispatch = useAppDispatch();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [meetingsToDisplay, setMeetingsToDisplay] = useState<any[]>([]);
    const [dates, setDates] = useState<Date[]>([]);
    const [schedules, setSchedules] = useState<any[]>([]);

    useEffect(() => {
        let newDates = [];
        let today = new Date();
        newDates.push(today);

        for (let i = 1; i <= 3; i++) {
            let nextDate = new Date();
            nextDate.setDate(today.getDate() + i);
            newDates.push(nextDate);
        }

        setDates(newDates);

        const user_id = getLoggedUserId();

        if (!showCompact) {
            dispatch(getMeetings(user_id));
        }
        else {
            dispatch(getMeetings(null));
        }
    }, []);

    useEffect(() => {
        retrieveAllScheduleFromServer().then((response) => {
            setSchedules(response);
            setMeetingsToDisplay(meetings);
        });
    }, [meetings]);

    // combines consecutive and overlapping slots into one for compact view
    const generateBusySlots = (dates: any, meetingsToDisplay: any) => {
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

            const busySlots = [];
        
            let currentSlot: { startingHour: number; startingMin: number; rowSpan: number; slot: any } | null = null;

            for (let meeting of meetings) {
                const dateTime = new Date(meeting.time);
                const meetingHour = dateTime.getHours();
                const meetingEndHour = meetingHour + 2;
                const meetingMin = dateTime.getMinutes();

                if (!currentSlot) {
                    currentSlot = { startingHour: meetingHour, startingMin: meetingMin, rowSpan: 2, slot: (
                        <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}>
                            <ScheduleSlot height={'h-3/4'} name={'Slot unavailable'} surname={''} startHour={meetingHour} startMin={meetingMin} duration={90}/>
                        </td>
                    )};
                    busySlots[meetingHour - 9] = currentSlot;
                } else if (meetingHour <= currentSlot.startingHour + currentSlot.rowSpan) {
                    const diffRowSpan = meetingEndHour - currentSlot.startingHour - currentSlot.rowSpan;
                    currentSlot.rowSpan = meetingEndHour - currentSlot.startingHour;
                    // todo fix ending time
                    currentSlot.slot = (
                        <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={currentSlot.rowSpan}>
                            <ScheduleSlot height={'h-3/4'} name={'Slot unavailable'} surname={''} startHour={currentSlot.startingHour} startMin={currentSlot.startingMin} duration={90 + (currentSlot.rowSpan-2)*60}/>
                        </td>
                    );
                } else {
                    currentSlot = { startingHour: meetingHour, startingMin: meetingMin, rowSpan: 2, slot: (
                        <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}>
                            <ScheduleSlot height={'h-3/4'} name={'Slot unavailable'} surname={''} startHour={meetingHour} startMin={meetingMin} duration={90}/>
                        </td>
                    ) };
                    busySlots[meetingHour - 9] = currentSlot;
                }
            }

            let hour = 9;
            for (const slot of busySlots) {
                if (slot === undefined) {
                    continue;
                }

                while (slot.startingHour > hour) {
                    let emptySlot = {startingHour: hour, startingMin: 0, rowSpan: 1, slot: <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>};
                    busySlots.splice(hour - 9, 1, emptySlot);
                    hour++;
                }
                hour += slot.rowSpan;

                while (hour <= 18) {
                    let emptySlot = {startingHour: hour, startingMin: 0, rowSpan: 1, slot: <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>};
                    busySlots.splice(hour - 9, 1, emptySlot);
                    hour++;
                }
            }
            return busySlots;
        });
    }

    // generates slots for normal (single agent) viewing
    const generateTimeslots = (dates: any, meetingsToDisplay: any, hour: number) => {
        return dates.map((date: any) => {
            let meeting = meetingsToDisplay.find((meet: any) => {
                let meetDate = new Date(meet.time);
                let lowerComparisonDate = new Date(meet.time);
                lowerComparisonDate.setHours(hour);
                lowerComparisonDate.setMinutes(0);
                let upperComparisonDate = new Date(meet.time);
                upperComparisonDate.setHours(hour);
                upperComparisonDate.setMinutes(30);
                return meetDate.getDate() === date.getDate() &&
                       meetDate.getMonth() === date.getMonth() &&
                       meetDate.getFullYear() === date.getFullYear() &&
                       meetDate >= lowerComparisonDate &&
                       meetDate <= upperComparisonDate;
            })
            return meeting !== undefined ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting.Client?.name ?? ''} surname={meeting.Client?.surname ?? ''} startHour={0} startMin={0} /* todo fix this */ duration={2}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
        });
    };

    // creates fake "meetings" when an agent is not available at a time slot to display in the timetable
    const invertSchedules = (schedules: any) => {
        const now = new Date();
        const inverted: {[day: number]: {[hour: number]: [any, any]}} = {};

        for (let day = now.getDate(); day < 7 + now.getDate(); day++) {
            for (let hour = 9; hour <= 20; hour++) {
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

            for (let hour = startHour; hour < endHour; hour++) {
                if (hour === startHour) {
                    if (startMin === 0) {
                        inverted[date.getDate()][hour][0]++;
                    }
                    inverted[date.getDate()][hour][1]++;
                }
                else if (hour === endHour - 1) {
                    if (endMin === 30) {
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
        for (let day = now.getDate(); day < 4 + now.getDate(); day++) {
            for (let hour = 9; hour <= 20; hour++) {
                invertedSlots.push([inverted[day][hour][0], { time: new Date(now.getFullYear(), now.getMonth(), day, hour, 0, 0) }]);
                invertedSlots.push([inverted[day][hour][1], { time: new Date(now.getFullYear(), now.getMonth(), day, hour, 30, 0) }]);
            }
        }

        // console.log("INVERTED SLOTS", inverted);
        return invertedSlots;
    };

    let busySlots = null;
    if (showCompact) {
        const inverted = invertSchedules(schedules);
        const totalMeetings = [];
        const copyMeetings = [...meetingsToDisplay];
        
        for (let i = 0; i < inverted.length; i++) {
            if (inverted[i][0] == 0) {
                totalMeetings.push(inverted[i][1]);
            }
            else {
                for (let j = 0; j < copyMeetings.length; j++) {
                    if (copyMeetings[j] === null) {
                        continue;
                    }

                    const meetingDate = new Date(copyMeetings[j].time);
                    const invertedDate = new Date(inverted[i][1].time);
                    if (meetingDate.getDate() === invertedDate.getDate() && 
                        meetingDate.getHours() === invertedDate.getHours() &&
                        meetingDate.getMinutes() === invertedDate.getMinutes()) {
                            // if a meeting is matched to a free slot, decrement the number of free slots
                            inverted[i][0]--;
                            // if there are no more free slots, add the meeting to the totalMeetings array to display the slot as busy
                            if (inverted[i][0] === 0) {
                                totalMeetings.push(copyMeetings[j]);
                            }
                            copyMeetings[j] = null;
                    }
                }
            }
        }

        busySlots = generateBusySlots(dates, totalMeetings);
    }

    return (
        <table className="w-full h-full">
            <thead>
                <tr>
                    <th className="w-[10%] montserrat font-light text-[#B1B1B1]">Week</th>
                    {dates.map((date) => (
                        date.getDate() === new Date().getDate() ? <th className={`w-[22%] montserrat font-light text-[#5272E9]`}>{date.getDate()}<br />{days[date.getDay()]}</th> :
                            <th className={`w-[22%] montserrat font-light text-[#B1B1B1]`}>{date.getDate()}<br />{days[date.getDay()]}</th>
                    ))}
                </tr>
                <tr>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                </tr>
            </thead>
            <tbody className="mt-4">
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">09:00</p>
                    </td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 9)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 9)}
                </tr>
                <tr className=" h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1] ">
                        <p className="w-full text-center">10:00</p>
                    </td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 10)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 10)}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">11:00</p>
                    </td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 11)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 11)}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">12:00</p>
                    </td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 12)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 12)}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">13:00</p>
                    </td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 13)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 13)}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">14:00</p></td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 14)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 14)}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">15:00</p></td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 15)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 15)}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">16:00</p></td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 16)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 16)}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">17:00</p></td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 17)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 17)}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">18:00</p></td>
                    {showCompact ? busySlots.flatMap((slots: any) => slots.filter((slot: any) => slot.startingHour === 18)).map((slot: any) => slot.slot)
                    : generateTimeslots(dates, meetingsToDisplay, 18)}
                </tr>
            </tbody>
        </table>
    );
}

export default MeetingSchedule;