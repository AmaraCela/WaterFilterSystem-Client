import "../styles/sideCalendar.css";

const SideCalendar = () => {
    return (
        <div className="flex flex-col side-calendar px-2">
            <div className="flex justify-between p-2 mt-1">
                <p className="text-[#5272E9]">&#10094;</p>
                <p className="montserrat font-semibold text-sm">February</p>
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
            <div className="flex justify-between flex-shrink-0 flex-grow-0">
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]"></p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">1</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">2</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">3</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">4</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">5</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">6</p>
            </div>
            <div className="flex justify-between flex-shrink-0 flex-grow-0">
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">7</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">8</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">9</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">10</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">11</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">12</p>
                <p className="p-2 text-center calendar-entry text-sm text-[#A6A6A6]">13</p>
            </div>
            <div className="flex justify-between flex-shrink-0 flex-grow-0">
                <p className="p-2 text-center text-sm calendar-entry text-[#A6A6A6]">14</p>
                <p className="p-2 text-center text-sm calendar-entry text-[#A6A6A6]">15</p>
                <p className="p-2 text-center text-sm calendar-entry bg-[#5272E9] today">16</p>
                <p className="p-2 text-center text-sm calendar-entry">17</p>
                <p className="p-2 text-center text-sm calendar-entry">18</p>
                <p className="p-2 text-center text-sm calendar-entry">19</p>
                <p className="p-2 text-center text-sm calendar-entry">20</p>
            </div>
            <div className="flex justify-between flex-shrink-0 flex-grow-0">
                <p className="p-2 text-center text-sm calendar-entry">21</p>
                <p className="p-2 text-center text-sm calendar-entry">22</p>
                <p className="p-2 text-center text-sm calendar-entry">23</p>
                <p className="p-2 text-center text-sm calendar-entry">24</p>
                <p className="p-2 text-center text-sm calendar-entry">25</p>
                <p className="p-2 text-center text-sm calendar-entry">26</p>
                <p className="p-2 text-center text-sm calendar-entry">27</p>
            </div>
            <div className="flex justify-between flex-shrink-0 flex-grow-0">
                <p className="p-2 text-center calendar-entry">28</p>

            </div>
        </div>
    );
}

export default SideCalendar;