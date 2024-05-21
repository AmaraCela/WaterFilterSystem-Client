import React, { useState, useEffect } from "react";
import { retrieveCallInfoFromServer } from "../serverUtils/serverUtils";

const HistoryCalls = ({ onClose, callHistory}: any) => {
    const [tableRows, setTableRows] = useState<any>([]);
    useEffect(() => {
        for (let i = 0; i < callHistory.length; i++) {
            retrieveCallInfoFromServer(callHistory[i]).then((callInfo) => {
                if (callInfo == null) {
                    return;
                }

                const referenceName = callInfo.clientFullName;
                // phone agent is not supposed to see numbers from past calls
                // const referenceNumber = callInfo.clientNumber;
                const scheduledTime = callInfo.scheduledTime.substring(0, 10);

                const newRow = (
                    <li key={i} className="border rounded-lg p-2 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-400"></div>
                            <div className="ml-2">
                                <p className="text-xs font-medium text-gray-900">{referenceName}</p>
                                {/* <p className="text-xs text-gray-500">{referenceNumber}</p> */}
                            </div>
                        </div>
                        <div className="text-xs text-gray-500">{scheduledTime}</div>
                    </li>
                );

                setTableRows([...tableRows, newRow]);
            });
        }

    }, []);

    return (
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 max-w-xs" style={{ position: 'absolute', bottom: '35%', right: '10%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)'}}>
            <div className={`max-h-30 ${callHistory.length > 5 ? 'overflow-y-auto' : ''}`}>
                <ul className="p-2 space-y-2">
                    {tableRows}
                </ul>
            </div>
            {/* Cancel button */}
            <button className="mt-4 mb-4  mx-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-lg" onClick={onClose}>Cancel</button>
        </div>
    );
};

export default HistoryCalls;