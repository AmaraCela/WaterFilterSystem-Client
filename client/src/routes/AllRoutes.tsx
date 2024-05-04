import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import PhoneAgentTemplate from '../pages/PhoneAgentDashboard';
import PhoneAgentMeetings from '../pages/PhoneAgentMeetings';


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/agentreferences' element={<SalesAgentReferences />}/>
                <Route path='' element={<SalesAgentReferences />}/>
                <Route path='/padashboard' element={<PhoneAgentTemplate/>}/>
                <Route path='/allmeetings' element={<PhoneAgentMeetings/>}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;