import AddSale from "../components/AddSale";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";

const SalesAgentAddReferences = () => {
    return (
        <div className="dashboard rounded-3xl flex flex-row h-lvh overflow-hidden">
            <DashboardSideSalesAgent />
            <div className="main-content flex flex-col w-full w-3/4"> 
                <div className="flex flex-row w-full pt-4 pr-8 justify-end items-end absolute top-0 right-0"> 
                    <TopIcons />
                </div>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-10">
                    Add a new sale
                </p>
                <div className="flex w-full justify-between mt-8">
                    <div className="w-full overflow-hidden h-full mr-16">
                        <AddSale />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SalesAgentAddReferences;