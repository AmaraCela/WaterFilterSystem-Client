import ClientTable from "../components/TableUsers_ChM";
import ReferenceInfo from "../components/ReferenceInfo";
import BuyerInfo from "../components/BuyerInfo";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import { useState } from "react";
import { Client } from "../types/types";

const sampleClients: Client[] = [
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
const BuyersAndReferences = () => {
    const [keyword, setKeyword] = useState("");
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);

    const filteredClients = sampleClients.filter(client =>
        client.name && client.name.toLowerCase().includes(keyword.toLowerCase()) ||
        (client.surname && client.surname.toLowerCase().includes(keyword.toLowerCase())) // Type guard
    );

    const handleRowClick = (client: Client) => {
        setSelectedClient(client);
    };

    const closePopup = () => {
        setSelectedClient(null);
    };

    return (
        <>
            <div className="flex justify-center items-center h-fit ">
                <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                    <DashboardSide highlighted={"Buyers"} />
                    <div className="w-3/4 main-content ml-10 mr-10">
                        <TopIcons />
                        <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">Buyers and References</p>
                        <input type="search" className="w-1/2 rounded-3xl ml-12 mt-2 search-bar pl-4 h-7 flex items-center" placeholder="Search a buyer/reference" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                        <div className="flex gap-7 ml-5 mt-10  px-5 text-xs font-medium text-center whitespace-nowrap">
                    <div className="shrink-0 self-start w-3.5 h-3 bg-emerald-300" />
                    <div className="my-auto text-green-600">Reference</div>
                    <div className="shrink-0 self-start w-3.5 h-3 bg-indigo-500" />
                    <div className="text-indigo-800">Buyer</div>
                    </div>
                      <div className="ml-10 mr-10 mt-10">
                   <ClientTable clients={filteredClients} handleRowClick={handleRowClick} selectedClient={selectedClient} />

                      </div>
                    </div>
                </div>
            </div>
            {selectedClient && (
                <div className="absolute w-full h-screen top-0 flex items-center justify-center bg-[#fdfcfcd5]">
                     {selectedClient.hasMadePurchase ? (
            <ReferenceInfo client={selectedClient} setDivVisibility={closePopup} />
          ) : (
            <BuyerInfo client={selectedClient} setDivVisibility={closePopup} />
          )}
                </div>
            )}
        </>
    );
}

export default BuyersAndReferences;
