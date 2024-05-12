import * as React from "react";

function HomeWidget({fullName}: any) {
  return (
    <div className="flex flex-col px-5 max-w-[992px]">
      <div className="self-center text-4xl font-bold leading-7 text-indigo-800">
        Hello {fullName}!
      </div>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start py-9 pr-12 pl-3 w-full font-bold text-white bg-cyan-800 rounded-lg max-md:pr-5 max-md:mt-10">
              <div className="text-7xl max-md:text-4xl">14</div>
              <div className="mt-7 text-3xl">Reserved calls for today</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start py-6 pr-12 pl-4 w-full font-bold text-white bg-cyan-800 rounded-lg max-md:pr-5 max-md:mt-10">
              <div className="text-7xl max-md:text-4xl">23</div>
              <div className="mt-3.5 text-3xl">
                recently added refs since last check
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-3.5 py-7 mx-auto w-full font-bold text-white bg-cyan-800 rounded-lg max-md:pr-5 max-md:mt-10">
              <div className="flex gap-5 justify-between px-0.5 text-7xl whitespace-nowrap max-md:text-4xl">
                <div className="self-start max-md:text-4xl">37</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
                  className="shrink-0 aspect-square w-[68px]"
                />
              </div>
              <div className="mt-7 text-3xl">Unread emails from last login</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow font-bold text-white max-md:mt-10">
              <div className="flex flex-col px-5 py-6 bg-cyan-800 rounded-lg max-md:pr-5">
                <div className="text-7xl max-md:text-4xl">12/29</div>
                <div className="mt-6 text-3xl">calls completed today</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWidget; 

