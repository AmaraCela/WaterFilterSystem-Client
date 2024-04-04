import { useSelector } from "react-redux";
import ClientDisplay from "../components/Client";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { Fragment, useEffect, useState } from "react";
import { allClients } from "../store/client/clientThunks";
import BuyerInfo from "../components/BuyerInfo";
import { Client } from "../types/types";

const BuyersAndReferences = () => {

    const dispatch = useAppDispatch();
    const clients = useSelector((state: RootState) => state.client.clients);
    const [keyword, setKeyword] = useState("");
    const [divVisibility, setDivVisibility] = useState(false);
    const [client, setClient] = useState<Client | null>(null);

    useEffect(() => {
        dispatch(allClients(null));
    }, []);

    return (
        <>
            <div className="flex justify-center items-center h-fit">
                <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                    <DashboardSide highlighted={"none"} />
                    <div className="w-3/4">
                        <TopIcons />
                        <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">Buyers and References</p>
                        <input type="search" className="w-1/2 rounded-3xl ml-12 mt-2 search-bar pl-4 h-7 flex items-center" placeholder="Search a buyer/reference" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyUp={(e) => { e.key === 'Enter' && dispatch(allClients(keyword)); }} />
                        <div className="flex ml-12  mt-1 items-center">
                            <div className="h-3 w-3 bg-[#28D372] ml-2"></div>
                            <p className="text-[#28D372] rubik ml-2">Reference</p>
                            <div className="h-3 w-3 bg-[#3D5AA1] ml-8"></div>
                            <p className="text-[#3D5AA1] rubik ml-2">Buyer</p>
                        </div>
                        <div className="overflow-x-hidden overflow-y-scroll flex w-4/5 h-3/5 mt-4 ml-12 bg-[#ffffff80] border border-black rounded-[10px] flex-wrap p-4">
                            {clients && clients.length > 0 && clients.map((client) => (
                                client.hasMadePurchase ? <ClientDisplay setClient={setClient} setDivVisibility={setDivVisibility} key={client.id} type="Buyer" client={client} /> : <ClientDisplay setClient={setClient} setDivVisibility={setDivVisibility} key={client.id} type="Reference" client={client} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {divVisibility && <div className="absolute w-full h-screen top-0 flex items-center justify-center bg-[#fdfcfcd5]" >
                {client &&
                    <div className="h-1/2 w-[36%]">
                        <BuyerInfo client={client} setDivVisibility={setDivVisibility} />
                    </div>
                }
            </div>}
        </>
    );
}

export default BuyersAndReferences;