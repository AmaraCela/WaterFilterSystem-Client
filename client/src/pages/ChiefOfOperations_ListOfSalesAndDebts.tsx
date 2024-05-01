import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide_ChiefOfOperations";
import '../styles/chiefofoperations.css'
import SalesAndDebtsTable from "../components/SalesAndDebtsTable";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const ChiefOperationsDashboard_ListOfSalesAndDebts = () => {
    return (
        <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
            <DashboardSide />
            <div className="w-1/2 ">
                <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                    <img src={bell} alt="" className="h-6" />
                    <img src={message} alt="" className="h-6 ml-7" />
                    <img src={exit} alt="" className="h-6 ml-7" />
                </div>
                <p className="main-font text-[#3D5AA1] font-bold text-4xl ml-12 mt-8">
                    Sales and Debts
                </p>
                <p className="ml-12 mt-8">
                    <SalesAndDebtsTable />
                </p>
            </div>
        </div>
    );
}

export default ChiefOperationsDashboard_ListOfSalesAndDebts;