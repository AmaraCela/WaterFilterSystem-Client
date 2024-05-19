import TableRow from "./SalesAndDebts-row";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getSales } from "../store/sales/saleThunks";
import { getDebts } from "../store/debts/debtsThunk";
import '../styles/scrollbarStyling.css'; 

function SalesAndDebtsTable() {
  const dispatch = useAppDispatch();

  const debts = useSelector((state: RootState) => state.debt.debts);
  const sales = useSelector((state: RootState) => state.sale.sales);

  useEffect(() => {
    dispatch(getDebts());
    dispatch(getSales(null));
  }, []);

  return (
    <div style={{ padding: '30px', border: '0.5px solid #ccc',borderRadius:'15px', overflow: 'auto' , backgroundColor:'white'}}>
      <table style={{ width: '100%' , borderRadius:'15px' }}>
        <thead>
          <tr className="bg-blue-100" style={{ backgroundColor: "#DCDFE3", fontFamily: "Poppins, sans-serif", fontSize: 20, color: "#666E7D" , borderRadius:'15px'}}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Date</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Amount</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Payment Type</th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debt) => (
            <TableRow
              key={debt.sale}
              date={debt.nextPayment}
              id={debt.sale.toString()}
              amount={debt.amountToCollect.toString()}
              frequency={'Monthly'}
            />
          ))}
          {sales.map((sale) => (
            <TableRow
              key={sale.sale_id}
              date={sale.time ?? ''}
              id={sale.sale_id?.toString() ?? '1'}
              amount={sale.price.toString()}
              frequency={'One-time'}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
  // return (
  //   <table style={{ padding: '30px' }}>
  //     <thead>
  //       <tr className="bg-gray-800" style={{ backgroundColor: "#DCDFE3", fontFamily: "Poppins, sans-serif", fontSize: 20, color: "#666E7D" }}>
  //         <th>Date</th>
  //         <th>ID</th>
  //         <th>Amount</th>
  //         <th>Payment Type</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {debts.map((debt) => (
  //         <TableRow
  //           key={debt.sale}
  //           date={debt.nextPayment}
  //           id={debt.sale.toString()}
  //           amount={debt.amountToCollect.toString()}
  //           frequency={'Monthly'}
  //         />
  //       ))}
  //       {sales.map((sale) => (
  //         <TableRow
  //           key={sale.sale_id}
  //           date={sale.time ?? ''}
  //           id={sale.sale_id?.toString() ?? '1'}
  //           amount={sale.price.toString()}
  //           frequency={'One-time'}
  //         />
  //       ))}
  //     </tbody>
  //   </table>
  // );
}

export default SalesAndDebtsTable;
