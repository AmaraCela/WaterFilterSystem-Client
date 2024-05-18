import * as React from "react";

import RedlistAlert from "../components/redlistAlert"; // Import the RedlistAlert component
import "react-datepicker/dist/react-datepicker.css";
import ChangeDateOfMeeting from "./changeDateOfMeeting";

interface MeetingOutcomeFormProps {
  onClose: () => void;
}

function MeetingOutcomeForm({ onClose }: MeetingOutcomeFormProps) {
  const [selectedOutcome, setSelectedOutcome] = React.useState<string>("");
  const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
  const [saveClicked, setSaveClicked] = React.useState<boolean>(false);
  const [showChangeDateForm, setShowChangeDateForm] = React.useState<boolean>(false);
  const [showRedListAlert, setShowRedListAlert] = React.useState<boolean>(false);

  const handleCheckboxChange = (outcome: string) => {
    setSelectedOutcome(outcome);
    setShowRedListAlert(false); // Hide the Redlist alert when checkbox is changed
  };

  const handleCancelClick = () => {
    setCancelClicked(true);
    setSaveClicked(false);
    onClose();
  };

  const handleSaveClick = () => {
    setSaveClicked(true);
    setCancelClicked(false);

    if (selectedOutcome === "scheduled" || selectedOutcome === "noAnswer") {
      setShowChangeDateForm(true);
    } else if (selectedOutcome === "excessiveArgument") {
      // Delay showing the Redlist alert until after the form is closed
      setTimeout(() => {
        setShowRedListAlert(true);
      }, 0);
    } else {
      onClose();
    }
  };

  const handleCloseForm = () => {
    onClose();
    // Close the Redlist alert after the form is closed
    setShowRedListAlert(false);
  };

  const handleCloseFormRL = () => {
    onClose();
    // Close the Redlist alert after the form is closed
    setShowRedListAlert(true);
  };

  return (
    <>
      {!showChangeDateForm ? (
        <div className="flex flex-col px-16 py-11 font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)' }}>
          <div className="self-center text-3xl">This call...</div>
          <div className="flex gap-2.5 mt-16 text-2xl">
            <input
              type="checkbox"
              className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
              checked={selectedOutcome === "successful"}
              onChange={() => handleCheckboxChange("successful")}
            />
            <div className="flex-auto my-auto">was successful</div>
          </div>
          <div className="flex gap-2.5 mt-8 text-xl">
            <input
              type="checkbox"
              className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
              checked={selectedOutcome === "noAnswer"}
              onChange={() => handleCheckboxChange("noAnswer")}
            />
            <div className="flex-auto">I got no answer from referral</div>
          </div>
          <div className="flex gap-2.5 mt-8 text-xl">
            <input
              type="checkbox"
              className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
              checked={selectedOutcome === "scheduled"}
              onChange={() => handleCheckboxChange("scheduled")}
            />
            <div className="flex-auto self-start">will be scheduled for later</div>
          </div>
          <div className="flex gap-2.5 mt-8 text-xl">
            <input
              type="checkbox"
              className="shrink-0 self-start rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
              checked={selectedOutcome === "excessiveArgument"}
              onChange={() => handleCheckboxChange("excessiveArgument")}
            />
            <div className="flex-auto">involved some excessive argument</div>
          </div>
          <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px]">
            <button onClick={handleCancelClick}>
              <div className={`justify-center px-4 py-2 bg-${cancelClicked ? "blue" : "white"} rounded border-2 border-indigo-800 border-solid max-md:px-5 hover:bg-blue-500`}>
                CANCEL
              </div>
            </button>
            <button onClick={handleSaveClick}>
              <div className={`justify-center px-4 py-2 bg-${saveClicked ? "blue" : "white"} rounded border-2 border-indigo-800 border-solid max-md:px-7 hover:bg-blue-500`}>
                SAVE
              </div>
            </button>
          </div>
        </div>
      ) : (
        <ChangeDateOfMeeting onClose={handleCloseForm} />
      )}
      {showRedListAlert && <RedlistAlert onClose={handleCloseFormRL} />} {/* Render the RedlistAlert conditionally */}
    </>
  );
}

export default MeetingOutcomeForm;
