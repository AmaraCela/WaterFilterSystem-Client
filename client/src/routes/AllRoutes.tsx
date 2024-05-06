import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesAgentAddReferences from '../pages/SalesAgentAddReferences';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import PhoneAgentTemplate from '../pages/PhoneAgentDashboard';
import PhoneAgentMeetings from '../pages/PhoneAgentMeetings';


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/agentreferences' element={<SalesAgentAddReferences />}/>
                <Route path='' element={<SalesAgentAddReferences />}/>
                <Route path='/padashboard' element={<PhoneAgentTemplate/>}/>
                <Route path='/allmeetings' element={<PhoneAgentMeetings/>}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;