const time = require("../assets/Vector.png");
const ScheduleSlot = ({height}: {height: string}) => {
    return (
        <div className={`rounded-md pl-2 overflow-hidden bg-[#67E952] ${height}`}>
            <div className="bg-[#E9EFFF] pl-2 h-full">
                <p className="montserrat font-medium text-sm text-[#5272E9]">Drita Mendiku</p>
                <p className="montserrat font-medium text-[#736A6A] text-xs" >Client: <p className="inline underline">Erion Lama</p></p>
                <div className="flex">
                    <img src={time} alt="" />
                    <p className="montserrat text-xs inline text-[#5272E9] pl-1">09:00 - 10:30</p>
                </div>
            </div>
        </div>
    );
}

export default ScheduleSlot;