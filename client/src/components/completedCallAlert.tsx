import * as React from "react";
import MeetingOutcomeForm from "./logMeetingOutcome"; // Import your other custom component here
function CompletedCall() {
  const [showMeetingOutcomeForm, setShowMeetingOutcomeForm] = React.useState(false);
  const [showCompletedCall, setShowCompletedCall] = React.useState(true);

  const handleLogOutcomesClick = () => {
    // Logic to handle click on "Log Outcomes" button
    setShowMeetingOutcomeForm(true);
    setShowCompletedCall(false);
  };

  const handleCancelClick = () => {
    // Logic to handle click on "Cancel" button
    setShowMeetingOutcomeForm(false);
    setShowCompletedCall(false);
  };

  return (
    <>
      {showCompletedCall && (
        <div className="flex flex-col rounded-md border border-solid max-w-[332px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="flex flex-col justify-center p-4 w-full text-blue-800 bg-blue-50">
            <div className="flex gap-2.5">
              <div className="flex flex-1 gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fefc881ee22debf5d02b0f80eae80bf5e1e665085beec3eb20e6d3dec1c761e?"
                  className="shrink-0 self-start w-6 aspect-square"
                  alt=""
                /> 
                <div className="flex flex-col flex-1">
                  <div className="text-lg font-bold">Is call with referral Jacob Jones (Manager) completed?</div>
                  <div className="mt-2 text-sm font-medium">
                    After a call completes, you should log the outcome of the call. The phone number becomes invisible.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-10 px-4 py-2 w-full text-base font-medium whitespace-nowrap bg-blue-50 text-zinc-800">
            <button onClick={handleLogOutcomesClick}>
              <div className="justify-center px-6 py-2 rounded border border-solid bg-blue-800 bg-opacity-20 border-blue-800 border-opacity-20 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                Log Outcomes
              </div>
            </button>
            <button onClick={handleCancelClick}>
              <div className="justify-center px-6 py-2 rounded border border-solid bg-blue-800 bg-opacity-20 border-blue-800 border-opacity-20 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                Cancel
              </div>
            </button>
          </div>
        </div>
      )}
    {showMeetingOutcomeForm && <MeetingOutcomeForm onClose={() => {}} />}
    </>
  );
}

export default CompletedCall;
