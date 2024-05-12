import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const edit = require("../assets/edit.png");
const calendar = require("../assets/calendaar.png");

const AddMeeting = ({ onCancel }: { onCancel: () => void }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [cancelClicked, setCancelClicked] = useState<boolean>(false);
  const [saveClicked, setSaveClicked] = useState<boolean>(false);

  const handleCancelClick = () => {
    setCancelClicked(true);
    setSaveClicked(false);
    onCancel();
  };

  const handleSaveClick = () => {
    setSaveClicked(true);
    setCancelClicked(false);
  };

  return (
    <div
      className="flex flex-col px-10 pt-10 mt-4 border border-solid backdrop-blur-[50px] bg-white border-black border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5"
      style={{
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow:
          "10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
        resize: "both",
      }}
    >
      <div className="flex self-center mt-0 text-2xl font-bold tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-[30px] mr-2">
          <img loading="lazy" src={edit} alt="" className="w-4 h-4" />
        </div>
        add an express meeting
      </div>

      <div className="self-stretch text-xs italic font-semibold leading-5 max-w-[254px] text-stone-500 mt-2">
        Fill this form to register an <span className="italic">express</span>{" "}
        meeting.
      </div>

      <div className="text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-w-[170px]">
        Name of Client
      </div>
      <input
        type="text"
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
        placeholder="Enter name of client"
      />

      <div className="text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-w-[170px]">
        Address of Client
      </div>
      <input
        type="text"
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
        placeholder="Enter address of client"
      />

      <div className="text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-w-[170px]">
        Phone Number
      </div>
      <input
        type="text"
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
        placeholder="Enter phone number"
      />

      <div className="text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-w-full">
        Special Notes (optional)
      </div>

      <textarea
        className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
        placeholder="Enter special notes"
      ></textarea>

      <div className="text-2xl font-medium tracking-tight leading-9 text-indigo-800 max-w-[170px]">
        Date and Time
      </div>
      <div className="mt-3 flex gap-5 max-md:flex-col max-md:gap-0 relative">
      <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          className="w-full px-5 py-2 border border-black border-solid rounded-md"
        />
        <img
          src={calendar}
          alt=""
          className="w-4 h-4 mt-2 ml-2 cursor-pointer"
          onClick={handleCancelClick}
          style={{ position: "absolute", right: "148px", top: "20%" }}
        />
        <input
          type="time"
          value={selectedTime}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSelectedTime(e.target.value)
          }
          className="w-200 px-1 py-2 border border-black border-solid rounded-md"
        />
      </div>
      <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px] mb-10">
        <button onClick={handleCancelClick}>
          <div
            className={`justify-center px-4 py-2 bg-${
              cancelClicked ? "blue" : "white"
            } rounded border-2 border-indigo-800 border-solid max-md:px-5 hover:bg-blue-500`}
          >
            CANCEL
          </div>
        </button>
        <button onClick={handleSaveClick}>
          <div
            className={`justify-center px-4 py-2 bg-${
              saveClicked ? "blue" : "white"
            } rounded border-2 border-indigo-800 border-solid max-md:px-7 hover:bg-blue-500`}
          >
            SAVE
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddMeeting;
