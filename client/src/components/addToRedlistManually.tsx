import React, { useState } from "react";
import Redlist from "./redlistAlert"; // Import the Redlist component

function ManualRedlistAdd() {
  const [showManualRedlistAdd, setShowManualRedlistAdd] = useState(true); // State to manage visibility of ManualRedlistAdd
  const [showRedlist, setShowRedlist] = useState(false); // State to manage visibility of Redlist

  const handleSaveClick = () => {
    // setShowManualRedlistAdd(false); // Hide ManualRedlistAdd
    setShowRedlist(true); // Show Redlist
  };

  return (
    <>
      {showManualRedlistAdd && (
        <div className="flex flex-col px-5 text-2xl leading-9 text-indigo-800 max-w-[300px]" style={{width: '30%'}}>
          <div className="w-full font-bold tracking-tight text-center">
            Add referral to redlist{" "}
          </div>
          <div className="flex flex-col pl-3  w-full font-medium">
            <div className="text-xs font-semibold text-stone-500">
              Fill this form to add the user in the redlist. Shortly explain
              why.{" "}
            </div>
            <div className="mt-1 tracking-tight text-s">Name</div>
            <input 
              type="text"
              className="justify-center items-start px-4 py-2 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10"
              placeholder=""
            />
            <div className="mt-1 tracking-tight">Address</div>
            <input
              type="text"
              className="justify-center items-start px-4 py-2 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10"
              placeholder=""
            />
            <div className="mt-1 tracking-tight">Phone Number</div>
            <input
              type="text"
              className="justify-center items-start px-4 py-2 mt-3.5 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10"
              placeholder=""
            />
            <div className="mt-1 tracking-tight">Reason</div>
            <input
              type="text"
              className="shrink-0 rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 h-[86px]"
              placeholder=""
            />
            <button
              className="justify-center self-center px-4 py-1 mt-5 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap bg-white rounded border-2 border-indigo-800 border-solid tracking-[2px]"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </div>
      )}
      {showRedlist && <Redlist onClose={handleSaveClick} />} {/* Render Redlist if showRedlist is true */}
    </>
  );
}

export default ManualRedlistAdd;
