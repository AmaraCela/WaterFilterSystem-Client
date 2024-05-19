import { useEffect, useState } from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import MeetingSchedule from "../components/MeetingSchedulePhoneOp";
import CalendarDetails from "../components/CalendarDetails";
import AddNewMeeting from "../components/addNewMeeting"; // Import the AddNewMeeting component
const backgroundLight = require('../assets/backgroundLight.png').default;


const PhoneAgent_Meetings = () => {
    const [showAddMeeting, setShowAddMeeting] = useState(false); // State to manage visibility of AddNewMeeting component

    const handleAddMeetingClick = () => {
        setShowAddMeeting(true); // Set showAddMeeting to true when "Add New Meeting" button is clicked
    };

    return (
        <div className="flex flex-col justify-center px-1 border-solid backdrop-blur-[50px]  bg-opacity-30 border-[3px] border-zinc-400 border-opacity-0 min-h-screen rounded-[30px]" style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="fixed top-0 left-0 w-full z-10">
                <PhoneAgentDashboard/>
            </div> 
            
            <div className="relative overflow-hidden flex flex-col mt-[80px]">
            <p className=" h-[25vh]">
                </p>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-30 mb-15 ">
                    Meetings
                </p>
                <button className="flex self-end bg-indigo-500 hover:bg-green-400 text-white font-bold mr-16 mt-2 py-2 px-4 rounded-full" onClick={handleAddMeetingClick}>
                Add New Meeting
                </button>
                <div className="flex w-full justify-between mt-8">
                    <div className="w-full overflow-y-auto  mr-16">
                        <MeetingSchedule showCompact={true}/>
                    </div>
                 
                </div>
            </div>
            {showAddMeeting && <AddNewMeeting />} {/* Render AddNewMeeting component conditionally */}
        </div>
    );
}

export default PhoneAgent_Meetings;
