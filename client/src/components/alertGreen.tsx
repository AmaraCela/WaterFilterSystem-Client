
const cross = require("../assets/cross.png")

function AlertGreen({setShowGreenAlert, handleApprove, id} : {setShowGreenAlert: any, handleApprove: any, id: any}) {
    return (
        <div className="flex flex-col rounded-md border border-solid shadow-2xl max-w-[537px]">
          <div className="flex flex-col justify-center p-4 w-full text-emerald-600 bg-blue-50 max-md:max-w-full">
            <div className="flex gap-2.5 max-md:flex-wrap">
              <div className="flex flex-1 gap-4 max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/610892b04c58cc603c8ac39ccab3d022c5986e02d2c3f7cd435715d29cba510f?apiKey=d6efad90cacc4848892dbd797b3ebb63&"
                  className="shrink-0 self-start w-6 aspect-square"
                />
                <div className="flex flex-col flex-1 max-md:max-w-full">
                  <div className="text-lg font-bold max-md:max-w-full">
                    Are you sure you want to approve it?
                  </div>
                  <div className="mt-2 text-sm font-medium max-md:max-w-full">
                    After approving, this entry will be removed from the list.{" "}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="flex gap-2 px-4 pt-2 pb-4 text-base font-medium bg-blue-50 max-md:flex-wrap max-md:pl-5">
            <button onClick={() => handleApprove(id)}>
              <div className="justify-center px-6 py-2 text-blue-50 bg-emerald-600 rounded max-md:px-5">
              Yes, I approve it.
            </div>  
            </button>
            <button onClick={() => setShowGreenAlert(false)}>
                <div className="justify-center px-6 py-2 whitespace-nowrap rounded border border-solid bg-sky-700 bg-opacity-10 border-sky-700 border-opacity-10 text-zinc-800 max-md:px-5">
              cancel
            </div> 
            </button>
           
          </div>
        </div>
      );
}

export default AlertGreen; 
