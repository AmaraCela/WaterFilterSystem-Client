import * as React from "react";

function InventoryTaskAssignForm() {
    return (
        <div className="flex flex-col px-20 pt-12 pb-5 border border-solid backdrop-blur-[50px] bg-white bg-opacity-30 border-black border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5">
          <div className="mt-0 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
            Name of Installer
          </div>
          <div className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto mr-36 ml-52">Content</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b3eba446f66eade1c63c65e817df4db832b56542be1dfb6243f9ea393e587c?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
            Name of Client
          </div>
          <div className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto mr-36 ml-52">Content</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b3eba446f66eade1c63c65e817df4db832b56542be1dfb6243f9ea393e587c?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
            Address of Client{" "}
          </div>
          <div className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto mr-36 ml-52">Content</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b3eba446f66eade1c63c65e817df4db832b56542be1dfb6243f9ea393e587c?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
            Task Subject
          </div>
          <div className="flex gap-5 justify-center px-4 py-2 mt-3 text-base text-black whitespace-nowrap rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto mr-36 ml-52">Content</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b3eba446f66eade1c63c65e817df4db832b56542be1dfb6243f9ea393e587c?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
          <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
            Special Notes (optional)
          </div>
          <div className="flex flex-col justify-center items-end py-8 pr-2.5 pl-16 mt-2 rounded-xl border border-black border-solid bg-indigo-500 bg-opacity-10 max-md:pl-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/882816c528dbdf01df78639e323d19f6151a5ee4269ebe98d288d660f9fc5edc?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px]">
            <div className="justify-center px-4 py-2 bg-white rounded border-2 border-indigo-800 border-solid max-md:px-5">
              Cancel
            </div>
            <div className="justify-center px-4 py-2 bg-white rounded border-2 border-indigo-800 border-solid max-md:px-7">
              Save
            </div>
          </div>
        </div>
      );
}

export default InventoryTaskAssignForm; 

