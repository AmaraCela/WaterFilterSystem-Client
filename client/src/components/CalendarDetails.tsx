import '../styles/CalendarDetails.css';
const blueTick = require("../assets/blueTick.png");
const redTick = require("../assets/redTick.png");
const orangeTick = require("../assets/orangeTick.png");
const greenTick = require("../assets/greenTick.png");
const CalendarDetails = () => {
    return (
        <div className="p-2 border border-[#a5a5a5] rounded-lg">
            <p className="montserrat font-medium text-base">Calendar Details</p>
            <div className="flex montserrat font-medium text-sm mt-2">
                <img src={blueTick} alt="" />
                <p className="ml-2">Ongoing meetings</p>
            </div>
            <div className="flex montserrat font-medium text-sm mt-1">
                <img src={orangeTick} alt="" />
                <p className="ml-2">Rescheduled meetings</p>
            </div>
            <div className="flex montserrat font-medium text-sm mt-1">
                <img src={redTick} alt="" />
                <p className="ml-2">Cancelled meetings</p>
            </div>
            <div className="flex montserrat font-medium text-sm mt-1">
                <img src={greenTick} alt="" />
                <p className="ml-2">Completed meetings</p>
            </div>
        </div>
    );
}

export default CalendarDetails;