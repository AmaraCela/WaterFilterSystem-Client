import React, { useState } from "react";
import AlertRed from "../components/alertRed";
import AlertGreen from "../components/alertGreen";
import '../styles/tableOfSales.css'
const approve = require("../assets/approve.png");
const decline = require("../assets/decline.png");
const mastercard = require("../assets/mastercard.png");

function generateRandomName() {
  const firstNames = ["John", "Alice", "Michael", "Emma", "James"];
  const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  return `${firstNames[randomFirstNameIndex]} ${lastNames[randomLastNameIndex]}`;
}

function SalesTable() {
  const [showRedAlert, setShowRedAlert] = useState(false);
  const [showGreenAlert, setShowGreenAlert] = useState(false);

  // Function to handle approve button click
  const handleApproveClick = () => {
    setShowGreenAlert(true);
  };

  // Function to handle decline button click
  const handleDeclineClick = () => {
    setShowRedAlert(true);
  };

  // Generate 10 random entries for the table
  const rows = [];
  for (let i = 0; i < 10; i++) {
    const name = generateRandomName();
    const amount = 1000;
    const date = "14/10/2024";
    const userType = "Phone Agent"

    rows.push(
      <tr key={i}>
        <td>
          <div className="flex gap-5 justify-between py-4 pr-4 pl-11 rounded-xl bg-zinc-100 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              
              <div className="flex flex-col my-auto">
                <div className="font-semibold text-black">{name}</div>
                <div className="mt-2.5 text-black text-opacity-40">
                  Commission • {date}
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between my-auto text-right whitespace-nowrap">
              <div className="flex flex-col">
                <div className="self-start ml-4 font-semibold text-black max-md:ml-2.5">
                  {amount}
                </div>
                <div className="mt-2.5 font-medium text-blue-700">{userType}</div>
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
    );
  }

  return (
    <div className="table-container" style={{ width: "776px", height: "800px", overflow: "auto", position: "relative", display: "flex", justifyContent: "center" }}>
      <table>
        <tbody>{rows}</tbody>
      </table>
      <div style={{ position: "absolute", top: 0 }}>
        {showRedAlert && <AlertRed />}
        {showGreenAlert && <AlertGreen />}
      </div>
    </div>
  );
}

export default SalesTable;