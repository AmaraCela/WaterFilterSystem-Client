import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Notifications from "./notifications";
import Inbox from "./inbox";
import HistoryCalls from "./HistoryCalls";
function PhoneAgentDashboard() {
  const [greenText, setGreenText] = useState("");
  const [showCallHistory, setShowCallHistory] = useState(false); // State to control the visibility of CallHistory popup

  const handleClick = (text: any) => {
    setGreenText(text);
    if (text === "Call History") {
      setShowCallHistory(true); // Show the CallHistory popup when "Call History" is clicked
    } else {
      setShowCallHistory(false); // Hide the CallHistory popup for other options
    }
  };

 

  return (
    <div className="pt-8 pr-8 pb-12 pl-16 bg-white rounded-[30px] max-md:px-5 border-b-2 border-gray-300"> {/* Added border */}
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between text-lg font-bold text-indigo-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col my-auto text-2xl text-sky-950">
              <img
                loading="lazy"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                className="self-center aspect-[1.03] w-[89px]"
              />
              <div className={`mt-3.5 ${greenText === "Anxhela Peri" ? "text-green-500" : ""}`} onClick={() => handleClick("Anxhela Peri")}>
                Anxhela Peri
              </div>
              <Link to="/home"> {/* Use Link component to navigate to the "/home" path */}
                <div className="flex justify-center gap-2 px-3 py-2 text-base font-bold text-center text-indigo-800 whitespace-nowrap rounded-lg bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-sm:-mr-1 ">
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c058a858ec5bb22b5c12be435fa48e694741a42b29e2b18f92e2d3a963d065d?"
                      className="shrink-0 aspect-square w-[15px]"
                  />
                  <div className="">Home</div>
                </div>
              </Link>
                </div>
            <div className="shrink-0 self-end mt-6 w-px   bg-black bg-opacity-20  h-[140px]" />
            <div className="flex flex-col text-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/719ad7da939dae36edb3efb313a32f2699d837e442390a76772ad05e2b0b35ef?"
                className="self-center aspect-[0.93] w-[66px]"
              />
              <Link to="/viewAllMeetings">
              <button onClick={() => handleClick("View All Meetings")}>
                <div className={`mt-1.5 ${greenText === "View All Meetings" ? "text-green-500" : ""}`}>Meetings</div>
              </button>
              </Link>
              
              <Link to="/latestReferencesPhoneAgent">
              <button onClick={() => handleClick("Latest References")}>
                <div className={`mt-4 ${greenText === "Latest References" ? "text-green-500" : ""}`}>Latest References</div>
              </button>
              </Link>
            </div>
            <div className="flex flex-col items-center self-start mt-2.5 text-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d4dab5f8862bfa9045274334f4047cc318d21598aaf8594ef4ada2302a66fe1?"
                className="aspect-[0.91] w-[50px]"
              />
              <button onClick={() => handleClick("Call History")}>
                <div className={`mt-4 ${greenText === "Call History" ? "text-green-500" : ""}`}>Call History</div>
              </button>
              <Link to='/reservedCalls'>
               <button onClick={() => handleClick("Reserved Calls List")}>
                <div className={`self-stretch mt-4 ${greenText === "Reserved Calls List" ? "text-green-500" : ""}`}>
                  Reserved Calls List
                </div>
              </button>
              </Link>
             
              <Link to="/redlistPhoneAgent">
              <button onClick={() => handleClick("Redlist")}>
                <div className={`mt-3.5 ${greenText === "Redlist" ? "text-green-500" : ""}`}>Redlist</div>
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between mt-6 max-md:mt-10">
            <div className="shrink-0 w-0.5  bg-black bg-opacity-20   h-[139px]" />
            <div className="flex gap-5 justify-between px-5">
              <Notifications/>
              <Inbox/>
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed2b266ab37b3ce83fe82d793548127557ea95158ab1d2ec86df88e30ef91571?"
                  className="shrink-0 aspect-[1.28] w-[59px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showCallHistory && <HistoryCalls />}
    </div>
  );
}

export default PhoneAgentDashboard;
