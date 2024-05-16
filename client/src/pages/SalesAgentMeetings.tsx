import React, { useState } from "react";
import AddMeeting from "../components/AddMeeting";
import ExpressMeeting from "../components/ExpressMeeting";
import CalendarDetails from "../components/CalendarDetails";
import DashboardSideSalesAgent from "../components/DashboardSide_SalesAgent";
import MeetingSchedule from "../components/MeetingSchedule";
import SideCalendar from "../components/SideCalendar";
import TopIcons from "../components/TopIcons";

const SalesAgentMeetings = () => {
<<<<<<< HEAD
  const [showAddMeeting, setShowAddMeeting] = useState(false);
=======
    return (
        <div className="dashboard rounded-3xl flex flex-row h-lvh ">
            <DashboardSideSalesAgent />
            <div className="main-content flex flex-col w-full w-3/4">
                <div className="flex flex-row pt-4 pr-8 justify-end items-end">
                    <TopIcons />
                </div>
                <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                    Meeting Agenda
                </p>
                <div className="flex w-full justify-between mt-8">
                    <div className="w-3/4 overflow-y-scroll h-[80vh] mr-16">
                        <MeetingSchedule />
                    </div>
                    <div className="w-1/4 mr-4">
                        <SideCalendar />
                        <div className="mt-2">
                            <CalendarDetails />
                        </div>
                    </div>
                </div>
>>>>>>> test

  const handleAddMeetingCancel = () => {
    setShowAddMeeting(false);
  };

  const handleExpressMeetingClick = () => {
    setShowAddMeeting(true);
  };

  return (
    <div className="dashboard rounded-3xl flex flex-row h-lvh">
      <DashboardSideSalesAgent />
      <div className="main-content flex flex-col w-full w-3/4">
        <div className="flex flex-row pt-4 pr-8 justify-end items-end">
          <TopIcons />
        </div>
        <p className="self-start ml-7 text-4xl font-bold leading-7 text-indigo-800 max-md:ml-2.5">
          Meeting Agenda
        </p>
        {showAddMeeting ? (
          <AddMeeting onCancel={handleAddMeetingCancel} />
        ) : (
          <ExpressMeeting onClick={handleExpressMeetingClick} />
        )}
        <div className="flex w-full justify-between mt-8">
          <div className="w-3/4 overflow-y-scroll h-[80vh] mr-16">
            <MeetingSchedule />
          </div>
          <div className="w-1/4 mr-4">
            <SideCalendar />
            <div className="mt-2">
              <CalendarDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAgentMeetings;
