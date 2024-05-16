import { Client } from "../types/types";
import "../styles/buyerInfo.css";
import { useRef } from "react"; // Import useRef

const calendar = require("../assets/Calendarr.png");
const history = require("../assets/Ticket_alt.png");
const references = require("../assets/3 User.png");
const contract = require("../assets/Download.png");
const close = require("../assets/Close Icon.png");

const BuyerInfo = ({ client, setDivVisibility }: { client: Client, setDivVisibility: any }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Reference for the BuyerInfo component
    const buyerInfoRef = useRef<HTMLDivElement>(null);

    // Function to handle drag event
    const handleDrag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const buyerInfo = buyerInfoRef.current;
        if (!buyerInfo) return;
        buyerInfo.style.position = 'absolute';
        buyerInfo.style.left = `${event.clientX}px`;
        buyerInfo.style.top = `${event.clientY}px`;
    };
    return (
        <div className="bg-[#271d9659] rounded-[49px] h-full flex flex-col items-center" style={{width :'480px' , height: '400px' }}>
            <div className="bg-[#ffffffa6] w-11/12 px-7 h-max mt-8 rounded-[49px] pt-4 flex flex-col items-center inner-div"  style={{ height: '300px'}}>
                <div className=" pt-5 pl-5 pr-5 pb-5 flex justify-between w-full">
                    <p className="rubik text-[#281D96]  font-semibold text-lg">{client.name} {client.surname}</p>
                    <div className="flex ml-2">
                        <img src={calendar} alt="calendar" className="size-6 mr-2" />
                        <p className="text-[#0000004d] mali">Joined on</p>
                        <p className="text-[#2B437B] mali ml-1">{months[new Date(client.createdAt).getMonth()]}/{new Date(client.createdAt).getFullYear()}</p>
                    </div>
                </div>
                <div className="w-3/4 mt-2">
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">ID:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs">{client.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Address:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs">{client.address}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="rubik font-bold text-[#2B437B]">Phone No.:</p>
                        <p className="rubik ml-16 text-[#0000004d] text-xs mb-0">{client.phoneNo}</p>
                    </div>
                </div>

                <div className="pt-17  justify-between w-full my-4 mb-4">
                    <button className="flex-col mr-3">
                        <div className="flex justify-center mb-1">
                        <img  className='mr-1 ' src={history} alt="" />
                        <p className="rubik font-bold text-[#60687B]">History</p>
                    </div>
                    </button>
                    <button className="ml-3">
                        <div className="flex justify-center mb-1">
                        <img  className='mr-1 ' src={references} alt="" />
                        <p className="rubik font-bold text-[#60687B]">References</p>
                    </div>
                    </button> 

                    <button className="ml-3">
                    <div className="flex justify-center mt-1 ">
                    <img className='mr-1 'src={contract} alt="" />
                    <p className="rubik font-bold text-[#60687B]">Contract</p>
                    </div>
                    </button> 
                   
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

export default BuyerInfo;