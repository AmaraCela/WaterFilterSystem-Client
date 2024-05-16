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
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import SalesTable from '../components/tableOfSales';
import CommissionTable from '../components/commissionTable'; 
import ChiefOperationsDashboard_ListOfSalesAndDebts from '../pages/ChiefOfOperations_ListOfSalesAndDebts';
import TableRow from '../components/SalesAndDebts-row';
import MyComponent from '../components/SalesAndDebtsTable';
import Insights from '../components/insightsOfAgents';
import ChiefOperationsInventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import Note from '../components/Inventory_Note'; 
import NewTask from '../components/Inventory-assignNewTask'
import ChiefOfOperationsInventoryAssignNewTask from '../pages/ChiefOfOperations_Inventory_assignNewTask';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';
import PageNumber from '../components/pageNo';
import MyComponent from '../components/AddSale';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentAddReferences from '../pages/SalesAgentAddSale';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
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
import Collections from '../pages/Collections';
import ChiefMarketingBR from '../pages/ChiefMarketing_BuyersAndReferences';
import ClientDisplay from '../components/Client';
import BuyerInfo from '../components/BuyerInfo';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* PHONE AGENT */}
                <Route path='/phoneagents/:id/dashboard' element={<DashboardSide2 />} />
                <Route path='/phoneagents/:id/meetings' element={<PhoneAgentMeetings />} />
                <Route path='/phoneagents/:id/add-sale' element={<SalesAgentAddSale />} />
                <Route path='/phoneagents/:id/schedules' element={<SalesAgentSchedules />} />
                <Route path='/phoneagents/:id/references' element={<SalesAgentReferences />} />
                <Route path='/phoneagents/:id/add-reference' element={<SalesAgentAddReferences />} />
                <Route path='/phoneagents/:id/redlist' element={<PhoneAgent_Redlist />} />
                <Route path='/phoneagents/:id/home' element={<PhoneAgent_HomePage />} />
                <Route path='/phoneagents/:id/allmeetings' element={<PhoneAgentMeetings />} />
                <Route path='/phoneagents/:id/viewAllMeetings' element={<PhoneAgentMeetings />} />
                <Route path='/phoneagents/:id/notifications' element={<Notifications />} />
                <Route path='/phoneagents/:id/inbox' element={<Inbox />} />
                <Route path='/phoneagents/:id/collections' element={<Collections />} />
                <Route path='/phoneagents/:id/reservedCalls' element={<PhoneAgent_ReservedCalls />} />
                <Route path='/phoneagents/:id/calls' element={<PhoneCallsPage />} />
                <Route path='/phoneagents/:id' element={<PhoneAgentTemplate />} />
                {/* CHIEF MARKETING */}
                <Route path='/chief-marketing/dashboard' element={<ChiefMarketingDashboard />} />
                <Route path='/chief-marketing' element={<ChiefMarketingDashboard />} />
                <Route path='/chief-marketing/Collections' element={<ChiefMarketingDashboard />} />
                <Route path='/collections' element={<Collections />} />
                <Route path='' element={<BuyersAndReferences />} />
                {/* <Route path='infoClient' element={<BuyerInfo client={undefined} setDivVisibility={undefined} />} /> */}

                
                {/* COMMON ROUTES */}
                <Route path='/login' element={<LoginPage />} />
                {/* <Route path='/dashboard' element={<DashboardSide />} /> */}
                <Route path='/schedules' element={<Schedules />} />
                <Route path='/statistics' element={<Statistics />} />
                <Route path='/redlist' element={<RedList />} />
                <Route path='/phoneCalls' element={<PhoneCallsPage />} />
                <Route path='/buyersReferences' element={<BuyersAndReferences />} />
                <Route path='/agentSchedule' element={<SalesAgentSchedules />} />
                <Route path='/agentMeetings' element={<SalesAgentMeetings />} />
                <Route path='/reviewMeetings' element={<ReviewMeetings />} /> 
                <Route path='/mysales' element={<MySales />} /> 
                {/* <Route path='/' element={< ChiefOperationsDashboard/>}/> */}
                <Route path='/workschedule' element={<SalesAgentSchedules/>}></Route>
                <Route path='/login' element={<LoginWidget />}></Route>
                <Route path='/1' element={<AddReferenceForm />} />
                <Route path='/2' element={<HistoryUpload />} />
                <Route path='/4' element={<PageNumber number={0} />} />
                <Route path='/5' element={<MyComponent />} />
                <Route path='/6' element={<BuyTemplate />} />
                <Route path='/7' element={<RefTemplate />} />
                <Route path='/salesdebts' element={<SalesAndDebts />} />
                <Route path='/approvesales' element={<SalesToApprove />} />
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/commissions' element={<Comissions />} />
                <Route path='/agentreferences' element={<SalesAgentReferences />}/>
                <Route path='/tasks' element={<ChiefOperationsInventory />}/>
                <Route path='/assignTask' element={<ChiefOfOperationsInventoryAssignNewTask />}/>
                <Route path='/3' element={<SortDropdown onSelect={function (value: string): void {
                    throw new Error('Function not implemented.');
                }} />} />
                <Route path='' element={<SalesAgentMeetings />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;
