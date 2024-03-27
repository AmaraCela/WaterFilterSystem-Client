import * as React from "react";

export function MyComponent() {
  return (
    <div className="flex flex-col max-w-[901px]">
      <div className="flex gap-5 items-start max-md:flex-wrap">
        <div className="flex flex-col px-5 mt-4 text-base leading-4 text-center whitespace-nowrap text-zinc-400">
          <div>09:00</div>
          <div className="mt-10">10:00</div>
          <div className="mt-9">11:00</div>
          <div className="mt-10">12:00</div>
          <div className="mt-9">13:00</div>
          <div className="mt-8">14:00</div>
        </div>
        <div className="flex flex-col grow shrink-0 text-xs font-medium text-indigo-500 basis-0 w-fit max-md:max-w-full">
          <div className="flex gap-0 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="shrink-0 self-start h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
            <div className="flex flex-col justify-center px-2 bg-green-400 rounded-md">
              <div className="flex flex-col px-3.5 pt-3.5 pb-1.5 w-full bg-indigo-50 rounded-none">
                <div className="leading-[133%]">Drita Mendiku</div>
                <div className="mt-4 leading-4 underline text-stone-500">
                  Client:{" "}
                  <span className="underline text-stone-500">Erion Lama</span>
                </div>
                <div className="flex gap-2 mt-4 text-xs leading-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5da2da906cc5e8cea53c449a7d484b07eacbce0c6d9a8a11878247b8350a456?"
                    className="shrink-0 w-3 aspect-[0.93] fill-indigo-500"
                  />
                  <div className="my-auto">09:00 - 10:30</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shrink-0 mt-2 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <div className="flex flex-col ml-28 max-w-full w-[313px] max-md:ml-2.5">
            <div className="flex flex-col justify-center px-2 bg-orange-400 rounded-md">
              <div className="flex flex-col px-3.5 py-1.5 w-full bg-indigo-50 rounded-none">
                <div className="leading-[133%]">Entela Sukaj</div>
                <div className="leading-4 underline text-stone-500">
                  Client: <span className="underline">Aferdita Ziu</span>
                </div>
                <div className="flex gap-1.5 self-center mt-2 text-xs leading-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7b466563cb2c3aa46adccf99d71fdca49470d5f61a26001397d145f240cac8?"
                    className="shrink-0 self-start aspect-[1.85] fill-indigo-500 w-[13px]"
                  />
                  <div className="flex-auto">11:00 - 12:30</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex flex-col flex-1 justify-center px-2 bg-red-400 rounded-md">
                <div className="flex flex-col items-start px-3.5 py-1 w-full bg-indigo-50 rounded-none max-md:pr-5">
                  <div className="leading-[133%]">Rediola Bezati</div>
                  <div className="leading-4 underline text-stone-500">
                    Client: <span className="underline">Sara Nataj</span>
                  </div>
                  <div className="flex gap-1.5 mt-1 text-xs leading-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a860f55fbcbd77dff60533ee65719b45cb6ffb14f44ed669a621c92cd1c2d6c3?"
                      className="shrink-0 self-start aspect-[2.17] fill-indigo-500 w-[13px]"
                    />
                    <div>11:00 - 12:30</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 justify-center px-2 mt-5 bg-green-400 rounded-md">
                <div className="flex flex-col pt-3.5 pr-1 pb-1.5 pl-3.5 w-full bg-indigo-50 rounded-none">
                  <div className="leading-[133%]">Flora Baze</div>
                  <div className="mt-4 leading-4 underline text-stone-500">
                    Client:{" "}
                    <span className="underline text-stone-500">
                      Artemida Luzi
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4 text-xs leading-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5da2da906cc5e8cea53c449a7d484b07eacbce0c6d9a8a11878247b8350a456?"
                      className="shrink-0 w-3 aspect-[0.93] fill-indigo-500"
                    />
                    <div className="flex-auto my-auto">09:00 - 10:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col px-5 my-auto text-base leading-4 text-center whitespace-nowrap text-zinc-400">
          <div>15:00</div>
          <div className="mt-9">16:00</div>
        </div>
        <div className="flex flex-col grow shrink-0 text-xs font-medium text-indigo-500 basis-0 w-fit max-md:max-w-full">
          <div className="shrink-0 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <div className="flex gap-3 self-start mt-1.5 ml-28 max-md:ml-2.5">
            <div className="flex flex-col flex-1 justify-center px-2 bg-green-400 rounded-md">
              <div className="flex flex-col pt-3.5 pr-1 pb-1.5 pl-3.5 w-full bg-indigo-50 rounded-none">
                <div className="leading-[133%]">Flora Baze</div>
                <div className="mt-4 leading-4 underline text-stone-500">
                  Client:{" "}
                  <span className="underline text-stone-500">
                    Artemida Luzi
                  </span>
                </div>
                <div className="flex gap-2 mt-4 text-xs leading-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5da2da906cc5e8cea53c449a7d484b07eacbce0c6d9a8a11878247b8350a456?"
                    className="shrink-0 w-3 aspect-[0.93] fill-indigo-500"
                  />
                  <div className="flex-auto my-auto">15:00 - 16:30</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center px-2 bg-indigo-500 rounded-md">
              <div className="flex flex-col px-3.5 pt-3.5 pb-1.5 w-full bg-indigo-50 rounded-none">
                <div className="leading-[133%]">Xhesi Koci</div>
                <div className="mt-4 leading-4 underline text-stone-500">
                  Client:{" "}
                  <span className="underline text-stone-500">Bashkim Lani</span>
                </div>
                <div className="flex gap-2 mt-4 text-xs leading-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5da2da906cc5e8cea53c449a7d484b07eacbce0c6d9a8a11878247b8350a456?"
                    className="shrink-0 w-3 aspect-[0.93] fill-indigo-500"
                  />
                  <div className="flex-auto my-auto">15:00 - 16:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 self-end max-w-full h-px border border-solid bg-zinc-300 border-zinc-300 w-[828px]" />
      <div className="flex gap-5 items-start mt-6 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col self-start px-5 text-base leading-4 text-center whitespace-nowrap text-zinc-400">
          <div>17:00</div>
          <div className="mt-8">18:00</div>
        </div>
        <div className="flex flex-col grow shrink-0 self-end mt-6 basis-0 w-fit max-md:max-w-full">
          <div className="shrink-0 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <div className="shrink-0 mt-12 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
}

