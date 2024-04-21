const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const TopIcons = () => {
    return (
        <div className="flex flex-row pt-4 pr-8 items-end justify-end">
            <img src={bell} alt="" className="h-6" />
            <img src={message} alt="" className="h-6 ml-7" />
            <img src={exit} alt="" className="h-6 ml-7" />
        </div>
    );
}

export default TopIcons;