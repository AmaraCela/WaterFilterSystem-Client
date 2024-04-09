import * as React from "react";
import TableRow from "./SalesAndDebts-row"; // Assuming you have this component

function SalesAndDebtsTable() {
  const data = [
    { date: "12/11/2024", id: "3961456_s", amount: "144", frequency: "monthly" },
    // Add more data as needed
  ];

  return (
    <table  style={{ padding: '30px' }}>
      <thead>
      <tr className="bg-gray-800" style={{ backgroundColor: "#DCDFE3",  fontFamily: "Poppins, sans-serif", fontSize: 20, color: "#666E7D"}}>
          <th>Date</th>
          <th>ID</th>
          <th>Amount</th>
          <th>Payment Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            date={item.date}
            id={item.id}
            amount={item.amount}
            frequency={item.frequency}
          />
        ))}
           {data.map((item, index) => (
          <TableRow
            key={index}
            date={item.date}
            id={item.id}
            amount={item.amount}
            frequency={item.frequency}
          />
        ))}
           {data.map((item, index) => (
          <TableRow
            key={index}
            date={item.date}
            id={item.id}
            amount={item.amount}
            frequency={item.frequency}
          />
        ))}
           {data.map((item, index) => (
          <TableRow
            key={index}
            date={item.date}
            id={item.id}
            amount={item.amount}
            frequency={item.frequency}
          />
        ))}
           {data.map((item, index) => (
          <TableRow
            key={index}
            date={item.date}
            id={item.id}
            amount={item.amount}
            frequency={item.frequency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default SalesAndDebtsTable;
