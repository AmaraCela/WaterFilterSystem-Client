import * as React from "react";
import RedlistAlert from "../components/completedCallAlert";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { getLatestReferences } from "../store/client/clientThunks";
import { Client } from "../types/types";

function RefTableHead() {

  const dispatch = useAppDispatch();
  const references = useSelector((state: RootState) => state.client.latestReferences);
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);
  const [selectedReference, setSelectedReference] = React.useState<Client | null>(null);

  React.useEffect(() => {
    dispatch(getLatestReferences());
  }, []);


  const tableRows = [];
  if (references) for (let i = 0; i < references.length; i++) {
    tableRows.push(
      <div
        key={i}
        className={`flex text-xs leading-4 border-b border-solid border-zinc-200 max-w-[767px] max-md:flex-wrap ${selectedRow === i ? 'bg-blue-300' : ''} `}
        onClick={() => { setSelectedRow(i); setSelectedReference(references[i]) }}
        style={{ width: '100%', minWidth: '100%' }} // Adjust the width here
      >
        <div className="flex flex-1 gap-2 px-4 py-3 text-zinc-700 max-md:pr-5">
          <div className="min-w-[24%] text-center">
            {new Date(references[i].createdAt).getDate().toString().padStart(2, '0')}/
            {(new Date(references[i].createdAt).getMonth() + 1).toString().padStart(2, '0')}/
            {new Date(references[i].createdAt).getFullYear()}
          </div>
          <div className="my-auto text-gray-500 min-w-[24%] text-center">{references[i].name || '--'} {references[i].surname || '--'}</div>
          <div className="min-w-[24%] text-center">{references[i].phoneNo}</div>
          <div className="min-w-[24%] text-center">{references[i].profession || '----'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white" style={{ border: '1px solid #e5e7eb', borderRadius: '10px', position: 'relative' }}>
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust the maxHeight as needed */}
        {tableRows}
      </div>
      {selectedRow !== null && <RedlistAlert setSelectedRow={setSelectedRow} selected={selectedReference} />}
    </div>
  );
}

export default RefTableHead;