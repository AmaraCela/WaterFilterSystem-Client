import React, { useState } from "react";

type SortDropdownProps = {
  onSelect: (value: string) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("Newest");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleOptionChange}
      className="border border-gray-300 rounded px-2 py-1"
    >
      <option value="Newest">Newest</option>
      <option value="Earliest">Earliest</option>
    </select>
  );
};

export default SortDropdown;
