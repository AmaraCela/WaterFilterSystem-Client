import React, { useState, useEffect } from "react";
import RedlistAlert from "../components/completedCallAlert";
import { removeClientFromRedlist, retrieveRedListFromServer } from "../serverUtils/serverUtils";

function RedlistTable() {
    const [selectedRow, setSelectedRow] = React.useState<number | null>(null);

    const handleRowClick = (index: number) => {
        setSelectedRow(index === selectedRow ? null : index);
        if (index === selectedRow) {
            // Trigger your custom alert here
            alert("Row selected!");
        }
    };

    const [tableRows, setTableRows] = useState<any>([]);

    // Table head
    const headRow = (
        <div
        key="head"
        className={`flex gap-5 self-stretch text-xl  leading-4 border-radius-10 border-b border-solid border-zinc-200 max-w-[400px] max-md:flex-wrap bg-[#B1CCFF]`}
        style={{ width: '100%', minWidth: '100%', position: 'sticky', top: '0', zIndex: '1',  }} // Fixed positioning for the table head
        >
        <div className="flex flex-auto gap-4">
            <div className=" text-#0A265A flex flex-1 gap-2 px-4 py-3   max-md:pr-5">
            <div>Name</div>
            </div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-#0A265A">
            <div>Reason</div>
        </div>
        <div className="flex flex-auto gap-5 justify-between my-auto text-#0A265A ">
            <div>Actions</div>
        </div>
        </div>
    );

    useEffect(() => {
        retrieveRedListFromServer().then((clients) => {
            if (clients == null) {
                return;
            }

            for (let i = 0; i < clients.length; i++) {
                const referenceName = clients[i].name + " " + clients[i].surname;

                const newRow = (
                <div
                    key={i}
                    className={`flex gap-5 self-stretch text-xs leading-4 border-b border-solid border-zinc-200 max-w-[400px] max-md:flex-wrap ${selectedRow === i ? 'bg-gray-200' : ''} `}
                    onClick={() => handleRowClick(i)}
                    style={{ width: '100%', minWidth: '100%' }} // Adjust the width here
                >
                    <div className="flex flex-auto gap-4">
                    <div className="flex flex-1 gap-2 px-4 py-3 text-zinc-700 max-md:pr-5">
                        <div>{referenceName}</div>
                    </div>
                    </div>
                    <div className="flex flex-auto gap-5 justify-between my-auto text-gray-500">
                    <div>Custom Reason</div>
                    </div>
                    <div className="flex flex-auto gap-5 justify-between my-auto text-gray-500">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();

                            if (window.confirm(`Remove ${referenceName} from redlist?`)) {
                                removeClientFromRedlist(clients[i].id).then(() => {
                                    // setTableRows((prevRows: any) => prevRows.filter((row: any, index: any) => index !== i + 1));
                                    document.location.reload(); // i don't like this but for now it works
                                });
                            }

                        }}
                        style={{ backgroundColor: '#B1CCFF', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}
                    >
                        Remove
                    </button>
                    </div>
                </div>
                );

                if (i == 0) {
                    setTableRows([headRow, newRow]);
                }
                else {
                    setTableRows([...tableRows, newRow]);
                }

                console.log("now", tableRows)
            }

            if (clients.length === 0) {
                setTableRows([headRow]);
            }
        });
    }, []);

    return (
        <div className="bg-#0A265A" style={{ width: '60%',  border: '1px solid #e5e7eb', borderRadius: '10px', position: 'relative' }}>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Adjust the maxHeight as needed */}
            {tableRows}
        </div>
        </div>
    );
}

export default RedlistTable;
