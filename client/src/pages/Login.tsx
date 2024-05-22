import * as React from "react";
import LoginWidget from "../components/loginWidget"; // Importing the LoginWidget component
import '../styles/waterBtn.scss' ; 
const bg = require('../assets/waterhd.jpg'); 

function LoginPage() {
  return (
    <div className="login-page">
      <div className="background-image">
      </div>
      <div className=" backdrop-blur-[2px] page-background flex justify-center items-center px-16 py-20  backdrop-blur-[2px] max-md:px-5 page-background" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex gap-5 justify-between items-start mt-20 w-full max-w-[1444px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-end mt-28 max-md:mt-10">
           </div>
          <div className=" widget flex flex-col self-start text-center max-md:max-w-full ">
            <LoginWidget />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
