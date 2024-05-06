import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calendar = require("../assets/Calendar.png");
const chart = require("../assets/Chart_fill.png");
const clock = require("../assets/Vector.png");
const calendarAdd = require("../assets/Calendar_add_duotone.png")
const reference = require("../assets/insta_duotone_line.png")
const empty = require("../assets/Empty.png")

const DashboardSideSalesAgent = () => {
    return (
        <div className="side w-1/4 h-full flex flex-col justify-between items-center py-6 rounded-3xl ">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Altin Hysi</p>
                <p className="main-font">Sales Agent</p>
            </div>

            <DashboardLink to={"/agentschedule"} src={clock} text={"Set Work schedule"} highlighted={false} />
            <DashboardLink to={"/agentmeetings"} src={calendar} text={"My Meetings"} highlighted={false} />
            <DashboardLink to={""} src={calendarAdd} text={"Log Meetings"} highlighted = {false}/>
            <DashboardLink to={"/agentreferences"} src={reference} text={"References"} highlighted = {false}/>
            <DashboardLink to={""} src={chart} text={"Sales"} highlighted={false} />
            <div className="header-container">
              <DashboardLink to={""} src ={empty} text={"Add new sale"} highlighted={false} />
              <DashboardLink to={""} src ={empty} text={"My Sales"} highlighted={false} />
            </div>
        </div>
    );
}

export default DashboardSideSalesAgent;
