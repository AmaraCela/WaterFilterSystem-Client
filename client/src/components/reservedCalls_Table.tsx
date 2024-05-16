import * as React from "react";
import RedlistAlert from "../components/completedCallAlert";

function getRandomReferenceName() {
  const names = ["John Doe", "Jane Doe", "Alice Smith", "Bob Johnson", "Emily Davis"];
  return names[Math.floor(Math.random() * names.length)];
}

function ReservedTable() {
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

  // Table head
  tableRows.push(
    <div
      key="head"
      className={`flex gap-5 self-stretch text-xl  leading-4 border-radius-10 border-b border-solid border-zinc-200 max-w-[400px] max-md:flex-wrap bg-[#B1CCFF]`}
      style={{ width: '100%', minWidth: '100%', position: 'sticky', top: '0', zIndex: '1',  }} // Fixed positioning for the table head
    >
          <div className="flex flex-auto gap-4">
        <div className=" text-#0A265A flex flex-1 gap-2 px-4 py-3   max-md:pr-5">
          <div>Time</div>
        </div>
      </div>

      <div className="flex flex-auto gap-4">
        <div className=" text-#0A265A flex flex-1 gap-2 px-4 py-3   max-md:pr-5">
          <div>Name</div>
        </div>
      </div>
      <div className="flex flex-auto gap-5 justify-between my-auto text-#0A265A">
        <div>Phone No.</div>
      </div>
      <div className="flex flex-auto gap-5 justify-between my-auto text-#0A265A ">
        <div>Status</div>
      </div>
    </div>
  );

  // Random rows
  for (let i = 0; i < numRows; i++) {
    const referenceName = getRandomReferenceName(); 
    
    tableRows.push(
      <div
        key={i}
        className={`flex gap-5 bg-white self-stretch text-xs leading-4 border-b border-solid border-zinc-200 max-w-[400px] max-md:flex-wrap ${selectedRow === i ? 'bg-gray-200' : ''} `}
        onClick={() => handleRowClick(i)}
        style={{ width: '100%', minWidth: '100%' }} // Adjust the width here
      >
         <div className="flex flex-auto gap-4">
          <div className="flex flex-1 gap-2 px-4 py-3 text-zinc-700 max-md:pr-5">
            <div>06/02/2022</div>
          </div>
        </div>
        <div className="flex flex-auto gap-4">
          <div className="flex flex-1 gap-2 px-4 py-3 text-zinc-700 max-md:pr-5">
            <div>{referenceName}</div>
          </div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-gray-500">
          <div>+355</div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-gray-500">
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Remove ${referenceName} from redlist?`);
            }}
            style={{ backgroundColor: '#B1CCFF', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
          >
            assigned by Marketing Manager
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-#0A265A" style={{ width: '60%',  border: '1px solid #e5e7eb', borderRadius: '10px', position: 'relative' }}>
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust the maxHeight as needed */}
        {tableRows}
      </div>
    </div>
  );
}

export default ReservedTable;
