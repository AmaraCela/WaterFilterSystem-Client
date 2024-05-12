// ChangeDateOfMeeting.tsx

import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ChangeDateOfMeetingProps {
  onClose: () => void;
}

const ChangeDateOfMeeting: React.FC<ChangeDateOfMeetingProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string>("");

  const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
  const [saveClicked, setSaveClicked] = React.useState<boolean>(false);

  const handleCancelClick = () => {
    setCancelClicked(true);
    setSaveClicked(false);
    onClose();
  };

  const handleSaveClick = () => {
    setSaveClicked(true);
    setCancelClicked(false);
  };

  return (
    <div className="flex flex-col items-center px-20 py-12 text-xl font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div className="text-2xl text-center">Reschedule call</div>
      <div className="mt-8 font-semibold text-center">Date</div>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl"
      />
      <div className="mt-8 font-semibold text-center">Time</div>
      <input
        type="time"
        value={selectedTime}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedTime(e.target.value)}
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl"
      />
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

export default ChangeDateOfMeeting;
