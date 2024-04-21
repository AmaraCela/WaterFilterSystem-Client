import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";

const MySales = () => {
    return (
        <div className="flex relative dashboard h-screen">
            <DashboardSideSalesAgent />
            <div className="w-3/4">
                <TopIcons />
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                    My Sales
                </p>
                <div className="w-4/5">

                </div>
            </div>
        </div>
    );
}

export default MySales;