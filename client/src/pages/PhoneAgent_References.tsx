import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import ReferenceTable from "../components/referenceTable_PhoneAgent";
const backgroundLight = require('../assets/backgroundLight.png').default;

const PhoneAgent_Refs = () => {
    return (
        <div className="flex flex-col justify-center px-1 " style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="flex flex-col pb-20 max-md:max-w-full  bg-[#F2F8FD]">
                <PhoneAgentDashboard/>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-6">
                     
                References to call
            </p>
            </div> 
           
            <div className="flex justify-center bg-[#F2F8FD] ">
        
                <table style={{ width: '80%', height: '500px'  }}> {/* Adjust width and height as needed */}
                    <ReferenceTable/>
                </table>
            </div>
        </div>
    );
}

export default PhoneAgent_Refs;
