import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Calling.png");
const calendar = require("../assets/Calendar.png");
const chart = require("../assets/Chart.png");
const danger = require("../assets/DangerTriangle.png");
const paper = require("../assets/Paper.png");
const bookmark = require("../assets/Bookmark.png");

const DashboardSideSalesAgent = () => {
    return (
        <div className="side w-1/4 h-full flex flex-col justify-between items-center py-6 rounded-3xl ">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Altin Hysi</p>
                <p className="main-font">Sales Agent</p>
            </div>

            <DashboardLink to={"workschedule"} src={calling} text={"Set Work schedule"} highlighted={false} />
            <DashboardLink to={"/agentmeetings"} src={calendar} text={"My Meetings"} highlighted={false} />
            <DashboardLink to={""} src={calendar} text={"Log Meetings"} highlighted = {false}/>
            <DashboardLink to={"/agentreferences"} src={calendar} text={"References"} highlighted = {false}/>
            <DashboardLink to={""} src={danger} text={"Chat"} highlighted = {false}/> 
        </div>
    );
}

export default DashboardSideSalesAgent;
