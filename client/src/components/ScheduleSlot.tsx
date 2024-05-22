const clockimg = require("../assets/Vector.png");
const ScheduleSlot = ({height, name, surname, startHour, startMin}: {height: string, name: string, surname: string, startHour: number, startMin: number}) => {
    const timeStart = `${startHour.toString().padStart(2, '0')}:${startMin.toString().padStart(2, '0')}`;
    let endHour = startHour + 1;
    let endMin = startMin + 30;
    if (endMin === 60) {
        endMin = 0;
        endHour += 1;
    }
    
    const timeEnd = `${endHour.toString().padStart(2, '0')}:${endMin.toString().padStart(2, '0')}`;

    return (
        <div
        className={`rounded-md pl-2 overflow-hidden bg-[#67E952] ${height}`}>
            <div className="bg-[#E9EFFF] pl-2 h-full">
                <p className="montserrat font-medium text-sm text-[#5272E9]">{name} {surname}</p>
                {/* <p className="montserrat font-medium text-[#736A6A] text-xs" >Client: <p className="inline underline">Erion Lama</p></p> */}
                <div className="flex">
                    <img src={clockimg} alt="" />
                    <p className="montserrat text-xs inline text-[#5272E9] pl-1">{timeStart} - {timeEnd}</p>
                </div>
            </div>
        </div>
    );
}

export default ScheduleSlot;