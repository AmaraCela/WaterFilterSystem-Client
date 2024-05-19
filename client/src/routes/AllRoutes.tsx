import React from 'react';
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
import PhoneAgentMeetings from '../pages/PhoneAgent_Meetings';
import SalesAgentAddSale from '../pages/SalesAgentAddSale';
import SalesDebts from "../pages/ChiefOfOperations_ListOfSalesAndDebts";
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';
import BuyersAndReferences from '../pages/BuyersAndReferences';
// import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';
import PageNumber from '../components/pageNo';
import MyComponent from '../components/AddSale';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentAddReferences from '../pages/SalesAgentReferences';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import PhoneAgent_Meetings from '../pages/PhoneAgent_Meetings';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
// import ChangeDateOfMeeting from '../components/ChangeDateOfMeeting';
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
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import Collections from '../pages/Collections';
import ChiefMarketingBR from '../pages/ChiefMarketing_BuyersAndReferences';
import ClientDisplay from '../components/Client';
import BuyerInfo from '../components/BuyerInfo';
import SalesAgentMeetingSchedule from "../pages/SalesAgentMeetingSchedule";


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={< ChangeDateOfMeeting />}/> */}
                <Route path='/login' element={<LoginWidget />} />
                <Route path='/dashboard' element={<DashboardSide highlighted={'none'} />} />
                <Route path='/calls' element={<PhoneCallsPage />} />
                <Route path='/schedules' element={<Schedules />} />
                <Route path='/statistics' element={<Statistics />} />
                <Route path='/redlist' element={<RedList />} />
                <Route path='/buyersReferences' element={<BuyersAndReferences />} />
                <Route path='/salesdebts' element={<SalesDebts />} />
                <Route path='/commissions' element={<ChiefOperationsDashboard_AgentCommissions />} />
                <Route path='/inventory' element={<ChiefOperations_Inventory />} />
                <Route path='/history' element={<HistoryUpload />} />
                <Route path='/calls' element={<PhoneCallsPage />} />
                <Route path='/collections' element={<Collections />} />
                <Route path='/add-reference' element={<AddReferenceForm />} />
                <Route path='/agentMeetings' element={<SalesAgentMeetings />} />
                <Route path='/mysales' element={<MySales />} />
                <Route path='/agentReferences' element={<SalesAgentAddReferences />} />
                <Route path='/reviewMeetings' element={<ReviewMeetings />} />

                {/* <Route path='/page-number' element={<PageNumber />} /> */}
                <Route path='/add-sale' element={<MyComponent />} />
                <Route path='/reference-template' element={<RefTemplate />} />
                <Route path='/buy-template' element={<BuyTemplate />} />
                <Route path='/sales-debts-table' element={<SalesAndDebtsTable />} />
                <Route path='/reference-table' element={<ReferenceTable />} />
                <Route path='/phone-agent-dashboard' element={<PhoneAgentDashboard />} />
                <Route path='/add-to-redlist-manually' element={<ManualRedlistAdd />} />
                <Route path='/redlist-table' element={<RedlistTable />} />
                <Route path='/completed-call-alert' element={<CompletedCall />} />
                {/* <Route path='/meeting-outcome' element={<MeetingOutcomeForm />} /> */}
                <Route path='/successful-reschedule-alert' element={<SuccessfulRescheduleAlert />} />
                {/* <Route path='/redlist-alert' element={<RedlistAlert />} /> */}
                <Route path='/ref-table-head' element={<RefTableHead />} />
                <Route path='/agentaddsale' element={<SalesAgentAddSale />} />
                <Route path='/chief-operations/dashboard' element={<ChiefOperationsDashboard_SalesToApprove />} />
                <Route path='/sales-to-approve' element={<ChiefOperationsDashboard_SalesToApprove />} />
                {/* <Route path='/chief-operations/inventory' element={<ChiefOperations_Inventory_ListOfTasks />} /> */}
                <Route path='/chief-operations/inventory-list' element={<ChiefOfOperations_Inventory_ListOfTasks />} />
                <Route path='/chief-operations' element={<ChiefOperationsDashboard_SalesToApprove />} />
                {/* <Route path='/inbox' element={<Inbox />} /> */}
                {/* Add other common routes here */}
            </Routes>
            <Routes>
                <Route path='/home' element={< PhoneAgent_HomePage />}/>
                <Route path='/latestReferencesPhoneAgent' element={<PhoneAgent_Refs />} />
                <Route path='/viewAllMeetings' element={<PhoneAgent_Meetings />} />
                <Route path='/redlistPhoneAgent' element={<PhoneAgent_Redlist />} />
                <Route path='/login' element={<LoginWidget />} />
                <Route path='/schedules' element={<SalesAgentSchedules />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;
