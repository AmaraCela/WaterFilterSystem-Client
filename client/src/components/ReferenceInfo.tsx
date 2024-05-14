import { Client, findReferrerName } from "../types/types";
import { sampleClients } from "../pages/ChiefMarketing_BuyersAndReferences";
const calendar = require("../assets/Calendarr.png");
const history = require("../assets/Ticket_alt.png");
const close = require("../assets/Close Icon.png");

const ReferenceInfo = ({ client, setDivVisibility }: { client: Client, setDivVisibility: any }) => {
    return ( 
        <div className="bg-[#38ff34ad] rounded-[49px] h-full flex flex-col items-center" style={{width :'450px'}}>
            <div className="bg-[#ffffffa6] w-11/12 px-7 h-max mt-8 rounded-[49px] pt-4 flex flex-col items-center inner-div">
                <p className="mali text-[#2ADA26] ml-1">{client.name} {client.surname} 
                <p className="flex text-xs"> Referred By: <p className=" flex underline text-xs">{findReferrerName(client.referredBy, sampleClients)}</p></p></p>
                <div className="w-3/4 mt-2">
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">ID:</p>
                        <p className="text-xs rubik ml-16 text-[#0000004d]">{client.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Address:</p>
                        <p className="text-xs flex rubik ml-16 text-[#0000004d]">{client.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="flex rubik font-bold text-[#2B437B]">Phone No.:</p>
                       
                        <p className="flex text-xs rubik ml-16 text-[#0000004d]"> <br
                        ></br>{client.phoneNo}</p>
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
 
export default ReferenceInfo ;