import * as React from "react";

const LoginWidget = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 text-xl font-bold text-center text-indigo-700 whitespace-nowrap shadow-lg bg-zinc-100 max-w-[869px] rounded-[90px] max-md:px-5">
      <div className="flex flex-col mt-1.5 max-w-full w-[531px]">
        <div className="self-center text-6xl max-md:text-4xl">Login</div>
        <div className="self-start mt-16 ml-2.5 tracking-wider uppercase leading-[80%] max-md:mt-10">
          Email
        </div>
        <div className="shrink-0 mt-1.5 border border-indigo-700 border-solid bg-zinc-50 bg-opacity-0 h-[67px] rounded-[70px] max-md:max-w-full" />
        <div className="self-start mt-20 ml-5 tracking-wider uppercase leading-[80%] max-md:mt-10 max-md:ml-2.5">
          PASSWORD
        </div>
        <div className="shrink-0 mt-4 border border-indigo-700 border-solid bg-zinc-50 bg-opacity-0 h-[67px] rounded-[70px] max-md:max-w-full" />
        <div className="justify-center items-start self-center px-16 py-5 mt-24 max-w-full text-2xl font-black text-white shadow-lg bg-indigo-700 bg-opacity-60 rounded-[70px] w-[222px] max-md:pr-5 max-md:pl-6 max-md:mt-10">
          SUBMIT
        </div>
      </div>
    </div>
  );
}

export default LoginWidget;


