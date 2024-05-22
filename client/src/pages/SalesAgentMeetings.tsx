import CalendarDetails from "../components/CalendarDetails";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import MeetingSchedule from "../components/MeetingSchedulePhoneOp";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";

const SalesAgentMeetings = () => {
    return (
        <div className="dashboard flex flex-row w-screen h-screen bg-white">  
        <div className="bg-white">
            <DashboardSideSalesAgent />
        </div>
            <div className="main-content w-full overflow-y-auto h-screen "> {/* Adjusted height to h-screen */}
                <div className="flex flex-row pt-4 pr-8 justify-end items-end">
                    <TopIcons />
                </div>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-9">
                    Meeting Agenda
                </p>
                <div className="flex w-full justify-between mt-20">
                    <div className="w-3/4 overflow-y-scroll overflow-x-scroll w-[130vh] max-h-[100vh] mr-3">
                        <MeetingSchedule showCompact={false}/>
                    </div>
                    <div className="w-1/4 mr-4">
                        <SideCalendar />
                        <div className="mt-2">
                            <CalendarDetails />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesAgentMeetings;
