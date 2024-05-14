import * as React from "react";
import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
const backgroundLight = require('../assets/backgroundLight.png').default;

const PhoneAgent_HomePage = () => {
    return (
        <div className="flex flex-col justify-center px-1 " style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="flex flex-col  max-md:max-w-full">
                <PhoneAgentDashboard/>
                <div className=" bg-[#F2F8FD]" >
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                </div>
            </div> 
            <div className="flex justify-center bg-[#F2F8FD]">
                <HomeWidget/>
            </div>
        </div>
    );
}

export default PhoneAgent_HomePage;
