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
const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<ChiefMarketingDashboard />}/> */}
            </Routes>
            <Routes>
                { <Route path='/' element={<BuyTemplate/>}></Route> }
            </Routes>
        </Router>
    )
}

export default AllRoutes;