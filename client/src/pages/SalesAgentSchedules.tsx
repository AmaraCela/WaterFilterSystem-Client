import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide";
import DashboardSidePhoneAgent from "../components/DashboardSide_PhoneAgent";
import PhoneCall from "../components/pa-phoneCall";
import DashboardSideSalesAgent from  "../components/DashboardSide_SalesAgent";
import AgentScheduleComponent from "../components/AgentSchedules";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const SalesAgentSchedules = () => {
    return (
        // <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSideSalesAgent />
                <div className="w-2/3 main-content">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7"/>
                    </div>
                    <AgentScheduleComponent/>
            </div>
            
        </div>
        // </div>

    );
}

export default SalesAgentSchedules;