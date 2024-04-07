import * as React from "react";

function PhoneCall() {
  return (
    <div className="flex flex-col max-w-[465px]">
      <div className="flex gap-3 self-start ml-3 text-lg font-bold tracking-normal text-stone-500">
        <div className="grow justify-center items-start px-4 py-4 rounded-xl border border-gray-800 border-solid bg-neutral-100 w-fit">
          type phone no .{" "}
        </div>
        <button>
           <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/915ea3e767093aa6ca5c0790a9279ef3f6fc5bdb5dc6da2c6c65086083cd7aab?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
          className="shrink-0 my-auto aspect-square w-[50px]"
        />
        </button>
       
      </div>
      <div className="flex flex-col pb-2 mt-3.5 w-full rounded-2xl border-4 border-solid border-slate-600">
        <div className="flex gap-5 justify-center px-5 py-4 w-full bg-slate-600">
          <div className="flex gap-3 text-xl font-semibold text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ff45ff099cbd54f261741936d963a92f78938f3c3727a56461df406f032d350?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 self-start aspect-square w-[22px]"
            />
            <div>Elsa Bangu</div>
          </div>
          <div className="my-auto text-base text-white text-opacity-80">
            00:02:30
          </div>
        </div> 
       <div className="flex gap-4">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/001b7014d27250e88661d04cbd761793cdca600e5b142541742f30ad846b57a7?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
        className="flex-1 shrink-0 w-full aspect-[1.35] ml-3 mt-7  mr-3 mb-8"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e67a109ee4dedbdd1d9c6cb69c4d391a755f625c828fb20dc6910ced6fc41?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
        className="flex-1 shrink-0 w-full aspect-[1.35]  mt-7 mr-6 mb-8"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a781e38212780be6b47445aed9edf4752f6abba10567b5f8a4fe390982102d5?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
        className="flex-1 shrink-0 w-full aspect-[1.35]  mt-7 mr-3  mb-8"
      />
    </div>
        
      </div>
    </div>
  );
}

export default PhoneCall; 

