import { Client } from "../types/types";
const calendar = require("../assets/Calendarr.png");
const history = require("../assets/Ticket_alt.png");
const close = require("../assets/Close Icon.png");

const ReferenceInfo = ({ client, setDivVisibility }: { client: Client, setDivVisibility: any }) => {
    return ( 
        <div className="bg-[#38ff34ad] rounded-[49px] h-full flex flex-col items-center">
            <div className="bg-[#ffffffa6] w-11/12 px-7 h-max mt-8 rounded-[49px] pt-4 flex flex-col items-center inner-div">
                <div className="flex justify-between w-full">
                    <p className="rubik text-[#281D96] font-semibold text-lg">{client.name} {client.surname}</p>
                    <div className="flex ml-2">
                        <img src={calendar} alt="calendar" className="size-6 mr-2" />
                        <p className="mali text-[#0000004d]">Referenced by</p>
                        <p className="mali text-[#2ADA26] ml-1">name</p>
                    </div>
                </div>
                <div className="w-3/4 mt-2">
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">ID:</p>
                        <p className="rubik ml-16 text-[#0000004d]">{client.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Address:</p>
                        <p className="rubik ml-16 text-[#0000004d]">{client.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Phone No.:</p>
                        <p className="rubik ml-16 text-[#0000004d]">{client.phoneNo}</p>
                    </div>
                </div>

                <div className="flex justify-center w-full my-4">
                    <div className="flex">
                        <img src={history} alt="" />
                        <p className="rubik font-bold text-[#60687B]">History</p>
                    </div>
                </div>

            </div>
            <button className="w-max flex my-8 " onClick={() => setDivVisibility(false)}>
                <img src={close} alt="" />
                <p className="rubik text-[#172B85] font-bold ml-2">
                    Close
                </p>
            </button>
        </div>
     );
}
 
export default ReferenceInfo;