import * as React from "react";
import LoginWidget from "../components/loginWidget"; // Importing the LoginWidget component
import "../styles/Login.css"; 

function LoginPage() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white backdrop-blur-[2px] max-md:px-5 page-background">
      <div className="flex gap-5 justify-between items-start mt-20 w-full max-w-[1444px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-end mt-28 max-md:mt-10">
         {/* water drops */}
          {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ce3d7903388ff9178d91160ee5bc57779431ca25ed8191c16587491b4bab0d8d?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="mt-24 w-full shadow-2xl aspect-[0.74] max-md:mt-10"
          /> */}
        </div>
        <div className="flex flex-col self-start text-center max-md:max-w-full">
        
          <LoginWidget /> {/* Added the LoginWidget component here */}
          <div className="self-center mt-10 text-2xl text-indigo-950">
            Aqualife SHPK.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
