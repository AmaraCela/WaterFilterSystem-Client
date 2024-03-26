import React from "react";

type PageNumberProps = {
  number: number;
  active?: boolean;
};

const PageNumber: React.FC<PageNumberProps> = ({ number, active = false }) => {
  return (
    <div
      className={`px-3 py-1 mx-1 rounded-lg cursor-pointer ${
        active ? "bg-blue-500 text-white" : "bg-blue-200 text-blue-500"
      }`}
    >
      {number}
    </div>
  );
};

export default PageNumber;
