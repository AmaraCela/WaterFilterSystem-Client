import CalendarDetails from "../components/CalendarDetails";
import DashboardSidePhoneAgent from "../components/DashboardSide_PhoneAgent";
import Schedule from "../components/Schedule";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";

const PhoneAgentMeetings = () => {
    return (
        <div className="dashboard rounded-3xl flex flex-row h-lvh">

            <DashboardSidePhoneAgent />
            <div className="w-3/4">
                <TopIcons />
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                    View Meetings
                </p>
                <div className="flex w-full justify-between mt-8">
                    <div className="w-3/4 overflow-hidden h-full mr-16">
                        <Schedule />
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

export default PhoneAgentMeetings;