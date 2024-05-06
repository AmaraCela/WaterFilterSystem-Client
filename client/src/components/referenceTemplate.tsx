const profile = require("../assets/profileImg.png");

function RefTemplate() {
  return (
    <div style={{ backgroundColor: 'rgba(40, 211, 114, 1)', padding: '20px' }} className="ref-template-container">
      <div className="flex flex-col max-w-[516px]">
        <div className="px-10 pt-12 pb-6 w-full bg-white bg-opacity-70 rounded-[57px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center mt-2 text-xs font-bold text-green-500 whitespace-nowrap max-md:mt-10">
                <img src={profile} alt="" />
                <div className="flex gap-1 mt-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e488552d8fedbaee25007a69935505959dfabc0bbf6f9273a1697cde344b244c?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <button className="my-auto">History</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <div className="flex gap-3.5">
                  <div className="flex flex-col flex-1">
                    <div className="text-xl font-semibold text-green-500">
                      Name of reference
                    </div>
                    <div className="mt-5 text-xs text-black text-opacity-30">
                      <span className="font-bold text-green-500">ID:</span>{" "}
                      2734920
                    </div>
                  </div>
                  <div className="flex flex-1 gap-1 self-start text-xs text-green-500 items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b714157c45c9c11c48a0040b7240c21e6173200d7c79dd403db729fa308d315a?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                      className="shrink-0 self-start aspect-[0.92] w-[11px]"
                    />
                    <div className="flex-auto">
                      Referenced by{" "}
                      <span className="text-green-500 underline">Name of client</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 text-xs text-black text-opacity-30">
                  <span className="font-bold text-green-500">Address: </span>{" "}
                  Stadiumi “Qemal Stafa”
                  <br />
                </div>
                <div className="mt-8 text-xs text-black text-opacity-30">
                  <span className="font-bold text-green-500">Phone No. 1:</span>{" "}
                  04 265 4897 <br />
                  <span className="font-bold text-green-500">Phone No. 2:</span> -
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 self-center mt-16 text-xs font-bold text-emerald-500 whitespace-nowrap max-md:mt-10">
          <div className="flex flex-1 gap-1.5 self-start px-5"> 
          <img
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png"
              className="shrink-0 w-6 aspect-square"
            />
            <button className="my-auto text-white">CLOSE</button>
          </div>
          <div className="flex flex-1 gap-1.5 px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64a08a3d2787245c6df35fd3a20f0d16630d1aac8ef74831f60cd60ae79d13ab?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
              className="shrink-0 w-6 aspect-square"
            />
            <button className="my-auto text-white">SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefTemplate;
