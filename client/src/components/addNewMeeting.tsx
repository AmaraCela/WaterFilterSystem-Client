import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function AddNewMeeting() {
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
        <div className="flex flex-col px-20 pt-12 pb-5 border border-solid backdrop-blur-[50px] bg-white bg-opacity-30 border-black border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5">
             <div className="flex self-center mt-0 text-3xl font-medium font-bold tracking-tight leading-9 text-indigo-800 max-md:max-w-full mb-10">
                Register a new meeting
            </div>
            
            <div className="mt-0 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Name of Client
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter name of client"
            />

            <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Address of Client
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter address of client"
            />

            <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Phone Number
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter phone number"
            />

            <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Sales Agent
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter sales agent"
            />

            <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Special Notes (optional)
            </div>
            <textarea
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter special notes"
            ></textarea>

            <div className="mt-1 text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Date and Time
            </div>
            <div className="mt-3 flex gap-5 max-md:flex-col max-md:gap-0">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    className="w-full px-4 py-2 border border-black border-solid rounded-md"
                />
                <input
                    type="time"
                    value={selectedTime}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-2 border border-black border-solid rounded-md"
                />
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

export default AddNewMeeting;