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
import TableRow from '../components/SalesAndDebts-row';
import MyComponent from '../components/SalesAndDebtsTable';
import Insights from '../components/insightsOfAgents';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import Note from '../components/Inventory_Note'; 
import NewTask from '../components/Inventory-assignNewTask'
import ChiefOfOperations_Inventory_assignNewTask from '../pages/ChiefOfOperations_Inventory_assignNewTask';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import SalesDebts from "../pages/ChiefOfOperations_ListOfSalesAndDebts";
import HomeWidget from '../components/phoneAgent-HomeWidget';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import PhoneAgent_Meetings from '../pages/PhoneAgent_Meetings';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
// import ChangeDateOfMeeting from '../components/changeDateOfMeeting';
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';
import BuyersAndReferences from '../pages/BuyersAndReferences';
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';
import PageNumber from '../components/pageNo';
import SalesAgentAddReferences from '../pages/SalesAgentReferences';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SortDropdown from '../components/com-sortDropdown';
import Collections from '../pages/Collections';
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
                <Route path='/salesdebts' element={<SalesDebts />} />
                <Route path='/approvesales' element={<ChiefOperationsDashboard_SalesToApprove />} />
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/commissions' element={<ChiefOperationsDashboard_AgentCommissions />} />
                <Route path='/agentreferences' element={<SalesAgentReferences />}/>
                <Route path='/tasks' element={<ChiefOperations_Inventory />}/>
                <Route path='/agentreferences' element={<SalesAgentAddReferences />}/>
                <Route path='/addReferences' element={<SalesAgentAddReferences />}/>
                <Route path='/assignTask' element={<ChiefOfOperations_Inventory_assignNewTask />}/>
                <Route path='/collections' element={<Collections />}/>
                <Route path='/3' element={<SortDropdown onSelect={function (value: string): void {
                    throw new Error('Function not implemented.');
                }} />} />
            </Routes>
            <Routes>
                <Route path='/home' element={< PhoneAgent_HomePage />}/>
            </Routes> 
            {/* <Routes>
            <Route path='/latestReferencesPhoneAgent' element={<PhoneAgent_Refs />} />
            </Routes>  */}
            <Routes>
            <Route path='/viewAllMeetings' element={<PhoneAgent_Meetings />} />
            </Routes> 
            {/* <Routes>
            <Route path='/redlistPhoneAgent' element={<PhoneAgent_Redlist />} />
            </Routes>  */}
             
             
           
        </Router>
    )
}

export default AllRoutes;