import React from "react";

interface TableRowProps {
  date: string;
  id: string;
  amount: string;
  frequency: string;
}

function TableRow({ date, id, amount, frequency }: TableRowProps) {
  return (
    <tr className="border-b border-gray-200 bg-white" style={{ paddingRight: '30px' }}>
      <td className="py-4 px-10">{date}</td>
      <td className="py-4 px-10">{id}</td>
      <td className="py-4 px-10 leading-7 text-indigo-800">
        {amount}
        <br />
        <span className="text-xs font-bold text-indigo-800">
          approx. {parseInt(amount) / 12}€ a month
        </span>
      </td>
      <td className="py-4 px-10 text-sm leading-5 text-gray-800">{frequency}</td>
    </tr> 
  );
}

export default TableRow;
