import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide_ChiefOfOperations";
import CommisionTable from '../components/commissionTable';
import SalesTable from "../components/tableOfSales";
import '../styles/chiefofoperations.css'
import SalesAndDebtsTable from "../components/SalesAndDebtsTable";
import InventoryTasks_Table from "../components/InventoryTasks_Table";
import Inventory_Note from "../components/Inventory_Note";
const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const ChiefOfOperations_Inventory_ListOfTasks = () => {
    return (
        <div className="dashboard flex flex-row w-screen h-screen bg-white">
            <div className="sticky top-0 h-full bg-white">
                <DashboardSide />
            </div>
            <div className="main-content flex flex-col w-full h-screen pl-8 pr-8">
                <div className="flex flex-row pt-4 justify-end items-center">
                    <img src={bell} alt="Bell" className="h-6" />
                    <img src={message} alt="Message" className="h-6 ml-7" />
                    <img src={exit} alt="Exit" className="h-6 ml-7" />
                </div>
                <p className="main-font text-[#3D5AA1] font-bold text-4xl mt-8">
                    Inventory
                </p>
                <div className="flex flex-row justify-start mt-10">
                <button className="bg-blue-950 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg">
                    + NEW TASK
                </button>
                </div>
                
                <div className="flex flex-row mt-8 pt-8">
                    {/* add a scrollbar */}

                    <div className="w-[100vh] h-[70vh]">
                    <InventoryTasks_Table />
                    </div>
                    <Inventory_Note />
                </div>
            </div>
        </div>
    );
}

export default ChiefOfOperations_Inventory_ListOfTasks;
