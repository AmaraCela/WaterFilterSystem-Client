import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';

const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<SalesAgentMeetings />}/>
            </Routes>
        </Router>
    )
}

export default AllRoutes;