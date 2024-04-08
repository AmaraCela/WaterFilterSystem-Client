import React from "react";
import DashboardLink from "./DashboarLink";
const profileImg = require("../assets/profileImg.png");
const calling = require("../assets/Calling.png");
const calendar = require("../assets/Calendar.png");
const chart = require("../assets/Chart.png");
const danger = require("../assets/DangerTriangle.png");
const paper = require("../assets/Paper.png");
const bookmark = require("../assets/Bookmark.png");

const DashboardSide = ({highlighted}: {highlighted: "Calls" | "Schedules" | "Statistics" | "Red List" | "Buyers" | "Collections" | "none"}) => {
    return (
        <div className="side w-1/4 flex flex-col justify-between items-center py-8 rounded-l-3xl">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Ediola Kola</p>
                <p className="main-font">Chief of Marketing</p>
            </div>

            <DashboardLink to={""} src={calling} text={"Phone Calls"} highlighted={highlighted === "Calls"}/>
            <DashboardLink to={"/schedules"} src={calendar} text={"Schedules"} highlighted={highlighted === "Schedules"}/>
            <DashboardLink to={"/statistics"} src={chart} text={"Statistics"} highlighted = {highlighted === "Statistics"} />
            <DashboardLink to={"/redlist"} src={danger} text={"Red List"} highlighted = {highlighted === "Red List"} />
            <DashboardLink to={"/buyersReferences"} src={paper} text={"Buyers and References"} highlighted = {highlighted === "Buyers"} />
            <DashboardLink to={""} src={bookmark} text={"Collections"} highlighted = {highlighted === "Collections"} />
        </div>
    );
}

export default DashboardSide;
