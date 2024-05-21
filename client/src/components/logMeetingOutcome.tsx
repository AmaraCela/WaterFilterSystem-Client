import * as React from "react";
import ChangeDateOfMeeting from "./changeDateOfMeeting";
import RedlistAlert from "../components/redlistAlert"; // Import the RedlistAlert component
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../store/store";
import { addToRedlist, getLatestReferences, getReferences } from "../store/client/clientThunks";
import { Client } from "../types/types";
import { useSelector } from "react-redux";
import { resetAddRedlist } from "../store/client/clientSlice";

interface MeetingOutcomeFormProps {
  onClose: () => void;
  reference: Client | null
}

function MeetingOutcomeForm({ onClose, reference }: MeetingOutcomeFormProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const references = useSelector((state: RootState) => state.client.latestReferences);
  const [selectedOutcome, setSelectedOutcome] = React.useState<string>("");
  const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
  const [saveClicked, setSaveClicked] = React.useState<boolean>(false);
  const [showChangeDateForm, setShowChangeDateForm] = React.useState<boolean>(false);
  const [showRedListAlert, setShowRedListAlert] = React.useState<boolean>(false);
  const [showMeeting, setShowMeeting] = React.useState<boolean>(false); 
  const addRedlistSuccessful = useSelector((state: RootState) => state.client.addRedlistSuccessful);

  React.useEffect(() => {
    dispatch(resetAddRedlist());
    return () => {
      dispatch(resetAddRedlist());
      dispatch(getLatestReferences())
    };
  }, []);

  React.useEffect(() => {
    addRedlistSuccessful && dispatch(getLatestReferences());
  }, [addRedlistSuccessful]);


  React.useEffect(() => {
    addRedlistSuccessful && onClose();
  }, [references])
 
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
    }
    if (selectedOutcome === "successful") {
      setTimeout(() => {
        setShowRedListAlert(false);
        setShowMeeting(true);
        navigate("/viewAllMeetings"); // Redirect to Meeting.tsx
      }, 0);
      onClose();
    }
     else if (selectedOutcome === "excessiveArgument") {
      // Delay showing the Redlist alert until after the form is closed
      setTimeout(() => {
        setShowRedListAlert(true);
      }, 0);
    } else {
      navigate("/viewAllMeetings")
    }
  };

  const handleCloseForm = () => {
    onClose();
    // Close the Redlist alert after the form is closed
    setShowRedListAlert(false);
  };

  const handleCloseFormRL = () => {
    dispatch(addToRedlist(reference?.id ?? -1));
    dispatch(resetAddRedlist());
    // Close the Redlist alert after the form is closed
    setShowRedListAlert(true);
  };

  return (
    <>
      {(
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
      )}
      {showChangeDateForm && <ChangeDateOfMeeting onClose={handleCloseForm} reference={reference} />}
      {showRedListAlert && <RedlistAlert title="Redlist alert" message="Your call will be moved to the Redlist Section." onClose={handleCloseFormRL} />} {/* Render the RedlistAlert conditionally */}
    </>
  );
}

export default MeetingOutcomeForm;
