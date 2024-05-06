import InventoryTasks_row from "../components/InventoryTasks_Row";
import Inventory_Note from "../components/Inventory_Note";
function InventoryTasks_Table(){

    const data = [
        { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", 
    }
        // Add more data as needed
      ];

      return (
        <div>
        <table  style={{ padding: '30px' , marginLeft: '30px' , marginTop: '30px' }}>
          <thead>
          <tr className="flex gap-5 self-stretch px-6 py-4 text-sm leading-5 border-b border-solid bg-blue-600 bg-opacity-10 border-zinc-200 text-zinc-700 max-md:flex-wrap max-md:pr-5 shadow-sm max-w-[609px]" style={{ backgroundColor: "#DCDFE3",  fontFamily: "Poppins, sans-serif", fontSize: 20, color: "#666E7D"}}>
              <th className="flex-1 self-start leading-[143%] ">Date</th>
              <th className="flex-1">Tasks</th>
              <th className="flex-1">
                <p className="">Client</p>
                </th>
              <th>Technician</th> 
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
                {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
                {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
                {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
                {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
                {data.map((item, index) => (
              <InventoryTasks_row
                key={index}
                date={item.date}
                task_desc = {item.task_id}
                task_id={item.task_id}
                client_name={item.client_name}
                client_address = {item.client_address}
                technician_assigned={item.technician_assigned}
              />
            ))}
        
          </tbody>
        </table>
       </div>
      );
}

export default InventoryTasks_Table;
