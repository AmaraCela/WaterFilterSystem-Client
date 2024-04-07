import * as React from "react";  
const profile = require("../assets/profileImg.png");
const closeBtn = require("../assets/closeBtn.png"); 
const HistoryBtn = require("../assets/HistoryBtn.png"); 
const ReferencesBtn = require("../assets/ReferencesBtn.png"); 
const ContractBtn = require("../assets/contractBtn.png"); 

function buyTemplate() {
  return (
    <div style={{ backgroundColor: 'rgba(40, 29, 150, 0.4)', padding: '20px' }}>
      <div className="flex flex-col max-w-[516px]">
        <div className="flex flex-col px-10 pt-7 pb-7 pl-7 pr-18 w-full bg-white bg-opacity-70 rounded-[57px] max-md:px-5 max-md:max-w-full">
          <div>
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center text-sm font-bold leading-5 text-center text-slate-400 max-md:mt-8">
                  <img
                    src={profile}
                    alt="Profile Picture"
                    className="object-contain aspect-[1.01] w-[124px]"
                  />
                  <div className="mt-1.5">
                    <span className="text-amber-500">4.6</span>/10
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-1 max-md:mt-9">
                  <div className="flex gap-3.5 items-center">
                    <div className="text-xl font-semibold text-indigo-800">
                      Name of Buyer
                    </div>
                    <div className="flex flex-1 gap-1 my-auto text-xs text-blue-900">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b714157c45c9c11c48a0040b7240c21e6173200d7c79dd403db729fa308d315a?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                        className="shrink-0 aspect-[1] w-[15px]"
                      />
                      <div className="text-blue">
                        Joined on June 2015
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-4 text-xs">
                    <div className="font-bold text-blue-900">Buyer</div>
                    <div className="flex-auto text-black text-opacity-30">
                      <span className="font-bold text-blue-900">ID:</span> 2734920
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-black text-opacity-30">
                    <span className="font-bold text-sky-900">Address: </span>{" "}
                    add addr
                    <br />
                  </div>
                  <div className="mt-7 text-xs text-black text-opacity-30">
                    <span className="font-bold text-blue-900">Phone No. 1:</span>{" "}
                    04 265 4897 <br />
                    <span className="font-bold text-blue-900">
                      Phone No. 2:
                    </span>{" "}
                    +355 69875643
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-4 ml-5 w-full text-xs font-bold text-gray-500 whitespace-nowrap max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9af29916014fdc9e04c876abfd49dad6c441cc3404b26999ea6bb3dec17ac0e?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 max-w-full aspect-[4.55] w-[110px]"
            />
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a827307b2d685e3162ff07a259e0ec1c73896f54902e070b97342c8b264d1e5?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">History</div>
            </div>
            <button>
               <img 
              src={ContractBtn}
              className=""
            />
            </button>
           
          </div>
        </div>
        <div className="self-center pt-4" >
          <button>
             <img
                    src={closeBtn}
                    alt="Close Button"
                    className="self-center" />
          </button>
       </div>
      
      </div>
    </div>
  );
}

export default buyTemplate;
