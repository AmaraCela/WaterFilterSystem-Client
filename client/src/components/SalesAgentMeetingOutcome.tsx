import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RedlistAlert from "./redlistAlert";
import { Meeting } from "../types/types";
import { useAppDispatch } from "../store/store";
import { updateMeeting } from "../store/meetings/meetingsThunk";
import RescheduleMeetings from "./RescheduleMeeting";

const SalesAgentMeetingOutcome = ({ chosenMeeting, setChosenMeeting, setShowMeetingOutcomeForm }: { chosenMeeting: Meeting, setChosenMeeting: any, setShowMeetingOutcomeForm: any }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedOutcome, setSelectedOutcome] = useState<string>('');
    const [rescheduleVisible, setRescheduleVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {

    }, [selectedOutcome]);

    return (
        <>
            <div className="flex flex-col px-16 py-11 font-bold text-indigo-800 bg-white rounded-3xl border border-indigo-800 border-solid max-w-[458px]" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)' }}>
                <div className="self-center text-3xl">Log this meeting</div>
                <div className="flex gap-2.5 mt-8 text-xl">
                    <input
                        type="checkbox"
                        className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
                        checked={selectedOutcome === "successful"}
                        onChange={() => setSelectedOutcome("successful")}
                    />
                    <div className="flex-auto self-start">successful</div>
                </div>
                <div className="flex gap-2.5 mt-8 text-xl">
                    <input
                        type="checkbox"
                        className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
                        checked={selectedOutcome === "clientCancelled"}
                        onChange={() => setSelectedOutcome("clientCancelled")}
                    />
                    <div className="flex-auto my-auto">cancelled by client</div>
                </div>
                <div className="flex gap-2.5 mt-8 text-xl">
                    <input
                        type="checkbox"
                        className="shrink-0 rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
                        checked={selectedOutcome === "ICancelled"}
                        onChange={() => setSelectedOutcome("ICancelled")}
                    />
                    <div className="flex-auto">cancelled by me</div>
                </div>
                <div className="flex gap-2.5 mt-8 text-xl">
                    <input
                        type="checkbox"
                        className="shrink-0 self-start rounded-xl border border-indigo-800 border-solid h-[29px] w-[33px]"
                        checked={selectedOutcome === "unsuccessful"}
                        onChange={() => { setSelectedOutcome("unsuccessful") }}
                    />
                    <div className="flex-auto">unsuccessful</div>
                </div>
                <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px]">
                    <button onClick={() => { setChosenMeeting(null); setShowMeetingOutcomeForm(false) }}>
                        <div className={`justify-center px-4 py-2 rounded border-2 border-indigo-800 border-solid max-md:px-5 hover:bg-blue-500`}>
                            CANCEL
                        </div>
                    </button>
                    <button onClick={() => {
                        selectedOutcome === 'successful' && navigate("/agentaddsale");
                        selectedOutcome === 'unsuccessful' && setAlertVisible(true);
                        (selectedOutcome === 'ICancelled' || selectedOutcome === 'clientCancelled') && setRescheduleVisible(true);

                    }}>
                        <div className={`justify-center px-4 py-2  rounded border-2 border-indigo-800 border-solid max-md:px-7 hover:bg-blue-500`}>
                            SAVE
                        </div>
                    </button>
                </div>
            </div>
            {alertVisible && <RedlistAlert title={"This meeting will be logged as unsuccessful."} message={"The meeting did not result in a sale."} onClose={() => {
                let meeting = { ...chosenMeeting, successful: false };
                dispatch(updateMeeting(meeting));
                setAlertVisible(false);
            }
            } />}
            {rescheduleVisible && <RescheduleMeetings onCancel={() => { setRescheduleVisible(false) }} meeting={chosenMeeting} />}

            {/* {showChangeDateForm && <ChangeDateOfMeeting onClose={handleCloseForm} reference={reference} />}
            {showRedListAlert && <RedlistAlert title="Redlist alert" message="Your call will be moved to the Redlist Section." onClose={handleCloseFormRL} />} Render the RedlistAlert conditionally */}

        </>
    );
}

export default SalesAgentMeetingOutcome;