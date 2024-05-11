import * as React from "react";
import RedlistAlert from "../components/completedCallAlert";

function getRandomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomPhoneNumber() {
  const phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  return `(${phoneNumber.toString().slice(0, 3)}) ${phoneNumber.toString().slice(3, 6)}-${phoneNumber.toString().slice(6)}`;
}

function getRandomProfession() {
  const professions = ["Doctor", "Engineer", "Teacher", "Artist", "Chef"];
  return professions[Math.floor(Math.random() * professions.length)];
}

function getRandomReferenceName() {
  const names = ["John Doe", "Jane Doe", "Alice Smith", "Bob Johnson", "Emily Davis"];
  return names[Math.floor(Math.random() * names.length)];
}

function RefTableHead() {
  const numRows = 40; // Number of random rows
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setSelectedRow(index === selectedRow ? null : index);
    if (index === selectedRow) {
      // Trigger your custom alert here
      alert("Row selected!");
    }
  };

  const tableRows = [];

  // Random rows
  for (let i = 0; i < numRows; i++) {
    const dateAdded = getRandomDate().toLocaleDateString();
    const referenceName = getRandomReferenceName();
    const phoneNumber = getRandomPhoneNumber();
    const profession = getRandomProfession();

    tableRows.push(
      <div
        key={i}
        className={`flex gap-5 self-stretch text-xs leading-4 border-b border-solid border-zinc-200 max-w-[767px] max-md:flex-wrap ${selectedRow === i ? 'bg-blue-300' : ''} `}
        onClick={() => handleRowClick(i)}
        style={{ width: '100%', minWidth: '100%' }} // Adjust the width here
      >
        <div className="flex flex-auto gap-4">
          <div className="flex flex-1 gap-2 px-4 py-3 text-zinc-700 max-md:pr-5">
            <div>{dateAdded}</div>
          </div>
          <div className="my-auto text-gray-500">{referenceName}</div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-gray-500">
          <div>{phoneNumber}</div>
          <div>{profession}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '10px', position: 'relative' }}>
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust the maxHeight as needed */}
        {tableRows}
      </div>
      {selectedRow !== null && <RedlistAlert/>}
    </div>
  );
}

export default RefTableHead;