import React from 'react';
import { useState, useEffect } from 'react';
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
import PhoneAgentMeetings from '../pages/PhoneAgent_Meetings';
import SalesAgentAddSale from '../pages/SalesAgentAddSale';
import SalesDebts from "../pages/ChiefOfOperations_ListOfSalesAndDebts";
import Schedules from '../pages/Schedules';
import Statistics from '../pages/Statistics';
import RedList from '../pages/RedList';
import BuyersAndReferences from '../pages/BuyersAndReferences';
// import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import ReviewMeetings from '../pages/ReviewMeetings';
import MySales from '../pages/MySales';
import PageNumber from '../components/pageNo';
import MyComponent from '../components/AddSale';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import SalesAgentReferences from '../pages/SalesAgentReferences';
import SalesAgentAddReferences from '../pages/SalesAgentReferences';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import PhoneAgent_Meetings from '../pages/PhoneAgent_Meetings';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
// import ChangeDateOfMeeting from '../components/ChangeDateOfMeeting';
import SuccessfulRescheduleAlert from '../components/successfulRescheduleAlert';
import RedlistAlert from '../components/redlistAlert';
import ChiefOfOperations_Inventory_ListOfTasks from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import SalesAndDebtsTable from '../components/SalesAndDebtsTable';
import RefTableHead from '../components/referenceTable_PhoneAgent'
import PhoneAgent_Refs from '../pages/PhoneAgent_References';
import CompletedCall from '../components/completedCallAlert';
import ReferenceTable from '../components/ReferenceTable';
import PhoneAgentDashboard from '../components/phoneAgent-Dashboard';
import ManualRedlistAdd from '../components/addToRedlistManually';
import RedlistTable from '../components/redlist_Table';
import PhoneAgent_Redlist from '../pages/PhoneAgent_Redlist';
import ReservedTable from '../components/reservedCalls_Table';
import PhoneAgent_ReservedCalls from '../pages/PhoneAgent_ReservedCalls';
import Notifications from '../components/notifications';
import HistoryCalls from '../components/HistoryCalls';
import SalesAgentSchedules from '../pages/SalesAgentSchedules';
import Collections from '../pages/Collections';
import ChiefMarketingBR from '../pages/ChiefMarketing_BuyersAndReferences';
import ClientDisplay from '../components/Client';
import BuyerInfo from '../components/BuyerInfo';
import SalesAgentMeetingSchedule from "../pages/SalesAgentMeetingSchedule";


import { getLoggedInUser } from '../serverUtils/serverUtils';
import { UserRole } from '../serverUtils/UserRole';

const AllRoutes = () => {
    let [isPhoneAgent, setIsPhoneAgent] = useState(false);
    let [isSalesAgent, setIsSalesAgent] = useState(false);
    let [isMarketingManager, setIsMarketingManager] = useState(false);
    let [isChiefOfOperations, setIsChiefOfOperations] = useState(false);
    let [notLoggedIn, setNotLoggedIn] = useState(true);

    useEffect(() => {
        getLoggedInUser().then((user: any) => {
            if (user) {
                switch (user.role) {
                    case UserRole[UserRole.PHONE_OPERATOR]:
                        setIsPhoneAgent(true);
                        setNotLoggedIn(false);
                        break;
                    case UserRole[UserRole.SALES_AGENT]:
                        setIsSalesAgent(true);
                        setNotLoggedIn(false);
                        break;
                    case UserRole[UserRole.MARKETING_MANAGER]:
                        setIsMarketingManager(true);
                        setNotLoggedIn(false);
                        break;
                    case UserRole[UserRole.CHIEF_OF_OPERATIONS]:
                        setIsChiefOfOperations(true);
                        setNotLoggedIn(false);
                        break;
                    default:
                        break;
                }
            }
        });
    }, []);

    return (
        <Router>
            <Routes>
                {/* Login */}
                {notLoggedIn && <Route path='/' element={<LoginWidget />} />}
                
                {/* Home pages */}
                {isSalesAgent && <Route path='/' element={< SalesAgentMeetings />}/>}
                {isPhoneAgent && <Route path='/' element={< PhoneAgent_HomePage />}/>}
            </Routes>

            {/* User specific pages */}
            {isPhoneAgent && <Routes><Route path='/reservedCalls' element={< PhoneAgent_ReservedCalls />}/>
                <Route path='/latestReferencesPhoneAgent' element={<PhoneAgent_Refs />} />
                <Route path='/viewAllMeetings' element={<PhoneAgent_Meetings />} />
                <Route path='/redlistPhoneAgent' element={<PhoneAgent_Redlist />} />
                <Route path='/schedules' element={<SalesAgentSchedules />} />
            </Routes>}
        </Router>
    )
}

export default AllRoutes;
