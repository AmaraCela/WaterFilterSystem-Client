import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";

const PhoneAgent_HomePage = () => {
    return (
        <div className="flex flex-col justify-center px-1">
          <div className="flex flex-col pb-20  max-md:max-w-full">
            {/* <div className="w-full bg-white border border-solid border-black border-opacity-30 min-h-[239px] rounded-[30px] max-md:max-w-full" /> */}
            <PhoneAgentDashboard/>
            
           
          </div> 
          <div className="flex justify-center">
          <HomeWidget/>
          </div>
        </div>
      );
    }

export default PhoneAgent_HomePage;