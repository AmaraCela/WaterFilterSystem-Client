const clockimg = require("../assets/Vector.png");
const ScheduleSlot = ({height, name, surname, time}: {height: string, name: string, surname: string, time: string}) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeStart = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // assuming meeting is 90 minutes
    date.setMinutes(date.getMinutes() + 90);
    const hoursEnd = date.getHours();
    const minutesEnd = date.getMinutes();
    const timeEnd = `${hoursEnd.toString().padStart(2, '0')}:${minutesEnd.toString().padStart(2, '0')}`;

    return (
        <div className={`rounded-md pl-2 overflow-hidden bg-[#67E952] ${height}`}>
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