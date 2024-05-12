import React from "react";

const HistoryCalls = ({ onClose }: any) => {
    const missedCalls = [
        { name: "John Doe", number: "+123456789", time: "12:34 PM" },
        { name: "Jane Smith", number: "+987654321", time: "1:30 PM" },
        // Add more missed call items as needed
    ];

    return (
        <div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 max-w-xs" style={{ position: 'absolute', bottom: '35%', right: '10%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)'}}>
            <div className={`max-h-30 ${missedCalls.length > 5 ? 'overflow-y-auto' : ''}`}>
                <ul className="p-2 space-y-2">
                    {/* Missed call items */}
                    {missedCalls.map((call, index) => (
                        <li key={index} className="border rounded-lg p-2 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-400"></div>
                                <div className="ml-2">
                                    <p className="text-xs font-medium text-gray-900">{call.name}</p>
                                    <p className="text-xs text-gray-500">{call.number}</p>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">{call.time}</div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Cancel button */}
            <button className="mt-4 mx-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-lg" onClick={onClose}>Cancel</button>
        </div>
    );
};

export default HistoryCalls;
