import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import TableOfUsers from "../components/TableUsers_ChM";
import { Client } from "../types/types";

export const sampleClients: Client[] = [
    {
      id: 1,
      name: "Gjergj",
      surname: "Shqiponja",
      phoneNo: "123-456-7890",
      address: "Rruga e Këngëtarëve, Tiranë",
      status: "IN_WAITLIST",
      hasMadePurchase: true,
      createdAt: "2024-05-14",
      assignedOperator: 1, 
        referrals: [],
        referredBy: 2
    },
    {
      id: 2,
      name: "Vangjush",
      surname: "Ujqër",
      phoneNo: "456-789-0123",
      address: "Sheshi i Fluturimeve, Vlorë",
      status: "IN_REDLIST",
      hasMadePurchase: false,
      createdAt: "2024-05-15",
      assignedOperator: 2,
      referrals: [1],
      referredBy: 1
    },
    // Add more data...
  ];

  
const ChiefMarketingBR = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide highlighted={"none"}/>
                <div className="w-3/4 main-content">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">
                       
                        Buyers and References
                    </p>
                    <input type="search" className="rounded-3xl ml-12 mt-8 search-bar pl-4 h-7 flex items-center" placeholder="Search"/>
                    
                    <div className="flex gap-7 ml-5 mt-10  px-5 text-xs font-medium text-center whitespace-nowrap">
                    <div className="shrink-0 self-start w-3.5 h-3 bg-emerald-300" />
                    <div className="my-auto text-green-600">Reference</div>
                    <div className="shrink-0 self-start w-3.5 h-3 bg-indigo-500" />
                    <div className="text-indigo-800">Buyer</div>
                    </div>
                    <div className="mt-5 ml-5 mb-5 mr-5 ">
                        
                       {/* <TableOfUsers clients={sampleClients} /> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChiefMarketingBR;
