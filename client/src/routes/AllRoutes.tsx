import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChiefMarketingDashboard from '../pages/ChiefMarketingDashboard';
import LoginWidget from '../components/loginWidget';
import LoginPage from '../pages/Login';
import AddReferenceForm from '../components/com-formToAddReference';
import HistoryUpload from '../components/com-historyUpload';
import PhoneCallsPage from '../pages/com-PhoneCalls';
import SortDropdown from '../components/com-sortDropdown';
import PageNumber from '../components/pageNo';
import { MyComponent } from '../components/Calendar';
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginWidget />} />
                <Route path='/dashboard' element={<ChiefMarketingDashboard />}/>
                <Route path='/calls' element={<PhoneCallsPage/>}/>
                <Route path='/schedules' element={<Schedules/>}/>
                <Route path='/statistics' element={<Statistics/>}/>
                <Route path='/redlist' element={<RedList />}/>
                <Route path='/1' element={<AddReferenceForm/>}/>
                <Route path='/2' element={<HistoryUpload/>}/>
                <Route path='/4' element={<PageNumber number={0}/>}/>
                <Route path='/5' element={<MyComponent/>}/>
                <Route path='/3' element={<SortDropdown onSelect={function (value: string): void {
                    throw new Error('Function not implemented.');
                } }/>}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;