// ChangeDateOfMeeting.tsx

import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Client } from "../types/types";
import { RootState, useAppDispatch } from "../store/store";
import { addCall } from "../store/calls/callsThunk";
import { editClient, getLatestReferences } from "../store/client/clientThunks";
import { useSelector } from "react-redux";
import { resetReferences } from "../store/client/clientSlice";
import { resetState } from "../store/calls/callsSlice";

interface ChangeDateOfMeetingProps {
  onClose: () => void;
  reference: Client | null;
}

interface CallInputs {
  clientId: number;
  phoneOperatorId: number;
  scheduledTime: Date | null;
}

const ChangeDateOfMeeting: React.FC<ChangeDateOfMeetingProps> = ({ onClose, reference }) => {
  const dispatch = useAppDispatch();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [ref, setRef] = React.useState<Client | null>(reference && {...reference});
  const addCallSuccessful = useSelector((state: RootState) => state.call.addCallSuccessful);
  const editSuccessful = useSelector((state: RootState) => state.client.clientToEdit);

  //------------------------------------------------- to do ---------------------------------------
  //use logged in operator id
  const [inputs, setInputs] = React.useState<CallInputs>({
    clientId: reference?.id ?? -1,
    phoneOperatorId: 5,
    scheduledTime: null,
  })

  const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
  const [saveClicked, setSaveClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(resetReferences());
    dispatch(resetState());
  }, []);

  React.useEffect(() => {
    let date = inputs.scheduledTime;
    if (selectedDate) {
      date = new Date(selectedDate);
    }
    if (selectedTime) {
      let hours = selectedTime.split(":")[0];
      let minutes = selectedTime.split(":")[1];
      date?.setHours(parseInt(hours));
      date?.setMinutes(parseInt(minutes));
    }

    setInputs({ ...inputs, scheduledTime: date });
  
    if (ref) {
      setRef(() => ({...ref, nextContactDate: date?.toISOString(), lastCallDate: new Date().toISOString()}))
    }
  }, [selectedDate, selectedTime]);

  React.useEffect(() => {
    addCallSuccessful && editSuccessful && handleCancelClick();
  }, [addCallSuccessful, editSuccessful])

  const handleCancelClick = () => {
    dispatch(resetReferences());
    dispatch(getLatestReferences());
    dispatch(resetState());
    setCancelClicked(true);
    setSaveClicked(false);
    onClose();
  };

  const handleSaveClick = () => {
    dispatch(addCall(inputs));
    ref && dispatch(editClient(ref))
    setSaveClicked(true);
    setCancelClicked(false);
  };

  return (
    <div className="flex flex-col items-center px-20 py-12 text-xl font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div className="text-2xl text-center">Reschedule call</div>
      <div className="mt-8 font-semibold text-center">Date</div>
      <DatePicker
        selected={selectedDate}
        minDate={new Date()}
        onChange={(date: Date | null) => { setSelectedDate(date); }}
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl"
      />
      <div className="mt-8 font-semibold text-center">Time</div>
      <input
        type="time"
        value={selectedTime}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSelectedTime(e.target.value) }}
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
