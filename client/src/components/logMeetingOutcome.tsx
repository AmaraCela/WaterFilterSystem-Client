import * as React from "react";

function MeetingOutcomeForm() {
  const [selectedOutcome, setSelectedOutcome] = React.useState<string>("");

  const handleCheckboxChange = (outcome: string) => {
    setSelectedOutcome(outcome);
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
  const [saveClicked, setSaveClicked] = React.useState<boolean>(false);

  const handleCancelClick = () => {
      setCancelClicked(true);
      setSaveClicked(false);
  };

  const handleSaveClick = () => {
      setSaveClicked(true);
      setCancelClicked(false);
  };

  return (
    <div className="flex flex-col px-16 py-11 font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]">
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
  );
}

export default MeetingOutcomeForm;
