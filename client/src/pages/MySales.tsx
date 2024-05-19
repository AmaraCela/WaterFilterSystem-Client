import { useSelector } from "react-redux";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { getSales } from "../store/sales/saleThunks";
import DashboardSide_ChiefOfOperations from "../components/DashboardSide_ChiefOfOperations";
const masterCard = require("../assets/image 10.png");

const MySales = () => {
    const sales = useSelector((state: RootState) => state.sale.sales);
    console.log(sales);
    const dispatch = useAppDispatch();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        dispatch(getSales("6"));
    }, []);

    return (
        <div className="flex relative dashboard h-screen">
            <div className="bg-opacity-10">
            <DashboardSide_ChiefOfOperations/>
            </div>
                <div className="w-3/4 main-content h-[100vh]">
                <div className="flex flex-row justify-end">
                <TopIcons />
                </div>
                <p className=" mt-10  main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                    My Sales
                </p>
                <div className="w-[90%] overflow-y-scroll bg-[#5272e90f] border border-[#A49D9D] rounded-xl h-[70vh] ml-12 mt-14 px-6 py-4">
                    {sales.map((sale) => (
                        <div key={sale.sale_id} className="flex items-center">
                            <input type="checkbox" className="mr-4 size-8 border-2" />
                            <div className="border-[#AAAAAA] border w-full bg-[#F2F2F2] rounded-xl px-4 py-4 flex justify-between">
                                <div className="flex">
                                    <img src={masterCard} alt="" />
                                    <div className="ml-4 inter">
                                        <p className="font-semibold">{sale.Client?.name} {sale.Client?.surname}</p>
                                        <p className="font-semibold text-[#00000066]">Send • {months[new Date(sale.time ?? '').getMonth()]} {new Date(sale.time ?? '').getDate()}, {new Date(sale.time ?? '').getFullYear()}</p>
                                    </div>
                                </div>
                                <div className="inter">
                                    <p className="font-semibold">{sale.price}</p>
                                    <p className={`font-semibold ${sale.approved ? 'text-[#084CCA]': 'text-[#147E03]'}`}>{sale.approved ? "Success" : "In-transit"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MySales;