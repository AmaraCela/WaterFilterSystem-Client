import DashboardSide from "../components/DashboardSide";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";
import Schedule from "../components/Schedule";
import CalendarDetails from "../components/CalendarDetails";

const Schedules = () => {
    return (
            <div className="dashboard rounded-3xl flex flex-row h-lvh">
                <DashboardSide highlighted={"Schedules"} />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                        Sales Agent Meetings
                    </p>
                    <div className="flex w-full justify-between mt-8">
                        <div className="w-3/4 overflow-y-scroll h-[80vh] mr-16">
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

export default Schedules;