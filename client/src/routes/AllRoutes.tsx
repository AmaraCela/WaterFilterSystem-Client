import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';
import LoginWidget from '../components/loginWidget';
import LoginPage from '../pages/Login';
import AddReferenceForm from '../components/com-formToAddReference';
import HistoryUpload from '../components/com-historyUpload';
import PhoneCallsPage from '../pages/com-PhoneCalls'; 
import DashboardSide from '../components/DashboardSide'; 
import RefTemplate from '../components/referenceTemplate'; 
import BuyTemplate from '../components/buyTemplate';
import PhoneCall from '../components/pa-phoneCall';
import DashboardSide2 from '../components/DashboardSide_PhoneAgent';
import PhoneAgentTemplate from '../pages/PhoneAgentDashboard';
import DashboardSideSalesAgent from '../components/DashboardSide_SalesAgent';
import SalesAgentTemplate from '../pages/SalesAgentMeetingSchedule';
import DashboardSide_ChiefOfOperations from '../components/DashboardSide_ChiefOfOperations';
import DashboardSidePhoneAgent from '../components/DashboardSide_PhoneAgent';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import SalesTable from '../components/tableOfSales';
import CommissionTable from '../components/commissionTable'; 
import ChiefOperationsDashboard_ListOfSalesAndDebts from '../pages/ChiefOfOperations_ListOfSalesAndDebts';
import TableRow from '../components/SalesAndDebts-row';
import MyComponent from '../components/SalesAndDebtsTable';
import Insights from '../components/insightsOfAgents';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import Note from '../components/Inventory_Note'; 
import NewTask from '../components/Inventory-assignNewTask'
import ChiefOfOperations_Inventory_assignNewTask from '../pages/ChiefOfOperations_Inventory_assignNewTask';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import HomeWidget from '../components/phoneAgent-HomeWidget';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import PhoneAgent_Meetings from '../pages/PhoneAgent_Meetings';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
import ChangeDateOfMeeting from '../components/ChangeDateOfMeeting';
import SuccessfulRescheduleAlert from '../components/successfulRescheduleAlert';
import RedlistAlert from '../components/redlistAlert';
import ChiefOfOperations_Inventory_ListOfTasks from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import SalesAndDebtsTable from '../components/SalesAndDebtsTable';
import RefTableHead from '../components/referenceTable_PhoneAgent'
import PhoneAgent_Refs from '../pages/PhoneAgent_References';
import CompletedCall from '../components/completedCallAlert';
import ReferenceTable from '../components/ReferenceTable';
import PhoneAgentDashboard from '../components/phoneAgent-Dashboard';
import ManualRedlistAdd from '../components/addToRedlistManually';
import RedlistTable from '../components/redlist_Table';
import PhoneAgent_Redlist from '../pages/PhoneAgent_Redlist';
import ReservedTable from '../components/reservedCalls_Table';
import PhoneAgent_ReservedCalls from '../pages/PhoneAgent_ReservedCalls';
import Notifications from '../components/notifications';
import HistoryCalls from '../components/HistoryCalls';
import Inbox from '../components/inbox';
const AllRoutes = () => {
    return (
        <Router>
            {/* PHONE AGENT */}
            <Routes>
                <Route path='/reservedCalls' element={< PhoneAgent_ReservedCalls />}/>
            </Routes>
            <Routes>
                <Route path='/calls' element={< HistoryCalls />}/>
            </Routes>
            <Routes>
                <Route path='/home' element={< PhoneAgent_HomePage />}/>
            </Routes> 
            <Routes>
            <Route path='/latestReferencesPhoneAgent' element={<PhoneAgent_Refs />} />
            </Routes> 
            <Routes>
            <Route path='/viewAllMeetings' element={<PhoneAgent_Meetings />} />
            </Routes> 
            <Routes>
            <Route path='/redlistPhoneAgent' element={<PhoneAgent_Redlist />} />
            </Routes>
            <Routes>
            <Route path='/notifications' element={<Notifications />} />
            </Routes> 
            <Routes>
            <Route path='/inbox' element={<Inbox />} />
            </Routes>

            {/* CHIEF OF MARKETING */}
            <Routes>
            <Route path='/chiefOfO' element={<ChiefOperationsDashboard_SalesToApprove />} />
            </Routes>
            <Routes>
            <Route path='/inbox' element={<Inbox />} />
            </Routes>

        </Router>
    )
}

export default AllRoutes;