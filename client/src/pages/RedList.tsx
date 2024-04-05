import { useEffect } from "react";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { redListClients } from "../store/client/clientThunks";
import { useSelector } from "react-redux";

const RedList = () => {
    const dispatch = useAppDispatch();
    const redlistClients = useSelector((state: RootState) => state.client.redlistClients);

    useEffect(() => {
        dispatch(redListClients());
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide highlighted={"Red List"} />
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#A13D3D] font-bold text-2xl ml-12 mt-8">Red List</p>
                    <input type="search" className="rounded-3xl w-1/2 ml-12 mt-8 search-bar pl-4 h-7 flex items-center" placeholder="Search a person" />
                    <table className="w-3/4 ml-12 mt-6">
                        <thead className="bg-[#ffffff66] h-10">
                            <tr>
                                <th className="montserrat w-1/3 text-left">User</th>
                                <th className="montserrat w-1/3 text-left">Date</th>
                                <th className="montserrat w-1/3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {redlistClients && redlistClients.map((client) => (
                                <tr className="h-7" key={client.id}>
                                    <td className="montserrat text-sm w-1/3 text-[#2F65DD]">{client.name} {client.surname}</td>
                                    <td className="montserrat text-sm w-1/3">{client.nextContactDate && `${new Date(client.nextContactDate).getDate()}/${new Date(client.nextContactDate).getMonth()+1}/${new Date(client.nextContactDate).getFullYear()}`}</td>
                                    <td className="montserrat text-sm w-1/3"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RedList;