import React from "react";

const DashboardSide = () => {
  return (
    <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-20 pt-12 pb-20 text-lg text-indigo-500 rounded-none max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c39953ebdbc5f7a6cd538ec45db02122b33add0e35dbbe872c89433216f80cc1?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
          className="self-center max-w-full aspect-[1.04] w-[140px]"
          alt="Avatar"
        />
        <div className="self-center mt-10 font-bold text-indigo-800">
          Ediola Kola
        </div>
        <div className="self-center mt-6 text-base text-center text-indigo-800">
          Chief of Marketing
        </div>
        <div className="flex gap-5 mt-10 font-bold text-center max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed43db20c6a55022086a8190c467449e721aadc8952c2bab0d507c2355c904f?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 aspect-[1.11] w-[29px]"
            alt="Icon"
          />
          <div className="flex-auto my-auto">Phone Calls</div>
        </div>
        <div className="flex gap-5 mt-11 whitespace-nowrap max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d71c8e8e4dfa9f6322ab348e3b02f543b8a0df111d52b63a5af2ea0702e702d?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 aspect-[1.08] w-[29px]"
            alt="Icon"
          />
          <div className="flex-auto my-auto">Schedules</div>
        </div>
        <div className="flex gap-5 mt-11 whitespace-nowrap max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d96c776bba8a90920fddf3863d33cff5729830c310e2c903c7fa57aaf749730?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 aspect-[0.92] w-[23px]"
            alt="Icon"
          />
 <div className="flex-auto my-auto">Statistics</div>
        </div>
        <div className="flex gap-5 mt-10 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/557cb64aa471140f61fa3b82c42dff47facc4c28a82e2b7b7f067126e67987a0?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 aspect-[1.1] w-[34px]"
            alt="Icon"
          />
          <div className="flex-auto my-auto">Red List</div>
        </div>
        <div className="flex gap-5 mt-12 max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/357d50b504294b102180a87992b67acdacfcf022bf1fb03aff90e7f227168c96?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 my-auto aspect-[1.12] w-[37px]"
            alt="Icon"
          />
          <div>
            Buyers <br />
            and references
          </div>
        </div>
        <div className="flex gap-5 mt-10 whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3edb83bfff6cbdc8c894072f999fd9d284a77dfabf4bffd1109365457cce10df?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="shrink-0 w-6 aspect-square"
            alt="Icon"
          />
          <div className="flex-auto my-auto">Collections</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardSide;