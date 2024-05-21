import React, { useState } from "react";
import "../styles/dashboardSide_chiefOfOperations.css";
import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const home = require("../assets/Shop_duotone@3x.png");
const paper = require("../assets/Paper.png");
const calendar_add = require("../assets/Calendar_add_duotone.png");
const basket = require("../assets/Basket_alt_3_duotone.png");
const check = require("../assets/Done_ring_round_duotone.png");
const card = require("../assets/Credit card_duotone@3x.png");
const notebook = require("../assets/notebook_duotone.png");
const settings = require("../assets/Setting_fill@3x.png");

const DashboardSide_ChiefOfOperations = () => {
    const [salesOpen, setSalesOpen] = useState(false);
    const [inventoryOpen, setInventoryOpen] = useState(false);
    const [salesBold, setSalesBold] = useState(false);
    const [inventoryBold, setInventoryBold] = useState(false);

    const toggleSales = () => {
        setSalesOpen(!salesOpen);
        setSalesBold(!salesBold);
        // setInventoryOpen(false); // Close inventory submenu when sales is clicked
        setInventoryBold(false); // Remove bold from inventory title when sales is clicked
    };

    const toggleInventory = () => {
        setInventoryOpen(!inventoryOpen);
        setInventoryBold(!inventoryBold);
        // setSalesOpen(false); // Close sales submenu when inventory is clicked
        setSalesBold(false); // Remove bold from sales title when inventory is clicked
    };

    return (
        <div className="side w-1/3 h-full flex flex-col justify-between items-center py-6 rounded-3xl" style={{ background: "white" }}>
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Ledjona Ago</p>
                <p className="main-font">Chief of Operations</p>
            </div>
            <div onClick={toggleSales}>
                <DashboardLink to={""} src={basket} text={"Sales and commissions"} highlighted={salesBold} />
                {salesOpen && (
                    <div className="dashboard-section">
                        <DashboardLink to={"/sales-to-approve"} src={check} text={"     Sales to approve"} highlighted={false} />
                        <DashboardLink to={"/commissions"} src={card} text={"     Agent Commissions"} highlighted={false} />
                        <DashboardLink to={"/salesdebts"} src={notebook} text={"     List of Sales and Debts"} highlighted={false} />
                    </div>
                )}
            </div>
            <div onClick={toggleInventory}>
                <DashboardLink to={""} src={home} text={"Inventory"} highlighted={inventoryBold} />
                {inventoryOpen && (
                    <div className="dashboard-section">
                        <DashboardLink to={"/tasks"} src={paper} text={"     List of Tasks"} highlighted={false} />
                        <DashboardLink to={"/assignTask"} src={calendar_add} text={"     Assign a new task"} highlighted={false} />
                        <DashboardLink to={""} src={settings} text={"     Office inventory and approval"} highlighted={false} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardSide_ChiefOfOperations;