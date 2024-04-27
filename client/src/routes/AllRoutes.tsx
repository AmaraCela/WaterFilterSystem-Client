import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/agentmeetings' element={<SalesAgentMeetings />} />
                <Route path='/agentreferences' element={<SalesAgentReferences />}/>
                <Route path='' element={<SalesAgentReferences />}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;