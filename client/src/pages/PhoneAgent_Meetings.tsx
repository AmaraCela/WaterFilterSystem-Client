import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import MeetingSchedule from "../components/MeetingSchedule";
import CalendarDetails from "../components/CalendarDetails";
const backgroundLight = require('../assets/backgroundLight.png').default;


const PhoneAgent_Meetings = () => {
    return (
        <div className="flex flex-col justify-center px-1 border-solid backdrop-blur-[50px] bg-white bg-opacity-30 border-[3px] border-zinc-400 border-opacity-0 min-h-screen rounded-[30px]" style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="fixed top-0 left-0 w-full z-10">
                <PhoneAgentDashboard/>
            </div> 
            
            <div className="relative overflow-hidden flex flex-col mt-[80px]">
            <p className=" h-[25vh]">
                </p>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-30 mb-15 ">
                    Meetings
                </p>
                <button className="flex self-end text-green-500 font-bold bg-white border border-green-500 border-solid rounded-md  w-[25vh] h-[5vh] mr-16 px-4 py-2 shadow-md hover:shadow-lg"> 
                    Add New Meeting
                </button>
                <div className="flex w-full justify-between mt-8">
                    <div className="w-3/4 overflow-y-auto  mr-16">
                        <MeetingSchedule />
                    </div>
                    <div className="w-1/4 mr-4">
                        <div className="mt-2">
                            <CalendarDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhoneAgent_Meetings;
