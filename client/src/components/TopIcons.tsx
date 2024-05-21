import { logout } from "../serverUtils/serverUtils";

const bell = require("../assets/bell.png");
const message = require("../assets/message.png");
const exit = require("../assets/exit.png");

const TopIcons = () => {
    return (
        <div className="flex flex-row pt-4 pr-8">
            <img src={bell} alt="" className="h-6" />
            <img src={message} alt="" className="h-6 ml-7" />
            <img src={exit} alt="" onClick={logout} className="h-6 ml-7" style={{ cursor: 'pointer' }} />
        </div>
    );
}

export default TopIcons;