import InventoryTasks_row from "../components/InventoryTasks_Row";
import '../styles/scrollbarStyling.css'; 

function InventoryTasks_Table() {
    const data = [
        {
            date: "12/11/2024",
            task_desc: "filter renewal",
            task_id: "32164",
            client_name: "Sokol Gjergji",
            client_address: "Rruga “Sulejman Delvina”",
            technician_assigned: "Sabaudin Ismaili",},
             { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", },
         { date: "12/11/2024",
         task_desc: "filter renewal",
         task_id: "32164", 
         client_name: "Sokol Gjergji" ,
         client_address: "Rruga “Sulejman Delvina”",
         technician_assigned: "Sabaudin Ismaili", }
    
        // Add more data as needed
    ];
    const showScrollbar = data.length > 3;

    return (
        <div className=" overflow-x-auto  overflow-y-scroll shadow-lg rounded-3xl">
            <table className="min-w-full divide-y divide-gray-200 shadow-sm border border-gray-300 rounded-lg">
                <thead className="bg-gray-190 rounded-t-lg" style={{color: 'blue'}}>
                    <tr className="inter flex gap-5 text-blue-950 self-stretch px-6 py-4 text-sm leading-5 border-b border-solid bg-white bg-opacity-60 border-zinc-200 max-md:flex-wrap max-md:pr-5 shadow-sm" style={{color: '',opacity:'20', fontSize:'20px'}}>
                        <th className="flex-1 self-start leading-[143%]">Date</th>
                        <th className="flex-1">Tasks</th>
                        <th className="flex-1"><p>Client</p></th>
                        <th className="flex-1 rounded-tr-lg">Technician</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 rounded-b-lg">
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                    {data.map((item, index) => (
                        <InventoryTasks_row
                            key={index}
                            date={item.date}
                            task_desc={item.task_desc}
                            task_id={item.task_id}
                            client_name={item.client_name}
                            client_address={item.client_address}
                            technician_assigned={item.technician_assigned}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryTasks_Table;