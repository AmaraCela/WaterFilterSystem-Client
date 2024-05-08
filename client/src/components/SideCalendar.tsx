import "../styles/SideCalendar.css";

const SideCalendar = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const days = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<p key={`empty-${i}`} className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]"></p>);
    }

    let day = 1;
    while (day < currentDay) {
        days.push(<p key={day} className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">{day}</p>);
        day++;
    }
    days.push(<p key={day} className="p-2 text-center text-sm calendar-entry bg-[#5272E9] today">{day}</p>);
    day++;
    while (day <= daysInMonth) {
        days.push(<p key={day} className="p-2 text-center calendar-entry text-sm">{day}</p>);
        day++;
    }

    while (days.length < 42) {
        days.push(<p key={`empty-${days.length}`} className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]"></p>);
    }

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthName = monthNames[currentMonth];

    return (
        <div className="flex flex-col side-calendar px-2">
            <div className="flex justify-between p-2 mt-1">
                <p className="text-[#5272E9]">&#10094;</p>
                <p className="montserrat font-semibold text-sm">{currentMonthName}</p>
                <p className="text-[#5272E9]">&#10095;</p>
            </div>
            <div className="flex justify-between">
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">S</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">M</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">T</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">W</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">T</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">F</p>
                <p className="p-2 text-center calendar-entry montserrat font-medium text-[#7A7A7A]">S</p>
            </div>
            <div className="flex justify-between flex-wrap">
                {days}
            </div>
        </div>
    );
}

export default SideCalendar;