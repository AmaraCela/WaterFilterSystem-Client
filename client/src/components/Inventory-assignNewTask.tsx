import React, { useState } from "react";

function InventoryTaskAssignForm() {
  const [installerName, setInstallerName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [taskSubject, setTaskSubject] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");

  const handleSave = () => {
    // Handle saving data
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  return (
    <div className="flex flex-col px-20 pt-12 pb-5 w-[400vh] h-full backdrop-blur-[50px] bg-white bg-opacity-30 border-white border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5  shadow-lg rounded-3xl">
      <div className="mt-0 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        Name of Installer
      </div>
      <input
        type="text"
        value={installerName}
        onChange={(e) => setInstallerName(e.target.value)}
        className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-gray border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full"
      />
      <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        Name of Client
      </div>
      <input
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-gray border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full"
      />
      <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        Address of Client
      </div>
      <input
        type="text"
        value={clientAddress}
        onChange={(e) => setClientAddress(e.target.value)}
        className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-gray border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full"
      />
      <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        Task Subject
      </div>
      <input
        type="text"
        value={taskSubject}
        onChange={(e) => setTaskSubject(e.target.value)}
        className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-gray border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full"
      />
      <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        Special Notes (optional)
      </div>
      <input
        type="text"
        value={specialNotes}
        onChange={(e) => setSpecialNotes(e.target.value)}
        className="flex flex-col justify-center items-end py-8   mt-2 rounded-xl border border-gray border-solid bg-indigo-500 bg-opacity-10  max-md:max-w-full"
      />
      <div className="flex gap-5 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px]">
        <button
          className="bg-white text-xl hover:bg-blue-950 text-blue-950   hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded-lg"
          onClick={handleSave}
        >
          SAVE
        </button>
        <button
          className="bg-white text-xl hover:bg-blue-950 text-blue-950  hover:text-white py-2 px-4 border border-blue-950 hover:border-transparent rounded"
          onClick={handleCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default InventoryTaskAssignForm;
