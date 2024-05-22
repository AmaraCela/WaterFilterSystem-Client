import React, { useState, useEffect } from "react";
import DashboardLink from "./DashboarLink";
import { getLoggedInUser, getLoggedUserId, logout, retrieveSalesAgentFromServer } from "../serverUtils/serverUtils";
import { UserRole } from "../serverUtils/UserRole";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Time_duotone_line.png");
const calendar = require("../assets/Calendar.png");
const log = require("../assets/Calendar_add_duotone.png");
const insta = require("../assets/insta_duotone_line.png");
const sales = require("../assets/Chart_fill.png");


function DashboardSideSalesAgent(){
    
    const [fullName, setFullName] = useState("");
    const [callHistory, setCallHistory] = useState([]);

    useEffect(() => {
        retrieveSalesAgentFromServer().then((data) => {
            if (data) {
                setFullName(data.name + " " + data.surname);
                setCallHistory(data.callHistory);
            }
        });
    }, []);
    return (
        <div className="side w-1/4 h-full flex flex-col justify-between items-center py-6 sticky top-0" style={{ backgroundColor: 'white' }}>
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">{fullName}</p>
                <p className="main-font">Sales Agent</p>
            </div>

            <DashboardLink to={"/workschedule"} src={calling} text={"Set Work schedule"} highlighted={false} />
            <DashboardLink to={"/agentreferences"} src={log} text={"Add a reference"} highlighted={false} />
            <DashboardLink to={"/agentmeetings"} src={calendar} text={"My Meetings"} highlighted={false} />
            <DashboardLink to={"/reviewMeetings"} src={calendar} text={"Log Meetings"} highlighted = {false}/>
            <DashboardLink to={"/agentreferences"} src={log} text={"References"} highlighted = {false}/>
            <div className="header-container">
              <DashboardLink to={"/agentaddsale"} src ={insta} text={"Add new sale"} highlighted={false} />
              <DashboardLink to={"/mysales"} src ={sales} text={"My Sales"} highlighted={false} />
            </div>
        </div>
    );
}

export default DashboardSideSalesAgent;
