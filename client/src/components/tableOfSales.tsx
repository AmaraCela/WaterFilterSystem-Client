import React, { useEffect, useState } from "react";
import AlertRed from "../components/alertRed";
import AlertGreen from "../components/alertGreen";
import { getUnapprovedSales } from "../store/sales/saleThunks";
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
const approve = require("../assets/approve.png");
const decline = require("../assets/decline.png");
const mastercard = require("../assets/mastercard.png");


function SalesTable() {
  const dispatch = useAppDispatch();
  const unapprovedSales = useSelector((state: RootState) => state.sale.unapprovedSales);
  const [showRedAlert, setShowRedAlert] = useState(false);
  const [showGreenAlert, setShowGreenAlert] = useState(false);

  const handleApprove = () => {

  }

  const handleDecline = () => {

  }
  // Function to handle approve button click
  const handleApproveClick = () => {
    setShowGreenAlert(true);
  };

  // Function to handle decline button click
  const handleDeclineClick = () => {
    setShowRedAlert(true);
  };

  useEffect(() => {
    dispatch(getUnapprovedSales());

  }, []);


  return (
    <div className="table-container" style={{ width: "776px", height: "607px", overflow: "auto", position: "relative", display: "flex", justifyContent: "center" }}>
      <table>
        <tbody>
          {unapprovedSales.map((sale) => (
            <tr key={sale.id}>
              <td>
                <div className="flex gap-5 justify-between py-4 pr-4 pl-11 rounded-xl bg-zinc-100 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-between">
                    <img
                      loading="lazy"
                      src={mastercard}
                      className="shrink-0 aspect-[1.27] w-[63px]"
                      alt="Mastercard Logo"
                    />
                    <div className="flex flex-col my-auto">
                      <div className="font-semibold text-black">{sale.SalesAgent?.User.name} {sale.SalesAgent?.User.surname}</div>
                      <div className="mt-2.5 text-black text-opacity-40">
                        {sale.monthlyPayment ? 'Monthly payment' : 'Full payment'} • {sale.time && new Date(sale.time).getDate()}/{sale.time && new Date(sale.time).getMonth()}/{sale.time && new Date(sale.time).getFullYear()}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between my-auto text-right whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="self-start ml-4 font-semibold text-black max-md:ml-2.5">
                        {sale.price}
                      </div>
                      <div className="mt-2.5 font-medium text-blue-700">Pending</div>
                    </div>
                    <button onClick={handleApproveClick}>
                      <img
                        loading="lazy"
                        src={approve}
                        className="shrink-0 self-start aspect-[1] w-[30px]"
                        alt="Approve Button"
                      />
                    </button>
                    <button onClick={handleDeclineClick}>
                      <img
                        loading="lazy"
                        src={decline}
                        className="shrink-0 self-start aspect-[1] w-[30px]"
                        alt="Decline Button"
                      />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ position: "absolute", top: 0 }}>
        {showRedAlert && <AlertRed setShowRedAlert={setShowRedAlert} handleDecline={handleDecline} id={1}/>}
        {showGreenAlert && <AlertGreen setShowGreenAlert={setShowGreenAlert} handleApprove={handleApprove} id={1}/>}
      </div>
    </div>
  );
}

export default SalesTable;