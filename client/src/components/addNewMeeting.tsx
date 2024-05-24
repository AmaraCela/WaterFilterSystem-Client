import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createNewMeeting, getLoggedUserId, retrieveAllReferencesFromServer, retrieveAllSalesAgentFromServer, retrieveMeetingsOfAgent, retrieveSchedulesFromServer, updateClient } from'../serverUtils/serverUtils' // Adjust the import path accordingly
import SearchableDropdown from "./SearchableDropdown";

function AddNewMeeting({reference}: any) {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [selectedAgent, setSelectedAgent] = React.useState<string>("all");
    const [cancelClicked, setCancelClicked] = React.useState<boolean>(false);
    const [saveClicked, setSaveClicked] = React.useState<boolean>(false);
    const [agents, setAgents] = React.useState<any[]>([]);
    const [references, setReferences] = React.useState<any[]>([]);
    const [referenceNames, setReferenceNames] = React.useState<any[]>([]);
    const [referenceIDs, setReferenceIDs] = React.useState<any[]>([]);
    const [freeSlots, setFreeSlots] = React.useState<any>({});
    const [referenceAddress, setReferenceAddress] = React.useState<string>("");
    const [selectedSlot, setSelectedSlot] = React.useState<string>("");
    const [selectedSlots, setSelectedSlots] = React.useState<Date[]>([]);
    const [addressChanged, setAddressChanged] = React.useState<boolean>(false);
    const [selectedReference, setSelectedReference] = React.useState<any | null>(null);

    function retrieveFreeSlotsOfAgent(agent_id: any) {
        return retrieveSchedulesFromServer(agent_id).then((schedules: any) => {
            if (schedules == null) {
                return;
            }

            return retrieveMeetingsOfAgent(agent_id).then((meetings: any) => {
                if (meetings == null) {
                    return;
                }

                let freeSlotsOfAgent = calculateFreeSlots(schedules, meetings);
                return freeSlotsOfAgent;
            });
        });
    }

    React.useEffect(() => {
        retrieveAllSalesAgentFromServer().then(agents => {
            if (agents) {
                setAgents(agents);

                let promises = agents.map((agent: any) => retrieveFreeSlotsOfAgent(agent.id));
                Promise.all(promises).then((freeSlots) => {
                    let freeSlotsCopy: any = {all: []};
                    let i = 0;

                    for (let agent of agents) {
                        freeSlotsCopy[agent.id] = freeSlots[i];
                        i++;

                        for (let slot of freeSlotsCopy[agent.id]) {
                            if (!freeSlotsCopy.all.includes(slot)) {
                                freeSlotsCopy.all.push(slot);
                            }
                            freeSlotsCopy.all.sort();
                        }
                    }
                   
                    setFreeSlots(freeSlotsCopy);
                });
            }
        });

        retrieveAllReferencesFromServer().then(references => {
            if (references == null) {
                return;
            }
            setReferences(references);
            
            const referenceNames = references.map((reference: any) => {
                return reference.name + " " + reference.surname + " (" + reference.phoneNo + ")";
            });

            const referenceIDs = references.map((reference: any) => {
                return reference.id;
            });

            setReferenceNames(referenceNames);
            setReferenceIDs(referenceIDs);

            if (reference !== null) {
                const reference_id = parseInt(reference);
                if (reference_id) {
                    const index = referenceIDs.indexOf(reference_id);
                    setSelectedReference(referenceNames[index]);
                }
            }
        });
    }, []);

    React.useEffect(() => {
        if (selectedReference !== null) {
            setReferenceAddress(references[referenceNames.indexOf(selectedReference)]?.address ?? "");
            setAddressChanged(false);
        }
    }, [selectedReference]);

    React.useEffect(() => {
        if (selectedAgent) {
            if (selectedAgent == "all") {
                setSelectedSlots(freeSlots.all ?? []);
            }
            else {
                setSelectedSlots(freeSlots[agents.find((agent: any) => agent.name + " " + agent.surname === selectedAgent).id] ?? []);
            }
        }
    }, [selectedAgent, freeSlots]);

    const handleCancelClick = () => {
        setCancelClicked(true);
        setSaveClicked(false);
    };

    const handleSaveClick = () => {
        if (selectedSlot && selectedAgent != "all" && selectedReference && referenceAddress) {
            const meeting = {
                time: selectedSlot,
                place: referenceAddress,
                client: referenceIDs[referenceNames.indexOf(selectedReference)],
                phoneOperator: getLoggedUserId(),
                salesAgent: agents.find((agent: any) => agent.name + " " + agent.surname === selectedAgent).id,
                worker: getLoggedUserId()
            }
    
            createNewMeeting(meeting);
    
            if (addressChanged) {
                const client = references[referenceNames.indexOf(selectedReference)];
                client.address = referenceAddress;
                
                // remove null fields
                for (let key in client) {
                    if (client[key] === null) {
                        delete client[key];
                    }
                }
    
                updateClient(client);
            }

            setSaveClicked(true);
            setCancelClicked(false);

            return null;
        }
    };

    if (saveClicked || cancelClicked) {
        return null; // Render nothing if either save or cancel is clicked
    }

    function calculateFreeSlots(schedules: any, meetings: any): Date[] {
        const freeSlots: Date[] = [];
    
        function parseTime(day: string, time: string): Date {
            const [hours, minutes] = time.split(':').map(Number);
            const date = new Date(day);
            date.setHours(hours, minutes, 0, 0);
            return date;
        }

        const availableIntervals = schedules.map((schedule: any) => ({
            day: schedule.day,
            startTime: parseTime(schedule.day, schedule.startTime),
            endTime: parseTime(schedule.day, schedule.endTime),
        }));
    
        const meetingTimes: any = new Set(meetings.map((meeting: any) => new Date(meeting.time).getTime()));
    
        availableIntervals.forEach((interval: any) => {
            let slotStart = interval.startTime;
            const slotEnd = interval.endTime;
    
            while (slotStart.getTime() + 90 * 60 * 1000 <= slotEnd.getTime()) {
                const potentialSlotEnd = new Date(slotStart.getTime() + 90 * 60 * 1000);
                let slotIsFree = true;

                for (let meetingStart of meetingTimes) {
                    const meetingEnd = new Date(meetingStart + 90 * 60 * 1000);

                    if ((slotStart < meetingEnd && potentialSlotEnd > meetingStart)) {
                        slotIsFree = false;
                        break;
                    }
                }

                if (slotIsFree) {
                    freeSlots.push(new Date(slotStart));
                }

                slotStart = new Date(slotStart.getTime() + 30 * 60 * 1000);
            }
        });
    
        return freeSlots;
    }

    return (
        <div className="flex flex-col px-16 pt-10 mt-20 border border-solid backdrop-blur-[50px] bg-white border-black border-opacity-50 max-w-[686px] rounded-[30px] max-md:px-5" style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '10px 4px 6px rgba(1, 1, 1, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)', overflow: 'auto', resize: 'both' }}>
            <div className="flex self-center mt-0 text-3xl font-medium font-bold tracking-tight leading-9 text-indigo-800 max-md:max-w-full mb-10">
                Register a new meeting
            </div>

            <div className="mt-0 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Name of Client
            </div>
            <SearchableDropdown
                options={referenceNames}
                selectedOption={selectedReference}
                onOptionSelect={setSelectedReference}
            />

            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Address of Client
            </div>
            <input
                type="text"
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                placeholder="Enter address of client"
                value={referenceAddress}
                onChange={(e) => { setReferenceAddress(e.target.value); setAddressChanged(true); }}
            />
            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Date and Time
            </div>
            <div className="mt-3 flex gap-5 max-md:flex-col max-md:gap-0">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date | null) => setSelectedDate(date)}
                    className="w-full px-4 py-2 border border-black border-solid rounded-md"
                />
                <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
                >
                    <option value="" disabled>Select a time slot</option>
                    {selectedSlots.filter((slot) => (slot.getDate() == selectedDate?.getDate() && slot.getMonth() == selectedDate?.getMonth())).map((slot) => (
                        <option value={slot.toISOString()}>{slot.getHours().toString().padStart(2, '0') + ":" + slot.getMinutes().toString().padStart(2, '0')}</option>
                    ))}
                </select>
            </div>
            <div className="mt-1 text-xl font-medium tracking-tight leading-9 text-indigo-800 max-md:max-w-full">
                Sales Agent
            </div>
            <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-4 py-2 mt-3 border border-black border-solid rounded-xl max-md:max-w-full"
            >
                <option value="all">Select a sales agent</option>
                {(selectedAgent === "all" && selectedSlot !== "" ? agents.filter((agent: any) => {;
                    for (let slot of freeSlots[agent.id]) {
                        if (slot.toISOString() == selectedSlot) {
                            return true;
                        }
                    }
                    return false;
                }) : agents).map((agent, index) => (
                    <option key={index} value={agent.name + " " + agent.surname}>{agent.name + " " + agent.surname}</option>
                ))}
            </select>
            <div className="flex gap-3 justify-between self-center mt-10 text-xs font-bold leading-4 text-gray-900 uppercase whitespace-nowrap tracking-[2px] mb-10">
                <button onClick={handleCancelClick}>
                    <div className={`justify-center px-4 py-2 bg-${cancelClicked ? "blue" : "white"} rounded border-2 border-indigo-800 border-solid max-md:px-5 hover:bg-blue-500`}>
                        CANCEL
                    </div>
                </button>
                <button onClick={handleSaveClick}>
                    <div className={`justify-center px-4 py-2 bg-${saveClicked ? "blue" : "white"} rounded border-2 border-indigo-800 border-solid max-md:px-7 hover:bg-blue-500`}>
                        SAVE
                    </div>
                </button>
            </div>
        </div>
    );
}

export default AddNewMeeting;
