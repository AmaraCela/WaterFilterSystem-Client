import * as React from "react";

interface TableRowProps {
    date: string;
    task_desc: string;
    task_id: string;
    client_name: string;
    client_address: string; 
    technician_assigned: string;
  }

function InventoryTasks_row({date, task_desc, task_id, client_address, client_name, technician_assigned}: TableRowProps) {
  return (
    <div className="flex gap-5 self-stretch px-6 py-4 text-sm leading-5 border-b border-solid bg-white border-zinc-200 text-zinc-700 max-md:flex-wrap max-md:pr-5">
      <div className="flex-1 self-start leading-[143%]">{date}</div>
      <div className="flex-1">
        {task_desc} <br />
        Task #{task_id}
      </div>
      <div className="flex-1">
        <span className="underline">{client_name}</span>
        <br />
        <span className="text-xs">{client_address}</span>
      </div>
      <div className="self-start px-2 pt-0.5 pb-1 text-xs leading-4 rounded">
        {technician_assigned}{" "}
      </div>
    </div>
  );
}

export default InventoryTasks_row ; 


