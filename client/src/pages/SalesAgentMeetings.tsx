import CalendarDetails from "../components/CalendarDetails";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import Schedule from "../components/Schedule";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";

const SalesAgentMeetings = () => {
    return (
        <div className="dashboard rounded-3xl flex flex-row h-lvh">

            <DashboardSideSalesAgent />
            <div className="w-3/4">
                <TopIcons />
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                    Meeting Agenda
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

export default SalesAgentMeetings;