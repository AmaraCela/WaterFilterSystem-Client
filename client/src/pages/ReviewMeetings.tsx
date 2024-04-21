import { useEffect, useState } from "react";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { deleteMeeting, getMeetings } from "../store/meetings/meetingsThunk";
import { useSelector } from "react-redux";
import "../styles/reviewMeetingStyle.css";
const deleteIcon = require("../assets/delete_24px.png");
const editIcon = require("../assets/edit_24px.png");

const ReviewMeetings = () => {
    const dispatch = useAppDispatch();
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const [alertVisibility, setAlertVisibility] = useState('hidden');
    const [meeting_id, setMeeting_id] = useState('');

    useEffect(() => {
        dispatch(getMeetings("6"));
    }, []);

    return (
        <>
            <div className="flex relative">
                <DashboardSideSalesAgent />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                        Review My Meetings
                    </p>
                    <table className="w-3/4">
                        <tbody>
                            <tr>
                                <td><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Date & Time</p></div></td>
                                <td><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Address</p></div></td>
                                <td><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Comments</p></div></td>
                                <td><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Result</p></div></td>
                                <td><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Actions</p></div></td>
                            </tr>
                            {meetings.map((meeting) => (
                                <tr key={meeting.meeting_id} id={meeting.meeting_id.toString()}>
                                    <td><p>{new Date(meeting.time).getHours()}:{new Date(meeting.time).getMinutes()}<br />{new Date(meeting.time).getDate()}/{new Date(meeting.time).getMonth()}/{new Date(meeting.time).getFullYear()}</p></td>
                                    <td><p>{meeting.place}</p></td>
                                    <td><p>{meeting.outcomeComment}</p></td>
                                    <td><p>{meeting.succesful}</p></td>
                                    <td><div className="flex"><button onClick={() => {setMeeting_id(meeting.meeting_id.toString());setAlertVisibility("flex")}}><img src={deleteIcon} alt="" /></button> <button><img src={editIcon} alt="" /></button> </div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`absolute h-full w-full top-0 ${alertVisibility} items-center justify-center`}>
                    <div className="h-1/3 w-1/3 z-10 bg-white alert-box rounded-md flex flex-col justify-between py-4">
                            <p className="main-font w-full text-center mt-8 font-semibold text-lg">Proceed with deleting the meeting?</p>
                            <div className="flex w-full">
                                <button className="bg-[#bb0000] main-font w-1/2 h-[35px] text-white m-3 rounded-md" onClick={() => {dispatch(deleteMeeting(meeting_id)); setAlertVisibility("hidden");}}>Yes</button>
                                <button className="bg-[#79f33d] main-font w-1/2 h-[35px] m-3 rounded-md" onClick={() => setAlertVisibility("hidden")}>Cancel</button>
                            </div>
                    </div>
            </div>
        </>
    );
}

export default ReviewMeetings;