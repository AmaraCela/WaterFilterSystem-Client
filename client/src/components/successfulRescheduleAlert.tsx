import * as React from "react";

function SuccessfulRescheduleAlert() {
  return (
    <div className="flex flex-col rounded-md border border-sky-700 border-solid shadow-2xl max-w-[332px]">
      <div className="flex flex-col justify-center p-4 w-full text-indigo-800 bg-blue-50">
        <div className="flex gap-2.5">
          <div className="flex flex-1 gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d0c86706760867d5c7a0f52c258b8bac214cf959006b807eb64901570ac615a?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div className="flex flex-col flex-1">
              <div className="text-lg font-bold">
                call rescheduled successfully!
              </div>
              <div className="mt-2 text-sm font-medium">
                You can find the call at{" "}
                <p className="underline">reserved Calls List. </p>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42ff58c694599311d2b57324d090dd24b06ff033f5f4483c952b71b98c5b1ebf?"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-2 px-4 pt-2 pb-3.5 text-base font-medium bg-blue-50">
        <button>
        <div className="justify-center px-6 py-2 text-blue-50 bg-indigo-800 rounded">
          Send me there
        </div>
        </button>

        <button>
        <div className="justify-center px-6 py-2 whitespace-nowrap bg-white rounded border border-white border-solid text-zinc-800">
          cancel
        </div>
        </button>
      </div>
    </div>
  );
}

export default SuccessfulRescheduleAlert; 
