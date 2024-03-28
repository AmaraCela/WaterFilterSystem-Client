import "../styles/chiefMarketingDashboard.css";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";

const ChiefMarketingDashboard = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="dashboard w-3/4 h-max rounded-3xl flex flex-row">
                <DashboardSide highlighted={"none"}/>
                <div className="w-3/4">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-8">
                        Hello Ediola! <br />
                        What do you need today?
                    </p>
                    <input type="search" className="rounded-3xl ml-12 mt-8 search-bar pl-4 h-7 flex items-center" placeholder="Search"/>
                </div>
            </div>
        </div>

    );
}

export default ChiefMarketingDashboard;