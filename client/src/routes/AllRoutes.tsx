import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';
import LoginWidget from '../components/loginWidget';
import AddReferenceForm from '../components/com-formToAddReference';
import HistoryUpload from '../components/com-historyUpload';
import PhoneCallsPage from '../pages/com-PhoneCalls';
import SortDropdown from '../components/com-sortDropdown';
import PageNumber from '../components/pageNo';
// import { MyComponent } from '../components/Calendar';
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';
import BuyTemplate from '../components/buyTemplate';
import RefTemplate from '../components/referenceTemplate';
import BuyersAndReferences from '../pages/BuyersAndReferences';
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
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
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';
import DashboardSide from '../components/DashboardSide';
import SalesAndDebts from '../pages/ChiefOfOperations_ListOfSalesAndDebts';
import SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
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
                <Route path='/8' element={<SalesAndDebts />} />
                <Route path='/9' element={<SalesToApprove />} />
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/agentreferences' element={<SalesAgentReferences />}/>
                <Route path='/3' element={<SortDropdown onSelect={function (value: string): void {
                    throw new Error('Function not implemented.');
                }} />} />
                <Route path='' element={<SalesAgentMeetings />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;