import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { retrieveALLSalesAgentFromServer } from'../serverUtils/serverUtils' // Adjust the import path accordingly

function AddNewMeeting() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = React.useState<string>("");
    const [selectedAgent, setSelectedAgent] = React.useState<string>("");
    const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
    const [saveClicked, setSaveClicked] = React.useState<boolean>(false);
    const [agents, setAgents] = React.useState<any[]>([]);

    React.useEffect(() => {
        retrieveALLSalesAgentFromServer().then(data => {
            if (data) {
                setAgents(data);
            }
        });
    }, []);

    const handleCancelClick = () => {
        setCancelClicked(true);
        setSaveClicked(false);
    };

    const handleSaveClick = () => {
        setSaveClicked(true);
        setCancelClicked(false);
    };

    if (saveClicked || cancelClicked) {
        return null; // Render nothing if either save or cancel is clicked
    }

    return (
        <div className="flex flex-col px-16 pt-10 mt-20 border border-solid backdrop-blur-[50px] bg-white border-black border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5" style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)', overflow: 'auto', resize: 'both' }}>
            <div className="flex self-center mt-0 text-3xl font-medium font-bold tracking-tight leading-9 text-indigo-800 max-md:max-w-full mb-10">
                Register a new meeting
            </div>

            <div className="mt-0 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Name of Client
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter name of client"
            />

            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Address of Client
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter address of client"
            />

            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Phone Number
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter phone number"
            />

<div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Sales Agent
            </div>
            <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
            >
                <option value="" disabled>Select a sales agent</option>
                {agents.map((agent, index) => (
                    <option key={index} value={agent.name}>{agent.name}</option>
                ))}
            </select>


            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Special Notes (optional)
            </div>
            <textarea
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter special notes"
            ></textarea>

            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
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
            <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px] mb-10">
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
