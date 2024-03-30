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
const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={< PhoneAgentTemplate/>}/>
            </Routes>
            <Routes>
                {/* { <Route path='/' element={</>}></Route> } */}
            </Routes>
        </Router>
    )
}

export default AllRoutes;