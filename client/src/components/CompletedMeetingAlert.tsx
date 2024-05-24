import { useState } from "react";
import { Meeting } from "../types/types";
import SalesAgentMeetingOutcome from "./SalesAgentMeetingOutcome";

const CompletedMeetingAlert = ({ meeting, setChosenMeeting }: { meeting: Meeting, setChosenMeeting: any }) => {
    const [showMeetingOutcomeForm, setShowMeetingOutcomeForm] = useState<boolean>(false);
    return (
        <>
            {(
                <div className="flex flex-col rounded-md border border-solid max-w-[332px]" style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)'
                }}>
                    <div className="flex flex-col justify-center p-4 w-full text-blue-800 bg-blue-50">
                        <div className="flex gap-2.5">
                            <div className="flex flex-1 gap-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fefc881ee22debf5d02b0f80eae80bf5e1e665085beec3eb20e6d3dec1c761e?"
                                    className="shrink-0 self-start w-6 aspect-square"
                                    alt=""
                                />
                                <div className="flex flex-col flex-1">
                                    <div className="text-lg font-bold">Is your meeting with {meeting.Client.name} {meeting.Client.surname} at {meeting.time} completed?</div>
                                    <div className="mt-2 text-sm font-medium">
                                        After approving you will log the outcome.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end gap-10 px-4 py-2 w-full text-base font-medium whitespace-nowrap bg-blue-50 text-zinc-800">
                        <button onClick={() => { setShowMeetingOutcomeForm(true) }}>
                            <div className="justify-center px-6 py-2 rounded border border-solid bg-blue-800 bg-opacity-20 border-blue-800 border-opacity-20 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                                Yes, mark as done.
                            </div>
                        </button>
                        <button onClick={() => { setChosenMeeting(null) }}>
                            <div className="justify-center px-6 py-2 rounded border border-solid bg-blue-800 bg-opacity-20 border-blue-800 border-opacity-20 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                                No
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {showMeetingOutcomeForm && <SalesAgentMeetingOutcome chosenMeeting = {meeting} setChosenMeeting = {setChosenMeeting} setShowMeetingOutcomeForm = {setShowMeetingOutcomeForm} />}
            {/* {showMeetingOutcomeForm && <MeetingOutcomeForm reference = {selected} onClose={() => {setSelectedRow(null); setShowMeetingOutcomeForm(false);}} />} */}
        </>
    );
}

export default CompletedMeetingAlert;