import * as React from "react";

function Inventory_Note() {
  return (
    <div className="flex flex-col px-5 font-bold max-w-[311px] text-slate-600">
      <div className="self-start mb-3.5 text-2xl font-black tracking-tight">
        Leave a Note to installer
      </div>
      <div className="self-start mt-3 text-base font-medium tracking-tight leading-6">
        If there are any specific details, <br />
        include them here.{" "}
      </div>
      <div className="flex gap-5 mt-8 text-xs text-center text-gray-800 text-opacity-70">
        <div className="flex flex-col flex-1">
          <div className="z-10 justify-center py-2 pr-14 pl-1 mr-16 bg-white rounded-xl border border-solid border-black border-opacity-20">
          Installer Name
      </div>
      <input type="text" style={{ width: '175px' , color:'gray' }} className="shrink-0 pr-7 -mt-2.5 rounded-xl border border-solid bg-neutral-100 border-stone-500 h-[34px]" />
    </div>
    <div className="flex flex-col flex-1">
      <div className="z-10 justify-center py-2 pr-3.5 pl-4 mr-28 bg-white rounded-xl border border-solid border-black border-opacity-20">
        Task ID
      </div>
      <input type="text" style={{ width: '175px' , color:'gray' }} className="shrink-0 -mt-2.5 mr-12 -ml-1 rounded-xl border border-solid bg-neutral-100 border-stone-500 h-[34px]" />
    </div>
  </div>
  <div className="flex flex-col pl-2.5 mt-3.5 mr-11 w-full text-lg text-center text-white whitespace-nowrap">
    <input type="text" style={{ width: '350px' , color:'gray' }} className="shrink-0 mr-0 -ml-1 rounded-xl border border-solid bg-neutral-100 border-stone-500 h-[170px]" />
    <button>
         <div style={{ width: '350px' }} className="bg-blue-950 hover:bg-blue-500 items-center px-16 pt-4 pb-3.5 mt-4 rounded-xl">
      SEND
        </div>
    </button>
   
      </div>
    </div>
  );
}
export default Inventory_Note;


