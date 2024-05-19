import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide_ChiefOfOperations";
import CommisionTable from '../components/commissionTable';
import SalesTable from "../components/tableOfSales";
import '../styles/chiefofoperations.css'
import InventoryTaskAssignForm from "../components/Inventory-assignNewTask";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");


const ChiefOfOperations_Inventory_assignNewTask = () => {
    return (
        <div className="dashboard flex h-screen">
            <DashboardSide />
            <div className="flex flex-col w-full h-full justify-between">
                <div className="flex justify-end items-center p-4">
                    <img src={bell} alt="bell" className="h-6" />
                    <img src={message} alt="message" className="h-6 ml-7" />
                    <img src={exit} alt="exit" className="h-6 ml-7" />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow">
                    <p className="content main-font text-[#3D5AA1] font-bold text-4xl mb-8">
                        Assign a new Task
                    </p>
                    <div className="flex justify-center w-[160vh] items-center">
                        <InventoryTaskAssignForm />
                    </div>
                </div>
                <div></div> {/* Empty div to balance the spacing */}
            </div>
        </div>
    );
}

export default ChiefOfOperations_Inventory_assignNewTask;
