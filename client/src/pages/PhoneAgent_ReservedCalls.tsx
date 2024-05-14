import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import ReferenceTable from "../components/referenceTable_PhoneAgent";
import ReservedTable from "../components/reservedCalls_Table";
const backgroundLight = require('../assets/backgroundLight.png').default;

const PhoneAgent_ReservedCalls = () => {
    return (
        <div className="flex flex-col justify-center px-1 " style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="flex flex-col pb-8 max-md:max-w-full  bg-[#F2F8FD]">
                <PhoneAgentDashboard/>
            </div> 
            <div className="flex justify-center bg-[#F2F8FD] ">
                <table style={{ width: '95%', height: '800px'  }}> 
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-10 mb-3 ">
                    Reserved calls  
                </p>
                    <ReservedTable/>
                </table>
            </div>
        </div>
    );
}

export default PhoneAgent_ReservedCalls;
