import { useEffect } from "react";
import DashboardSide_SalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { getMeetings } from "../store/meetings/meetingsThunk";
import { useSelector } from "react-redux";
const deleteIcon = require("../assets/delete_24px.png");
const editIcon = require("../assets/edit_24px.png");

const ReviewMeetings = () => {
    const dispatch = useAppDispatch();
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    
    useEffect(() => {
        dispatch(getMeetings("6"));
    }, []);

    return (
        <div className="flex">
            <DashboardSide_SalesAgent />
            <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                       Review My Meetings
                    </p>
                    <table className="w-3/4">
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
                                <td><div className="flex"><button><img src={deleteIcon} alt="" /></button> <button><img src={editIcon} alt="" /></button> </div></td>
                            </tr>
                        ))}
                    </table>
                </div>

        </div>
    );
}

export default ReviewMeetings;