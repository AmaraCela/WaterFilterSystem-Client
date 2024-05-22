import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { Meeting } from "../types/types";
import { useAppDispatch } from "../store/store";
import { updateMeeting } from "../store/meetings/meetingsThunk";

const RescheduleMeetings = ({ meeting, onCancel }: { meeting: Meeting, onCancel: any }) => {
    const dispatch = useAppDispatch();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    return (
        <div className="flex flex-col items-center px-20 py-12 text-xl font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="text-2xl text-center">Reschedule meeting</div>
            <div className="mt-8 font-semibold text-center">Date</div>
            <DatePicker
                selected={selectedDate}
                minDate={new Date()}
                onChange={(date: Date | null) => { setSelectedDate(date); }}
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl"
            />
            {buttonClicked && !selectedDate && <p>You must select a date.</p>}
            <div className="mt-8 font-semibold text-center">Time</div>
            <input
                type="time"
                value={selectedTime}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSelectedTime(e.target.value) }}
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl"
            />
            {buttonClicked && !selectedTime && <p>You must select a time.</p>}
            <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px]">
                <button onClick={() => onCancel()}>
                    <div className={`justify-center px-4 py-2 rounded border-2 border-indigo-800 border-solid max-md:px-5 hover:bg-blue-500`}>
                        CANCEL
                    </div>
                </button>
                <button onClick={() => {
                    setButtonClicked(true);
                    if (selectedDate && selectedTime) {
                        let newDate = new Date(selectedDate);
                        let hours = selectedTime.split(":")[0];
                        let minutes = selectedTime.split(":")[1];
                        newDate.setHours(parseInt(hours));
                        newDate.setMinutes(parseInt(minutes));
                        let newMeeting = {...meeting, time:newDate.toISOString()};
                        dispatch(updateMeeting(newMeeting));
                    }
                   
                }}>
                    <div className={`justify-center px-4 py-2 rounded border-2 border-indigo-800 border-solid max-md:px-7 hover:bg-blue-500`}>
                        SAVE
                    </div>
                </button>
            </div>
        </div>
    );
}

export default RescheduleMeetings;