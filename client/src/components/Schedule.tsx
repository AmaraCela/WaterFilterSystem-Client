import ScheduleSlot from "./ScheduleSlot";

const Schedule = () => {
    return (
            <table className="w-full h-full">
                <thead>
                    <th className="w-[20%]">Week</th>
                    <th className="w-[20%]">14<br />Sun</th>
                    <th className="w-[20%]">15<br /> Mon</th>
                    <th className="w-[20%]">16<br />Tue</th>
                    <th className="w-[20%]">17<br />Wed</th>
                </thead>
                <tbody>
                    <tr className="border-t border-black h-12">
                        <td className="w-[12%] ">09:00</td>
                        <td className="w-[12%] h-full" rowSpan={2}>
                            <ScheduleSlot height = {'h-3/4'}></ScheduleSlot>
                        </td>
                    </tr>
                    <tr className="border-t border-black h-12">
                        <td className="w-[12%]">10:00</td>
                    </tr>
                    <tr className="border-t border-black h-12">
                        <td className="w-[12%]">11:00</td>
                        <td className="w-[12%] h-full">
                            <ScheduleSlot height="h-full"></ScheduleSlot>
                        </td>
                    </tr>
                    <tr className="border-t border-black h-12">
                        <td className="w-[12%]">12:00</td>
                    </tr>
                    <tr className="border-t border-black h-12">
                        <td className="w-[12%]">13:00</td>
                    </tr>
                    <tr className="border-t border-black h-12"><td className="w-[12%]">14:00</td></tr>
                    <tr className="border-t border-black h-12"><td className="w-[12%]">15:00</td></tr>
                    <tr className="border-t border-black h-12"><td className="w-[12%]">16:00</td></tr>
                    <tr className="border-t border-black h-12"><td className="w-[12%]">17:00</td></tr>
                    <tr className="border-t border-black h-12"><td className="w-[12%]">18:00</td></tr>
                </tbody>
            </table>
    );
}

export default Schedule;