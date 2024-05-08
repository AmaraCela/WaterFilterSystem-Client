import { useEffect, useState } from "react";
import AlertRed from "../components/alertRed";
import AlertGreen from "../components/alertGreen";
import '../styles/tableOfSales.css'
import { RootState, useAppDispatch } from "../store/store";
import { useSelector } from "react-redux";
import { approveCommission, declineCommission, getUnapprovedCommissions } from "../store/comissions/comissionsThunk";
const approve = require("../assets/approve.png");
const decline = require("../assets/decline.png");

function SalesTable() {
  const dispatch = useAppDispatch();
  const commissions = useSelector((state: RootState) => state.commission.commissions);
  const approved = useSelector((state: RootState) => state.commission.approved);
  const declined = useSelector((state: RootState) => state.commission.declined);
  const [showRedAlert, setShowRedAlert] = useState(false);
  const [showGreenAlert, setShowGreenAlert] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();
  
  useEffect(() => {
    dispatch(getUnapprovedCommissions());
  }, []);


  useEffect(() => {
    approved && dispatch(getUnapprovedCommissions());
    declined && dispatch(getUnapprovedCommissions());
  },[approved, declined]);


  const handleApproveClick = (id: number) => {
    setShowGreenAlert(true);
    setSelectedId(id);
  };

  const handleDeclineClick = (id: number) => {
    setShowRedAlert(true);
    setSelectedId(id);
  };

  const handleApprove = (commission_id: number) => {
    dispatch(approveCommission(commission_id));
    setShowGreenAlert(false);
  }

  const handleDecline = (commission_id: number) => {
    dispatch(declineCommission(commission_id));
    dispatch(getUnapprovedCommissions());
    setShowRedAlert(false);
  } 

  return (
    <div className="table-container" style={{ width: "100%", height: "70%", overflow: "auto", position: "relative", display: "flex", justifyContent: "center", alignItems:"start", marginTop:"32px", overflowY:"scroll", marginBottom:"50px"}}>
      {commissions.length === 0 && <p>
        There are no unapproved commissions.  
      </p>}
      {commissions.length > 0 && <table>
        <tbody>
          {
            commissions.map((commission) => (
              <tr key={commission.commission_id}>
                <td>
                  <div className="flex gap-5 justify-between py-4 pr-4 pl-11 rounded-xl bg-zinc-100 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">

                      <div className="flex flex-col my-auto">
                        <div className="font-semibold text-black">{commission.User.name} {commission.User.surname}</div>
                        <div className="mt-2.5 text-black text-opacity-40">
                          Commission • {new Date(commission.createdAt).getDate()}/{new Date(commission.createdAt).getMonth()}/{new Date(commission.createdAt).getFullYear()}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between my-auto text-right whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="self-start ml-4 font-semibold text-black max-md:ml-2.5">
                          {commission.amount}
                        </div>
                        <div className="mt-2.5 font-medium text-blue-700">{commission.User.role}</div>
                      </div>
                      <button onClick={() => handleApproveClick(commission.commission_id)}>
                        <img
                          loading="lazy"
                          src={approve}
                          className="shrink-0 self-start aspect-[1] w-[30px]"
                          alt="Approve Button"
                        />
                      </button>
                      <button onClick={() => handleDeclineClick(commission.commission_id)}>
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
            ))
          }
        </tbody>
      </table>}
      <div style={{ position: "absolute", top: 0 }}>
        {showRedAlert && <AlertRed setShowRedAlert={setShowRedAlert} handleDecline={handleDecline} id={selectedId} />}
        {showGreenAlert && <AlertGreen setShowGreenAlert={setShowGreenAlert} handleApprove={handleApprove} id={selectedId}/>}
      </div>
    </div>
  );
}

export default SalesTable;