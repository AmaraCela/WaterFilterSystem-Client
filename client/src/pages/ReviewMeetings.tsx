import { useEffect, useState } from "react";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { deleteMeeting, getMeetings } from "../store/meetings/meetingsThunk";
import { useSelector } from "react-redux";
import "../styles/reviewMeetingStyle.css";
import { getClient } from "../store/client/clientThunks";
const deleteIcon = require("../assets/delete_24px.png");
const editIcon = require("../assets/edit_24px.png");

const ReviewMeetings = () => {
    const dispatch = useAppDispatch();
    const meetings = useSelector((state: RootState) => state.meeting.meetings);
    const clientToEdit = useSelector((state: RootState) => state.client.clientToEdit);
    const [alertVisibility, setAlertVisibility] = useState('hidden');
    const [editVisibility, setEditVisibility] = useState('hidden');
    const [meeting_id, setMeeting_id] = useState('');

    useEffect(() => {
        dispatch(getMeetings("6"));
    }, []);

    console.log(clientToEdit);
    return (
        <>
            <div className="flex relative dashboard h-screen">
                <DashboardSideSalesAgent />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                        Review My Meetings
                    </p>
                    <div className="w-4/5">
                        <div className="w-full mt-5">
                            <div className="flex justify-evenly w-full py-2 bg-[#fcfcfcc5] mb-2 ml-4">
                                <div className="td-item"><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Date & Time</p></div></div>
                                <div className="td-item"><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Address</p></div></div>
                                <div className="td-item"><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Comments</p></div></div>
                                <div className="td-item"><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Result</p></div></div>
                                <div className="td-item"><div className="bg-[#5882c17d] rounded-[10px] p-2"><p className="w-full text-center">Actions</p></div></div>
                            </div>
                            {meetings.map((meeting) => (
                                <div key={meeting.meeting_id} id={meeting.meeting_id.toString()} className="ml-4 flex w-full justify-evenly border rounded-md border-[#B8B2B2] bg-white mb-2">
                                    <div className="td-item flex items-center p-1"><p>{new Date(meeting.time).getHours()}:{new Date(meeting.time).getMinutes()}<br />{new Date(meeting.time).getDate()}/{new Date(meeting.time).getMonth()}/{new Date(meeting.time).getFullYear()}</p></div>
                                    <div className="td-item flex items-center p-1"><p>{meeting.place}</p></div>
                                    <div className="td-item flex items-center p-1"><p>{meeting.outcomeComment}</p></div>
                                    <div className="td-item flex items-center p-1"><p>{meeting.succesful}</p></div>
                                    <div className="td-item flex items-center p-1">
                                        <div className="flex justify-evenly w-full">
                                            <button onClick={() => { setMeeting_id(meeting.meeting_id.toString()); setAlertVisibility("flex") }}><img src={deleteIcon} alt="" /></button>
                                            <button onClick={() => { dispatch(getClient(meeting.client.toString()));setEditVisibility("flex"); }}><img src={editIcon} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute h-full w-full top-0 ${alertVisibility} items-center justify-center`}>
                <div className="border-2 border-[#844B2A] bg-white p-12 rounded-[30px]">
                    <p className="main-font w-full text-center mt-8 font-semibold text-lg text-[#bb0000]">Proceed with deleting the meeting?</p>
                    <div className="flex w-full">
                        <button className="rounded-[4px] font-bold border-2 border-[#E97652] main-font w-1/2 h-[35px] m-3 " onClick={() => setAlertVisibility("hidden")}>CANCEL</button>
                        <button className="rounded-[4px] font-bold border-2 border-[#E97652] main-font w-1/2 h-[35px] m-3" onClick={() => { dispatch(deleteMeeting(meeting_id)); setAlertVisibility("hidden"); }}>YES</button>
                    </div>
                </div>
            </div>
            <div className={`absolute h-full w-full top-0 ${editVisibility} items-center justify-center`}>
                <div className="border-2 border-[#844B2A] bg-white p-12 rounded-[30px]">
                    <div className="flex">
                        <img src={editIcon} alt="" />
                        <p className="montserrat text-[#844B2A] font-bold">edit meeting</p>
                    </div>
                    <label htmlFor="name" className="montserrat text-[#844B2A] font-semibold">Name of Client</label><br />
                    <input type="text" id="name" className="border-2 rounded-md border-[#844B2A] bg-[#fd9e305c] w-full" value={clientToEdit?.name} />
                    <br />
                    <label htmlFor="address" className="montserrat text-[#844B2A] font-semibold">Address of Client</label><br />
                    <input type="text" id="address" className="border-2 rounded-md border-[#844B2A] bg-[#fd9e305c] w-full" />
                    <br />
                    <label htmlFor="number" className="montserrat text-[#844B2A] font-semibold">Phone Number</label><br />
                    <input type="text" id="number" className="border-2 rounded-md border-[#844B2A] bg-[#fd9e305c] w-full" />
                    <br />
                    <label htmlFor="date" className="montserrat text-[#844B2A] font-semibold">Date and Time</label><br />
                    <input type="date" id="date" className="border-2 rounded-md border-[#844B2A] bg-[#fd9e305c]" />
                    <input type="time" id="date" className="border-2 ml-4 rounded-md border-[#844B2A] bg-[#fd9e305c]" />
                    <br />
                    <label htmlFor="notes" className="montserrat text-[#844B2A] font-semibold">Special Notes (Optional)</label><br />
                    <input type="text" id="notes" className="border-2 rounded-md border-[#844B2A] bg-[#fd9e305c] w-full" />
                    <br />
                    <div className="flex justify-evenly mt-6">
                        <button className="rounded-[4px] font-bold border-2 border-[#E97652] w-1/3" onClick={() => { setEditVisibility("hidden") }}>CANCEL</button>
                        <button className="rounded-[4px] font-bold border-2 border-[#E97652] w-1/3">SAVE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewMeetings;