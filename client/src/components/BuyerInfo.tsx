import { Client } from "../types/types";
import "../styles/buyerInfo.css";
const calendar = require("../assets/Calendarr.png");
const history  = require("../assets/Ticket_alt.png");
const references = require("../assets/3 User.png");
const contract = require("../assets/Download.png");
const close = require("../assets/Close Icon.png");

const BuyerInfo = ({ client, setDivVisibility }: { client: Client, setDivVisibility: any }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="bg-[#271d9659] rounded-[49px] h-full flex flex-col items-center">
            <div className="bg-[#ffffffa6] w-11/12 px-7 h-max mt-8 rounded-[49px] pt-4 flex flex-col items-center inner-div">
                <div className="flex justify-between">
                    <p className="rubik text-[#281D96] font-semibold text-lg">{client.name} {client.surname}</p>
                    <div className="flex ml-2">
                        <img src={calendar} alt="calendar" className="size-6 mr-2" />
                        <p className="text-[#0000004d] mali">Joined on</p>
                        <p className="text-[#2B437B] mali ml-1">{months[new Date(client.createdAt).getMonth()]}/{new Date(client.createdAt).getFullYear()}</p>
                    </div>
                </div>
                <div className="w-3/4 mt-2">
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">ID:</p>
                        <p className="rubik ml-16">{client.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Address:</p>
                        <p className="rubik ml-16">{client.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Phone No.:</p>
                        <p className="rubik ml-16">{client.phoneNo}</p>
                    </div>
                </div>

                <div className="flex justify-between w-full my-2">
                    <div className="flex">
                        <img src={history} alt="" />
                        <p className="rubik font-bold text-[#60687B]">History</p>
                    </div>
                    <div className="flex">
                        <img src={references} alt="" />
                        <p className="rubik font-bold text-[#60687B]">References</p>
                    </div>
                    <div className="flex">
                        <img src={contract} alt="" />
                        <p className="rubik font-bold text-[#60687B]">Contract</p>
                    </div>
                </div>

            </div>
            <div className="w-max flex mt-8">
                <img src={close} alt="" />
                <button className="rubik text-[#172B85] font-bold ml-2" onClick={() => setDivVisibility(false)}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default BuyerInfo;