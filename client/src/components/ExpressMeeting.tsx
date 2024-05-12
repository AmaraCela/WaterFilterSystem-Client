import React from "react";
import AddMeeting from "../components/AddMeeting";

const ExpressMeeting = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="justify-center px-6 py-4 text-lg font-bold text-center text-white rounded-xl bg-blue-950"
      onClick={onClick}
    >
      + express meeting
    </button>
  );
};

export default ExpressMeeting;
