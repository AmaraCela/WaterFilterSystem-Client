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
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <div>
                    <div className="mr-20">
                    <div className="mr-20">
                    <div className="mr-20">
                    <div className="mr-20">
                    <div className="mr-20">
                    <div className="mr-20"> 
                    <DashboardSide/>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                </div>
                <div className="w-1/2 ">
                    <div className="flex flex-row pt-4 pr-8 items-end justify-end">
                        <img src={bell} alt="" className="h-6" />
                        <img src={message} alt="" className="h-6 ml-7"/>
                        <img src={exit} alt="" className="h-6 ml-7"/>
                    </div>
                    <p className="main-font text-[#3D5AA1] font-bold text-4xl ml-12 mt-8">
                        Inventory
                    </p>

                    <button >
                    <div style= {{ width: '300px', marginLeft: '25px', backgroundColor: 'rgba(11, 28, 90, 0.5)', color: 'white' }} className="items-center px-16 pt-4 pb-3.5 mt-4 rounded-xl  h-[60px]">
                    <p>+ Assign a new task</p>
                    </div>

                    </button>
                    
                    <div className="flex gap-20"  >
                        <InventoryTasks_Table/>
                        <Inventory_Note/>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ChiefOfOperations_Inventory_ListOfTasks;
