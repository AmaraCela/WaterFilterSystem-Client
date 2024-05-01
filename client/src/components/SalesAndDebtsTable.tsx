import TableRow from "./SalesAndDebts-row";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getSales } from "../store/sales/saleThunks";
import { getDebts } from "../store/debts/debtsThunk";

function SalesAndDebtsTable() {
  const dispatch = useAppDispatch();
  const debts = useSelector((state: RootState) => state.debt.debts);
  const sales = useSelector((state: RootState) => state.sale.sales);

  useEffect(() => {
    dispatch(getDebts());
    dispatch(getSales(null));
  }, []);

  return (
    <table style={{ padding: '30px' }}>
      <thead>
        <tr className="bg-gray-800" style={{ backgroundColor: "#DCDFE3", fontFamily: "Poppins, sans-serif", fontSize: 20, color: "#666E7D" }}>
          <th>Date</th>
          <th>ID</th>
          <th>Amount</th>
          <th>Payment Type</th>
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
            key={sale.id}
            date={sale.time ?? ''}
            id={sale.id.toString()}
            amount={sale.price.toString()}
            frequency={'One-time'}
          />
        ))}
      </tbody>
    </table>
  );
}

export default SalesAndDebtsTable;
