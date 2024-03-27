import DashboardSide from "../components/DashboardSide";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";
import Schedule from "../components/Schedule";

const Schedules = () => {
    return (
            <div className="dashboard rounded-3xl flex flex-row h-lvh">
                <DashboardSide highlighted={"Schedules"} />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">
                        Sales Agent Meetings
                    </p>
                    <div className="flex w-full justify-between">
                        <div className="w-3/4 overflow-scroll h-full">
                            <Schedule />
                        </div>
                        <div className="w-1/4 mr-3">
                            <SideCalendar />
                        </div>
                    </div>

                </div>
            </div>

    );
}

export default Schedules;