import * as React from "react";

interface RedlistProps {
  title: string;
  message: string;
  onClose: () => void;
}

function RedlistAlert({ title, message, onClose }: RedlistProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative flex flex-col rounded-md border border-solid shadow-2xl border-rose-800 border-opacity-20 max-w-[332px] bg-white">
        <div className="flex flex-col justify-center p-4 w-full text-rose-800 bg-rose-50">
          <div className="flex gap-2.5">
            <div className="flex flex-1 gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fefc881ee22debf5d02b0f80eae80bf5e1e665085beec3eb20e6d3dec1c761e?"
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div className="flex flex-col flex-1">
                <div className="text-lg font-bold">{title}</div>
                <div className="mt-2 text-sm font-medium">
                  {message}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-end px-4 py-2 w-full text-base font-medium whitespace-nowrap bg-rose-50 text-zinc-800">
          <button
            onClick={onClose}
            className="justify-center px-6 py-2 rounded border border-solid bg-rose-800 bg-opacity-20 border-rose-800 border-opacity-20"
          >
            okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default RedlistAlert;
