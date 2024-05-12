import React, { useState } from "react";

import PhoneAgentDashboard from "../components/phoneAgent-Dashboard";
import HomeWidget from "../components/phoneAgent-HomeWidget";
import { getLoggedUserId } from "../loginUtils/loginUtils";
const backgroundLight = require('../assets/backgroundLight.png').default;

const PhoneAgent_HomePage = () => {
    const [fullName, setFullName] = useState("");
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    const user_id = getLoggedUserId();
    fetch(`${apiUrl}/users/phoneOperators/${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(data => {
                console.log("Failed to retrieve user", data.message);
            });
        }
        else {
            return response.json().then(data => {
                console.log("User data retrieved successfully", data);
                setFullName(data.name + " " + data.surname);
            });
        }
    }).catch((error) => {
        console.log("Failed to retrieve user", error);
    });

    return (
        <div className="flex flex-col justify-center px-1 " style={{backgroundImage: `url(${backgroundLight})`}}>
            <div className="flex flex-col pb-20  max-md:max-w-full">
                <PhoneAgentDashboard fullName={fullName}/>
            </div> 
            <div className="flex justify-center">
                <HomeWidget fullName={fullName}/>
            </div>
        </div>
    );
}

export default PhoneAgent_HomePage;
