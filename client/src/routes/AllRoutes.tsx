import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';
import LoginWidget from '../components/loginWidget';
import AddReferenceForm from '../components/com-formToAddReference';
import HistoryUpload from '../components/com-historyUpload';
import PhoneCallsPage from '../pages/com-PhoneCalls';
import SortDropdown from '../components/com-sortDropdown';
import PageNumber from '../components/pageNo';
import { MyComponent } from '../components/Calendar';
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';
import BuyTemplate from '../components/buyTemplate';
import RefTemplate from '../components/referenceTemplate';
import BuyersAndReferences from '../pages/BuyersAndReferences';
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import ChiefOperationsDashboard from '../pages/ChiefOfOperationsDashboard';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginWidget />} />
                <Route path='/dashboard' element={<ChiefMarketingDashboard />} />
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
                <Route path='/' element={< ChiefOperationsDashboard/>}/>
                <Route path='/workschedule' element={<SalesAgentSchedules/>}></Route>
                <Route path='/login' element={<LoginWidget />}></Route>
                <Route path='/1' element={<AddReferenceForm />} />
                <Route path='/2' element={<HistoryUpload />} />
                <Route path='/4' element={<PageNumber number={0} />} />
                <Route path='/5' element={<MyComponent />} />
                <Route path='/6' element={<BuyTemplate />} />
                <Route path='/7' element={<RefTemplate />} />
                <Route path='/3' element={<SortDropdown onSelect={function (value: string): void {
                    throw new Error('Function not implemented.');
                }} />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes;