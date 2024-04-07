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
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import DashboardSide_ChiefOfOperations from '../components/DashboardSide_ChiefOfOperations';
import DashboardSidePhoneAgent from '../components/DashboardSide_PhoneAgent';
import ChiefOperationsDashboard from '../pages/ChiefOfOperationsDashboard';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={< ChiefOperationsDashboard/>}/>
                <Route path='/workschedule' element={<SalesAgentSchedules/>}></Route>
                <Route path='/login' element={<LoginWidget />}></Route>
            </Routes>
        </Router>
    )
}

export default AllRoutes;