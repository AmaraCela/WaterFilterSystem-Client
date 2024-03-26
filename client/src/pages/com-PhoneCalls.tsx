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
                <div style={{ marginTop: "10px" }}> {/* Adjusted margin-top */}
                  <HistoryUpload />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <div className="flex flex-col pr-3.5 pl-12 max-md:pl-5">
                  <div className="flex gap-5 justify-between self-end">
                    {/* Your images */}
                  </div>
                  <div className="self-start mt-15 text-xl font-bold tracking-wide leading-7 text-center text-indigo-800 max-md:mt-10">
                    OR INSERT REFERENCES MANUALLY
                  </div>
                </div>
                <AddReferenceForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-end mt-28 max-w-full bg-zinc-300 h-[13px] w-[323px] max-md:mt-10" />
    </div>
  );
}

export default PhoneCallsPage;
