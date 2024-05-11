import * as React from "react";
interface RedlistProps {
  onClose: () => void;
}
function RedlistAlert({ onClose }: RedlistProps)  {
  return (
    <div className="flex flex-col rounded-md border border-solid shadow-2xl border-rose-800 border-opacity-20 max-w-[332px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)'}}>
      <div className="flex flex-col justify-center p-4 w-full text-rose-800 bg-rose-50">
        <div className="flex gap-2.5">
          <div className="flex flex-1 gap-4">
            
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fefc881ee22debf5d02b0f80eae80bf5e1e665085beec3eb20e6d3dec1c761e?"
              className="shrink-0 self-start w-6 aspect-square"
            /> 
            <div className="flex flex-col flex-1">
              <div className="text-lg font-bold">Redlist alert</div>
              <div className="mt-2 text-sm font-medium">
                Your call got moved to the Redlist Section.{" "}
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col justify-center items-end px-4 py-2 w-full text-base font-medium whitespace-nowrap bg-rose-50 text-zinc-800">
        <button>
         <div className="justify-center px-6 py-2 rounded border border-solid bg-rose-800 bg-opacity-20 border-rose-800 border-opacity-20">
          okay
        </div>
        </button>
      </div>
    </div>
  );
}

export default RedlistAlert; 


