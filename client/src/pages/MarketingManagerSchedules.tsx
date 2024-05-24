import "../styles/chiefMarketingDashboard.css"; 
import AgentScheduleComponent from "../components/AgentSchedules";
import { logout } from "../serverUtils/serverUtils";
import DashboardSide from "../components/DashboardSide";

const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const MarketingManagerSchedules = () => {
    return (
        // <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide highlighted={"Schedules"}/>
                <div className="w-2/3 main-content">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7" style={{ cursor: 'pointer' }} onClick={logout} />
                    </div>
                    <AgentScheduleComponent/>
            </div>
            
        </div>
        // </div>

    );
}

export default MarketingManagerSchedules;