import ScheduleSlot from "./ScheduleSlot";

const Schedule = () => {
    return (
        <table className="w-full h-full">
            <thead>
                <tr>
                    <th className="w-[10%] montserrat font-light text-[#B1B1B1]">Week</th>
                    <th className="w-[22%] montserrat font-light text-[#B1B1B1]">14<br />Sun</th>
                    <th className="w-[22%] montserrat font-light text-[#B1B1B1]">15<br /> Mon</th>
                    <th className="w-[22%] montserrat font-bold text-[#5272E9]">16<br />Tue</th>
                    <th className="w-[22%] montserrat font-light text-[#B1B1B1]">17<br />Wed</th>
                </tr>
                <tr>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                    <th className="h-5"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">09:00</p>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]" rowSpan={2}>
                        <ScheduleSlot height={'h-3/4'} name="" surname="" startHour={0} startMin={0}></ScheduleSlot>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className=" h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1] ">
                        <p className="w-full text-center">10:00</p>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">11:00</p>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">
                        <ScheduleSlot height="h-full" name="" surname="" startHour={0} startMin={0}></ScheduleSlot>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">12:00</p>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="h-12">
                    <td className="w-[10%] montserrat font-light text-[#B1B1B1]">
                        <p className="w-full text-center">13:00</p>
                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">14:00</p></td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">15:00</p></td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">16:00</p></td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">17:00</p></td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
                <tr className="montserrat font-light text-[#B1B1B1] h-12">
                    <td className="w-[10%]"><p className="w-full text-center">18:00</p></td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                    <td className="w-[22%] h-full border-t border-[#a5a5a5]">

                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Schedule;