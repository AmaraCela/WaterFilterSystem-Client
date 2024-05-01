function AlertRed({setShowRedAlert, handleDecline, id} : {setShowRedAlert: any, handleDecline: any, id: any}) {


  return (
    <div className="flex flex-col rounded-md border border-solid shadow-2xl max-w-[537px]"  style={{ backgroundColor: '#FFEFEF' }}>
      <div className="flex flex-col justify-center p-4 w-full text-black max-md:max-w-full">
        <div className="flex gap-2.5 max-md:flex-wrap">
          <div className="flex flex-1 gap-4 max-md:flex-wrap">
            
            <div className="flex flex-col flex-1 max-md:max-w-full">
              <div className="text-lg font-bold max-md:max-w-full" style={{ color: '#AC2734'}}>
                Are you sure you want to decline this?
              </div>
              <div className="mt-2 text-sm font-medium max-md:max-w-full" style={{ color: '#AC2734'}}>
                After removing, this entry is considered ignored.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-4 pt-2 pb-4 text-base font-medium bg-white max-md:flex-wrap max-md:pl-5"  style={{ backgroundColor: '#FFEFEF' }}>
        <button onClick={() => handleDecline(id)}>
          <div className="justify-center px-6 py-2 text-white bg-red-600 rounded max-md:px-5">
            Yes, I want to remove it.
          </div>
        </button>
        <button onClick={() => setShowRedAlert(false)}>
          <div className="justify-center px-6 py-2 whitespace-nowrap rounded border border-solid bg-gray-700 bg-opacity-10 border-gray-700 border-opacity-10 text-gray-800 max-md:px-5">
            Cancel
          </div>
        </button>
      </div>
    </div>
  );
}

export default AlertRed;
