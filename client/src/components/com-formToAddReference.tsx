import * as React from "react";

function AddReferenceForm() {
  return (
    <div className="flex flex-col text-sm leading-4 text-indigo-800 max-w-[325px]">
      <div className="justify-center items-start p-5 w-full italic bg-white rounded-md border border-solid border-slate-700">
        Full Name of Reference{" "}
      </div>
      <div className="justify-center items-start p-5 mt-4 w-full italic bg-white rounded-md border border-solid border-slate-700">
        Phone Number
      </div>
      <div className="flex flex-col justify-center mt-4 w-full bg-white">
        <div className="flex gap-5 py-3 pr-2.5 pl-5 w-full bg-white rounded-md border border-solid border-slate-700">
          <div className="flex-auto my-auto italic">
            origin client of reference{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9bd73056c27322f40101b7d947f0b393d57f4adf45c2463cecd86c89231a2e?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 w-7 aspect-square"
          />
        </div>
      </div>
      <div className="justify-center items-center px-16 py-5 mt-10 w-full text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-indigo-900 rounded-md">
        Submit
      </div>
      <div className="justify-center items-center px-16 py-5 mt-4 w-full text-base font-bold leading-6 text-center text-white bg-indigo-800 rounded-md">
        Clear fields
      </div>
    </div>
  );
}

export default AddReferenceForm; 
