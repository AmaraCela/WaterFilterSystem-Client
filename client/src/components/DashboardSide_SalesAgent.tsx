import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Time_duotone_line.png");
const calendar = require("../assets/Calendar.png");
const log = require("../assets/Calendar_add_duotone.png");
const insta = require("../assets/insta_duotone_line.png");
const sales = require("../assets/Chart_fill.png");

const DashboardSideSalesAgent = () => {
    return (
        <div className="side w-1/4 h-full flex flex-col justify-between items-center py-6 rounded-3xl sticky top-0">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Altin Hysi</p>
                <p className="main-font">Sales Agent</p>
            </div>

            <DashboardLink to={"/workschedule"} src={calling} text={"Set Work schedule"} highlighted={false} />
            <DashboardLink to={"/agentmeetings"} src={calendar} text={"My Meetings"} highlighted={false} />
            <DashboardLink to={"/reviewMeetings"} src={calendarAdd} text={"Log Meetings"} highlighted = {false}/>
            <DashboardLink to={"/agentreferences"} src={reference} text={"References"} highlighted = {false}/>
            <div className="header-container">
              <DashboardLink to={"/agentaddsale"} src ={empty} text={"Add new sale"} highlighted={false} />
              <DashboardLink to={"/mysales"} src ={empty} text={"My Sales"} highlighted={false} />
            </div>
        </div>
    );
}

export default DashboardSideSalesAgent;
