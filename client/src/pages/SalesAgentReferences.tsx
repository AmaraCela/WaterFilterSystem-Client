import ReferenceTable from "../components/ReferenceTable";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import TopIcons from "../components/TopIcons";

const SalesAgentReferences = () => {
  return (
    <div className="dashboard rounded-3xl flex flex-row h-lvh">
      <DashboardSideSalesAgent />
      <div className="w-3/4 flex flex-col overflow-y-auto">
        <TopIcons />
        <div className="flex-grow">
          <ReferenceTable />
        </div>
      </div>
    </div>
  );
}

export default SalesAgentReferences;