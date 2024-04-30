import * as React from "react";

function insights() {
  return (
    <div className="flex flex-col font-medium max-w-[310px]">
      <div className="flex gap-5 w-full">
        <div className="flex flex-col flex-1 items-start px-4 py-3 bg-rose-100 rounded-2xl border border-solid border-stone-300 border-opacity-50 leading-[160%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bec12155ae1804a03b22fe658d00da22fb400453e8b3e003d3a713958f57dbc2?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="w-8 aspect-[1.19]"
          />
          <div className="mt-5 text-xl font-semibold text-indigo-950">$1k</div>
          <div className="mt-2.5 text-sm leading-6 text-slate-600">
            Total Sales
          </div>
          <div className="mt-2.5 text-xs text-blue-500">+8% from yesterday</div>
        </div>
        <div className="flex flex-col flex-1 px-4 py-3 bg-orange-100 rounded-2xl border border-solid border-stone-300 border-opacity-50">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6637004db93b0a59ed87cebbadac88f193924b093ac568215ed086120158eea?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="w-8 aspect-[1.19]"
          />
          <div className="mt-4 text-2xl font-semibold leading-8 text-indigo-950">
            300
          </div>
          <div className="mt-2.5 text-sm leading-6 text-slate-600">
            Total meetings
          </div>
          <div className="mt-1.5 text-xs leading-4 text-blue-500">
            +5% from yesterday
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-8">
        <div className="flex flex-col flex-1 px-4 py-3 bg-green-100 rounded-2xl border border-solid border-stone-300 border-opacity-50">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8b6780bc82e1211dbe887321efe6d5c75318cfbe27420d4e597919933fdcbf?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="w-8 aspect-[1.19]"
          />
          <div className="mt-5 text-2xl font-semibold leading-8 text-indigo-950">
            14
          </div>
          <div className="mt-2.5 text-sm leading-6 text-slate-600">
            {" "}
            filters sold
          </div>
          <div className="mt-2.5 text-xs leading-4 text-blue-500">
            +1,2% from yesterday
          </div>
        </div>
        <div className="flex flex-col flex-1 px-4 py-3 bg-purple-100 rounded-2xl border border-solid border-stone-300 border-opacity-50">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9879cef47401d6319c5974617b9e480647dd9d7244ebf5c75c50ac3aa4308256?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
            className="w-8 aspect-[1.19]"
          />
          <div className="mt-4 text-2xl font-semibold leading-8 text-indigo-950">
            39
          </div>
          <div className="mt-2.5 text-sm leading-6 text-slate-600">
            New References
          </div>
          <div className="mt-2.5 text-xs leading-4 text-blue-500">
            0,5% from yesterday
          </div>
        </div>
      </div>
    </div>
  );
}


export default insights; 