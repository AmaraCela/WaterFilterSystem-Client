import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Calling.png");
const calendar = require("../assets/Calendar.png");
const clock = require("../assets/Vector.png");
const notebook = require("../assets/notebook_duotone.png");
const calendarAdd = require("../assets/Calendar_add_duotone.png")



const DashboardSidePhoneAgent = () => {
    return (
      <div className="side w-1/3 h-full flex flex-col justify-between items-center py-6 rounded-3xl">
        <div className="w-full flex flex-col justify-center items-center">
          <img src={profileImg} alt="Profile" className="w-28" />
          <p className="main-font font-bold mt-2">Anxhela Peri</p>
          <p className="main-font">Phone Agent</p>
        </div>
        <div className="w-full">
          <div className="header-container">
            <DashboardLink to={""} src={clock} text={"Phone Calls"} highlighted={false} />
            <div className="ml-8">
              <DashboardLink to={""} src={calling} text={"Call dial"} highlighted={false} />
              <DashboardLink to={""} src={calling} text={"Reserved calls"} highlighted={false} />
              <DashboardLink to={""} src={calling} text={"Schedule a call"} highlighted={false} />
              <DashboardLink to={""} src={notebook} text={"Latest References"} highlighted={false} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="header-container">
            <DashboardLink to={""} src={calendar} text={"Meetings"} highlighted={false} />
            <div className="ml-8">
              <DashboardLink to={"/allmeetings"} src={calendar} text={"View Meetings"} highlighted={false} />
              <DashboardLink to={""} src={calendarAdd} text={"Set Up Meetings"} highlighted={false} />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default DashboardSidePhoneAgent;
