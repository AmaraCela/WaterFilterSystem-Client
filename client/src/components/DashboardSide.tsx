import React from "react";

const DashboardSide = () => {
    return (
        <div className="side w-1/3 h-full flex flex-col justify-between items-center py-8 rounded-3xl">
            <div className="w-full flex flex-col justify-center items-center">
                <img src={profileImg} alt="Profile" className="w-28" />
                <p className="main-font font-bold mt-2">Ediola Kola</p>
                <p className="main-font">Chief of Marketing</p>
            </div>

            <DashboardLink to={""} src={calling} text={"Phone Calls"} />
            <DashboardLink to={""} src={calendar} text={"Schedules"} />
            <DashboardLink to={""} src={chart} text={"Statistics"} />
            <DashboardLink to={""} src={danger} text={"Red List"} />
            <DashboardLink to={""} src={paper} text={"Buyers and References"} />
            <DashboardLink to={""} src={bookmark} text={"Collections"} />
        </div>
    );
}

export default DashboardSide;