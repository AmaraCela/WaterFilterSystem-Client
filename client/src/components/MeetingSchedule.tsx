import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMeetings } from "../store/meetings/meetingsThunk";
import { RootState, useAppDispatch } from "../store/store";
import ScheduleSlot from "./ScheduleSlot";
import { Meeting } from "../types/types";
import { getLoggedUserId } from "../serverUtils/serverUtils";

const MeetingSchedule = () => {
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const dispatch = useAppDispatch();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [meetingsToDisplay, setMeetingsToDisplay] = useState<Meeting[]>([]);
    const [dates, setDates] = useState<Date[]>([]);

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
        dispatch(getMeetings(user_id));
    }, []);

    useEffect(() => {
        setMeetingsToDisplay(meetings);
    }, [meetings]);

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
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(9);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(9);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className=" h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1] ">
                        <p className="w-full text-center">10:00</p>
                    </td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(10);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(10);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">11:00</p>
                    </td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(11);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(11);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">12:00</p>
                    </td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(12);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(12);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">13:00</p>
                    </td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(13);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(13);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}> <ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">14:00</p></td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(14);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(14);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}><ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">15:00</p></td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(15);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(15);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}><ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">16:00</p></td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(16);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(16);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}><ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">17:00</p></td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(17);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(17);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}><ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">18:00</p></td>
                    {dates.map((date) => {
                        let meeting = meetingsToDisplay.filter((meet) => {
                            let meetDate = new Date(meet.time);
                            let lowerComparisonDate = new Date(meet.time);
                            lowerComparisonDate.setHours(18);
                            lowerComparisonDate.setMinutes(0);
                            let upperComparisonDate = new Date(meet.time);
                            upperComparisonDate.setHours(18);
                            upperComparisonDate.setMinutes(30);
                            return meetDate.getDate() === date.getDate() && meetDate.getMonth() === date.getMonth() && meetDate.getFullYear() === date.getFullYear() && meetDate >= lowerComparisonDate && meetDate <= upperComparisonDate
                        })
                        return meeting.length > 0 ? <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}><ScheduleSlot height={'h-3/4'} name={meeting[0].Client.name ?? ''} surname={meeting[0].Client.surname ?? ''} time={meeting[0].time}></ScheduleSlot></td> : <td className="w-[22%] h-full border-t border-[#a5a5a5]"></td>
                    })}
                </tr>
            </tbody>
        </table>
    );
}

export default MeetingSchedule;