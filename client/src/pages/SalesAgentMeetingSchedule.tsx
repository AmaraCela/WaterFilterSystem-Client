import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide";
import PhoneCall from "../components/pa-phoneCall";
import DashboardSideSalesAgent from  "../components/DashboardSide_SalesAgent";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const SalesAgentTemplate = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max flex flex-row">
                <div className="bg-white">
                <DashboardSideSalesAgent />
                </div>
                <div className="w-2/3 main-content">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7"/>
                    </div>
        
                
            </div>
        </div>
     </div>

    );
}

export default SalesAgentTemplate;