import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide_ChiefOfOperations";
import CommisionTable from '../components/commissionTable';
import '../styles/chiefofoperations.css'
import SalesTable from "../components/tableOfSales";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const ChiefOperationsDashboard_AgentCommissions = () => {
    return (
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide />
                <div className="w-1/2 ">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7"/>
                    </div>
                    <p className="main-font text-[#3D5AA1] font-bold text-4xl ml-12 mt-8">
                        List of Agent Commissions
                    </p>
                    <p className=" ml-12 mt-8">
                    <SalesTable/>                    
                    </p>

                </div>
               

            </div>


    );
}

export default ChiefOperationsDashboard_AgentCommissions;