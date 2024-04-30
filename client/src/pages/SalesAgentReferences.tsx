import ReferenceTable from "../components/ReferenceTable";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";

const SalesAgentReferences = () => {
    return (
        <div className="dashboard rounded-3xl flex flex-row h-lvh">

            <DashboardSideSalesAgent />
            <div className="w-3/4">
                <TopIcons />
                <ReferenceTable />
            </div>
        </div>
    );
}

export default SalesAgentReferences;