import { useSelector } from "react-redux";
import DashboardSide from "../components/DashboardSide";
import TopIcons from "../components/TopIcons";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { getReferences } from "../store/client/clientThunks";
import { getPhoneOperators } from "../store/users/userThunks";
import { addCalls } from "../store/calls/callsThunk";
const arrow = require('../assets/Subtract.png');

const Collections = () => {
    const dispatch = useAppDispatch();
    const references = useSelector((state: RootState) => (state.client.references));
    const operators = useSelector((state: RootState) => (state.user.phoneOperators));
    const [selectedReferences, setSelectedReferences] = useState<number[]>([]);
    const [selectedOperator, setSelectedOperator] = useState(-1);
    const [selectedDate, setSelectedDate] = useState('');
    const [allSelected, setAllSelected] = useState(false);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        dispatch(getReferences());
        dispatch(getPhoneOperators());
    }, []);

    useEffect(() => {
        references && selectedReferences.length === references.length && setAllSelected(true);
    }, [selectedReferences])


    return (
        <>
            <div className="flex relative dashboard h-screen">
                <DashboardSide highlighted="Collections" />
                <div className="w-3/4 main-content">
                    <TopIcons />
                    <p className="main-font text-[#3D5AA1] font-bold text-2xl ml-12 mt-2">
                        Collections
                    </p>
                    <div className="h-[70%] w-3/4 rounded-md bg-white overflow-y-scroll">
                        <div className="flex w-full justify-between py-3 bg-gray-200 border-black border rounded-t-md">
                            <div className="w-[24%] shrink-0 flex justify-evenly"> <input type="checkbox" checked={allSelected} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setAllSelected(e.target.checked);
                                e.target.checked ? setSelectedReferences(() => references.map((reference) => (reference.id))) : setSelectedReferences(() => []);
                            }} /><label htmlFor="">Select all</label></div>
                            <p className="w-[24%] shrink-0 grow-0">Full name</p>
                            <p className="w-[24%] shrink-0 grow-0">Phone number</p>
                            <p className="w-[24%] shrink-0 grow-0">Date of reference</p>
                        </div>
                        {references && references.map((reference) => (
                            <div key={reference.id} className="flex w-full justify-between py-1">
                                <div className="w-[24%] shrink-0 grow-0 pl-8"><input type="checkbox" checked={selectedReferences.includes(reference.id)} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.checked) {
                                        setSelectedReferences((prev) => [...prev, reference.id]);
                                    }
                                    else {
                                        setSelectedReferences((prev) => prev.filter((id) => id !== reference.id));
                                        setAllSelected(false);
                                    }

                                }} /></div>
                                <p className="w-[24%] shrink-0 grow-0">{reference.name} {reference.surname}</p>
                                <p className="w-[24%] shrink-0 grow-0">{reference.phoneNo}</p>
                                <p className="w-[24%] shrink-0 grow-0">{new Date(reference.createdAt).getDate()}/{new Date(reference.createdAt).getMonth()}/{new Date(reference.createdAt).getFullYear()}</p>
                            </div>
                        ))}
                    </div>
                    <button className="flex bg-[#b2bedca1] w-fit rounded-md p-2 items-center" onClick={() => setVisibility(true)}>
                        <img src={arrow} alt="" className="object-contain" />
                        <p className="main-font text-[#2C3876] font-bold">SEND</p>
                    </button>
                </div>
            </div>
            {visibility && <div className="h-screen w-screen absolute top-0 z-10 flex items-center justify-center bg-[#11111144]">
                <div className="h-1/2 px-8 flex flex-col items-center justify-evenly bg-white border-[#844B2A] border-2 rounded-md shadow-[#844B2A] shadow-md">
                    <p className="main-font text-[#844B2A] font-semibold">Assign {selectedReferences.length} calls to: </p>
                    <input type="search" className="pl-2 border-[#844B2A] border-2 rounded-md bg-[#fd9e305c] w-[500px]" placeholder="Search for an operator..." />
                    <div className="h-fit max-h-[50%] overflow-y-auto">
                        {operators && operators.map((operator) => (
                            <div className="flex items-baseline" key={operator.id}>
                                <input type="radio" name="operators" id={operator.id.toString()} className="accent-[#844B2A]" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    e.target.checked && setSelectedOperator(() => operator.id);
                                }} />
                                <label className="ml-3 inter text-[#844B2A]" htmlFor={operator.id.toString()}>{operator.name} {operator.surname}</label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <label htmlFor="date" className="inter text-[#844B2A]">Call date:</label>
                        <input id="date" type="date" className="ml-2 border-[#844B2A] border-2 rounded-md bg-[#fd9e305c]" min={`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setSelectedDate(e.target.value)}} />
                    </div>
                    <div className="flex justify-evenly w-1/2">
                        <button className="rounded-md px-4 border-2 border-[#E97652] inter font-semibold" onClick={() => {
                            const inputs = {
                                clients: selectedReferences,
                                phoneOperatorId: selectedOperator,
                                scheduledTime: selectedDate,
                            }
                            dispatch(addCalls(inputs));
                        }}>
                            ASSIGN
                        </button>
                        <button className="rounded-md px-4 border-2 border-[#E97652] inter font-semibold" onClick={() => setVisibility(false)}>
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Collections;