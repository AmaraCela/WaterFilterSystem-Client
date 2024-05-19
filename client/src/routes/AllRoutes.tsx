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
import DashboardSideSalesAgent from '../components/DashboardSide_SalesAgent';
import SalesAgentTemplate from '../pages/SalesAgentMeetingSchedule';
import DashboardSide_ChiefOfOperations from '../components/DashboardSide_ChiefOfOperations';
import ChiefOperationsDashboard_AgentCommissions from '../pages/ChiefOfOperationsDashboard_AgentCommissions';
import SalesTable from '../components/tableOfSales';
import CommissionTable from '../components/commissionTable'; 
import ChiefOperationsDashboard_ListOfSalesAndDebts from '../pages/ChiefOfOperations_ListOfSalesAndDebts';
import TableRow from '../components/SalesAndDebts-row';
import MyComponent from '../components/SalesAndDebtsTable';
import Insights from '../components/insightsOfAgents';
import ChiefOperations_Inventory from '../pages/ChiefOfOperations_Inventory_ListOfTasks';
import Note from '../components/Inventory_Note'; 
import NewTask from '../components/Inventory-assignNewTask'
import ChiefOfOperations_Inventory_assignNewTask from '../pages/ChiefOfOperations_Inventory_assignNewTask';
import ChiefOperationsDashboard_SalesToApprove from '../pages/ChiefOfOperations_SalesToApprove';
import HomeWidget from '../components/phoneAgent-HomeWidget';
import PhoneAgent_HomePage from '../pages/PhoneAgent_HomePage';
import SalesAgentMeetings from '../pages/SalesAgentMeetings';
import PhoneAgent_Meetings from '../pages/PhoneAgent_Meetings';
import AddNewMeeting from '../components/addNewMeeting';
import MeetingOutcomeForm from '../components/logMeetingOutcome';
import ChangeDateOfMeeting from '../components/changeDateOfMeeting';
import ChangeDateOfMeeting from '../components/changeDateOfMeeting';
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
import SalesAgentAddReferences from '../pages/SalesAgentReferences';
import MySales from '../pages/MySales';


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
                {/* Phone Agent */}
                <Route path='/reservedCalls' element={< PhoneAgent_ReservedCalls />}/>
                <Route path='/home' element={< PhoneAgent_HomePage />}/>
                <Route path='/latestReferencesPhoneAgent' element={<PhoneAgent_Refs />} />
                <Route path='/viewAllMeetings' element={<PhoneAgent_Meetings />} />
                <Route path='/redlistPhoneAgent' element={<PhoneAgent_Redlist />} />
                <Route path='/login' element={<LoginWidget />} />

                {/* Sales Agent */}
                <Route path='/agentmeetings' element={< SalesAgentMeetings />}/>
                <Route path='/schedules' element={<SalesAgentSchedules />} />
                <Route path='/template' element={<SalesAgentTemplate />} />
                {/* fix page, it should stay absolute */}
                <Route path='/workschedule' element={<SalesAgentSchedules />} />
                {/* fix it, eshte skandal */}
                <Route path='/agentreferences' element={<SalesAgentAddReferences />} />


                {/* Chief of Operations */}
                <Route path='/approvesales' element={<ChiefOperationsDashboard_SalesToApprove />} />
                <Route path='/commissions' element={<ChiefOperationsDashboard_AgentCommissions />} />
                <Route path='/salesdebts' element={<ChiefOperationsDashboard_ListOfSalesAndDebts />} />
                <Route path='/tasks' element={<ChiefOfOperations_Inventory_ListOfTasks />} />
                <Route path='/assignTask' element={<ChiefOfOperations_Inventory_assignNewTask />} />
                {/* missing inventory */}
 
                
            </Routes>
        </Router>
    )

}

export default AllRoutes;
