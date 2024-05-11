import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import RedlistTable from "../components/redlist_Table";
import ManualRedlistAdd from "../components/addToRedlistManually";
const backgroundLight = require('../assets/backgroundLight.png').default;

const PhoneAgent_Redlist = () => {
    return (
        <div className="flex flex-col justify-center px-1 " style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="flex flex-col pb-3  max-md:max-w-full">
                <PhoneAgentDashboard/>
            </div> 
            <div className="flex justify-center gap-10">                
                 <RedlistTable/>
                 <ManualRedlistAdd/> 
            </div>
        </div>
    );
}

export default PhoneAgent_Redlist;
