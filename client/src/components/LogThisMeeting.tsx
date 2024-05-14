import * as React from "react";

const LogThisMeeting = () => {
  return (
    <div className=" top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 z-50 font-poppins">
      <div
        className="flex flex-col items-center rounded-md border border-solid shadow-2xl border-zinc-800 border-opacity-10 max-w-[900px] bg-white"
        style={{ height: "450px", width:"450px" }}
      >
        <div className="flex flex-col items-center justify-center p-10 w-full text-xl font-bold text-zinc-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="flex items-top gap-2 mb-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/596a99c418f26645268111476cdfbf0abcc563769e0f164ee35be2d4fed8a842?"
              className="shrink-0 self-start w-5 h-5 aspect-square"
            />
            <span className="text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Log this meeting
            </span>
          </div>
          <div className="flex gap-3 text-base leading-4 max-w-[285px] text-black-950 text-poppins">
            <div className="flex flex-col font-medium">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  id="canceledByClient"
                  className="self-start h-4 w-4"
                  name="meetingStatus"
                  style={{
                    border: "1px solid black",
                    borderRadius: "0",
                    marginLeft: "-30px",
                  }}
                />
                <span className="text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  canceled by client
                </span>
              </div>
              <br/>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="self-start h-4 w-4"
                  name="meetingStatus"
                  style={{
                    border: "1px solid black",
                    borderRadius: "0",
                    marginLeft: "-45px",
                  }}
                />
                <span
                  className="text-black"
                  style={{ lineHeight: 1, fontFamily: 'Poppins, sans-serif' }}
                >
                  cancelled by me
                </span>
              </div>
            </div>
            <div className="flex flex-col font-medium">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="self-start h-4 w-4"
                  name="meetingStatus"
                  style={{
                    border: "1px solid black",
                    borderRadius: "0",
                    marginLeft: "-5px",
                  }}
                />
                <span className="text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  successful
                </span>
              </div>
              <br/>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="self-start h-4 w-4"
                  name="meetingStatus"
                  style={{
                    border: "1px solid black",
                    borderRadius: "0",
                    marginLeft: "19px",
                  }}
                />
                <span className="text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  unsuccessful
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="text-left  mt-10" style={{ marginLeft: "-55px", fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-base text-black">
              Additional comments:
            </span>
          </div>
          <div className="mt-4">
            <textarea
              placeholder=" "
              className="w-full h-20 px-10 py-2 border border-solid border-black rounded-md focus:border-black-500 text-sm" // Added text-sm class here
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>
        </div>
        <div
          className="flex justify-end px-4 pb-3 text-base font-medium"
          style={{ transform: "translateX(30%)" }}
        >
          <button
            className="px-4 py-1 text-white rounded bg-zinc-800 cursor-pointer"
            style={{ marginRight: "12px", fontFamily: 'Poppins, sans-serif' }}
          >
            Submit
          </button>
          <button className="px-4 py-1 rounded border border-solid bg-zinc-800 bg-opacity-10 border-zinc-800 border-opacity-10 text-zinc-800 cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogThisMeeting;
