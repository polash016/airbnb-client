import { IconButton, Typography } from "@material-tailwind/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import ElContainer from "./ElContainer";
import logo from "../../public/airbnb.png";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { AuthContext } from "./DataContext";
import axios from "axios";

const SearchBar = () => {
  const [activeDiv, setActiveDiv] = useState(null);
  const {setRooms} = useContext(AuthContext)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleDivClick = (index) => {
    setActiveDiv(index);
  };
  const handleDateFilter = () => {
    console.log("date filter clicked");
    const startDate = dateRange[0].startDate.toLocaleDateString();
    const endDate = dateRange[0].endDate.toLocaleDateString();
    console.log("Start", startDate, "end", endDate);
    axios.get(`https://airbnb-server-mocha.vercel.app/hotel-rooms/?checkInDate=${startDate}&checkOutDate=${endDate}`)
    .then(data => setRooms(data.data))
  };
  return (
    <ElContainer>
      <div className="relative flex  justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5"
        >
          <img src={logo} alt="" width="120" height="120" />
        </Typography>
        <Typography>
          <div className="flex items-center gap-4 py-2 sm:pl-24 md:pl-48">
            <div className="text-gray-700 font-sm">Stays</div>
            <div className="text-gray-700 font-sm">Experience</div>
            <div className="text-gray-700 font-sm">Online Experiences</div>
          </div>
          <div className="flex items-center gap-4 mt-8 border bg-gray-300 border-gray-300 rounded-full shadow-sm shadow-gray-300">
            <div
              onClick={() => handleDivClick(1)}
              className={`px-8 ${
                activeDiv === 1
                  ? "border border-gray-300 bg-white rounded-full px-4 py-2 shadow-md shadow-white-600"
                  : ""
              }`}
            >
              <h3 className="text-sm text-gray-900">Where</h3>
              <input
                className={`outline outline-none bg-gray-300 ${
                  activeDiv === 1 ? " bg-white" : ""
                }`}
                type="text"
                name="place"
                placeholder="Search Destination"
              />
            </div>
            <div>
              <div
                onClick={() => handleDivClick(2)}
                className={`flex gap-6 pr-8 ${
                  activeDiv === 2
                    ? "border border-gray-300 bg-white rounded-full px-4 py-2 shadow-md shadow-white-600"
                    : ""
                }`}
              >
                <div>
                  <h3>Check In</h3>
                </div>
                <div className="border border-y-8 border-l border-gray-300"></div>
                <div>
                  <h3>Check Out</h3>
                </div>
              </div>
              {activeDiv === 2 && (
                <div className="absolute left-40 flex">
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                  />
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                  />
                </div>
              )}
            </div>
            <div
              onClick={() => handleDivClick(3)}
              className={`flex-end flex gap-6 px-4 py-2 ${
                activeDiv === 3
                  ? "border border-gray-300 bg-white rounded-full shadow-md shadow-white-600"
                  : ""
              }`}
            >
              <div className="">
                <h3 className="text-sm text-gray-900">Who</h3>
                <p className="text-sm text-gray-500">Add Guest</p>
              </div>
              <button
                onClick={handleDateFilter}
                className="flex gap-2 h-10 items-center border rounded-full py-0 px-4 text-white bg-[#ff385c]"
              >
                <FaSearch className="text-sm"></FaSearch>{" "}
                <span className="text-sm">Search</span>
              </button>
            </div>
          </div>
        </Typography>
        <Typography className="flex items-center gap-4 py-2 px-4 mb-28">
          <div>
            <span className="text-sm font-semibold">Airbnb Your Home</span>
          </div>
          <IconButton variant="text" color="blue-gray">
            <TbWorld className="text-xl text-black"></TbWorld>
          </IconButton>
          <div className="flex gap-4 items-center border border-gray-300 rounded-full px-2 py-2 shadow-md shadow-gray-300">
            <RxHamburgerMenu></RxHamburgerMenu>
            <FaUserCircle className="text-3xl text-gray-600"></FaUserCircle>
          </div>
        </Typography>
      </div>
    </ElContainer>
  );
};

export default SearchBar;
