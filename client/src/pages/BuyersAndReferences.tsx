import { useSelector } from "react-redux";
import Client from "../components/Client";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import "../styles/buyersAndReferences.css";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { allClients } from "../store/client/clientThunks";

const BuyersAndReferences = () => {

    const dispatch = useAppDispatch();
    const clients = useSelector((state: RootState) => state.client.clients);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        dispatch(allClients(null));
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide highlighted={"none"} />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">Buyers and References</p>
                    <input type="search" className="w-1/2 rounded-3xl ml-12 mt-2 search-bar pl-4 h-7 flex items-center" placeholder="Search a buyer/reference" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyUp={(e) => {e.key === 'Enter' && dispatch(allClients(keyword))}}/>
                    <div className="flex ml-12  mt-1 items-center">
                        <div className="h-3 w-3 bg-[#28D372] ml-2"></div>
                        <p className="text-[#28D372] rubik ml-2">Buyer</p>
                        <div className="h-3 w-3 bg-[#3D5AA1] ml-8"></div>
                        <p className="text-[#3D5AA1] rubik ml-2">Reference</p>
                    </div>
                    <div className="overflow-x-hidden overflow-y-scroll flex w-4/5 h-3/5 mt-4 ml-12 bg-[#ffffff80] border border-black rounded-[10px] flex-wrap">
                        {clients && clients.length > 0 && clients.map((client) => (
                            client.hasMadePurchase ? <Client key={client.id} type="Buyer" name={client.name ?? ""} surname={client.surname ?? ""} id={client.id} /> : <Client key={client.id} type="Reference" name={client.name ?? ""} surname={client.surname ?? ""} id={client.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyersAndReferences;