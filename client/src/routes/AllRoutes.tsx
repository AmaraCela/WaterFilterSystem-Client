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
import PhoneAgentMeetings from '../pages/PhoneAgentMeetings';
import SalesAgentAddSale from '../pages/SalesAgentAddSale';

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
                <Route path='/agentaddsale' element={<SalesAgentAddSale />}/>
                <Route path='' element={<SalesAgentAddReferences />}/>
                <Route path='/padashboard' element={<PhoneAgentTemplate/>}/>
                <Route path='/allmeetings' element={<PhoneAgentMeetings/>}/>
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