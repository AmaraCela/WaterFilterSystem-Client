import * as React from "react";
import DashboardSide from "../components/DashboardSide";
import HistoryUpload from "../components/com-historyUpload";
import AddReferenceForm from "../components/com-formToAddReference";



function PhoneCallsPage() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 backdrop-blur-[2px] bg-neutral-100 max-md:px-5">
      <div className="flex flex-col mt-20 w-full max-w-[1282px] max-md:mt-10 max-md:max-w-full">
        <div className="py-px pr-8 border-solid backdrop-blur-[50px] border-[3px] border-zinc-400 border-opacity-60 rounded-[30px] max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                  <DashboardSide/>
                  </div>
                  <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto text-sm font-extrabold tracking-wide leading-7 text-center text-white max-md:mt-10 max-md:max-w-full">
                    <div className="overflow-hidden relative flex-col justify-center self-start px-7 py-5 aspect-[4.38] fill-indigo-800 max-md:px-5">
                      <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7486fc5f283f8a1e21c9ae1267461d11d4f226032afb1e06cf52f4e51f906d2?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                      className="object-cover absolute inset-0 size-full"
                      />
                      + IMPORT REFERENCES
                    </div>
                     <HistoryUpload />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                    <div className="flex flex-col pr-3.5 pl-12 max-md:pl-5">
                      <div className="flex gap-5 justify-between self-end">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb750487d57c8780940af6736d81bae16adefce2514af708b0d0eae6426bb9f?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                        className="shrink-0 my-auto w-9 aspect-[0.9]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5f28a29ca7844db59b0dbf61df16fffc3ae62099d68aced954c995926bae5db?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                        className="shrink-0 aspect-[1.06] w-[49px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e210746b7ebced150681d38d52b64228c7631ea37aaf37ffabf2cc5c20ac59e9?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                        className="shrink-0 aspect-[1.28] w-[59px]"
                      />
                      </div>
                      <div className="self-start mt-36 text-xl font-bold tracking-wide leading-7 text-center text-indigo-800 max-md:mt-10">
                      OR INSERT REFERENCES MANUALLY
                      </div>
                    </div>
                     <AddReferenceForm  />
                    </div>
                  </div>
                  </div>
                </div>
                <div className="shrink-0 self-end mt-28 max-w-full bg-zinc-300 h-[13px] w-[323px] max-md:mt-10" />
                </div>
              </div>
              );
}

export default PhoneCallsPage;
