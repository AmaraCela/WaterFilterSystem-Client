import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';
import LoginWidget from '../components/loginWidget';
import LoginPage from '../pages/Login';
import AddReferenceForm from '../components/com-formToAddReference';
import HistoryUpload from '../components/com-historyUpload';
import PhoneCallsPage from '../pages/com-PhoneCalls';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path='/' element={<ChiefMarketingDashboard />}/> */}
            </Routes>
            <Routes>
                {/* <Route path='/' element={<PhoneCallsPage />}/> */}
            </Routes>
            <Routes>
                <Route path='/' element={<LoginWidget />}></Route>
            </Routes>
        </Router>
    )
}

export default AllRoutes;