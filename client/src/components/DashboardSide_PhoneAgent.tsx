import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Calling.png");
const calendar = require("../assets/Calendar.png");
const chart = require("../assets/Chart.png");
const danger = require("../assets/DangerTriangle.png");
const paper = require("../assets/Paper.png");
const bookmark = require("../assets/Bookmark.png");

const DashboardSidePhoneAgent = () => {
    return (
        <div className="side w-1/3 h-full flex flex-col justify-between items-center py-6 rounded-3xl">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Anxhela Peri</p>
                <p className="main-font">Phone Agent</p>
            </div>

            <DashboardLink to={""} src={calling} text={"Phone Calls"} />
            <DashboardLink to={""} src={calendar} text={"Outcomes Overview"} />
            <DashboardLink to={""} src={calendar} text={"schedule new calls"} />
            <DashboardLink to={""} src={calendar} text={"Reserved Phone call"} />
            <DashboardLink to={""} src={danger} text={"Red List"} />
            <DashboardLink to={""} src={paper} text={"View Sales Agent Agenda "} />
            <DashboardLink to={""} src={bookmark} text={"Set Up meetings"} />
        </div>
    );
}

export default DashboardSidePhoneAgent;
