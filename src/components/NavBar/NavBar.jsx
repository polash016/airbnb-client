import { Typography, IconButton } from "@material-tailwind/react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import logo from "../../../public/airbnb.png"
import ElContainer from "../ElContainer";
import { useState } from "react";
import SearchBar from "../SearchBar";
const NavBar = () => {
  const [showSearch,setShowSearch] = useState(false); 

  const handleSearchForm = () => {
    setShowSearch(!showSearch);
  }
  return (
    <div className="fixed z-10 w-full py-2 border border-b-1 bg-white border-gray-300 bg-opacity-100">
      {
        showSearch ? <SearchBar></SearchBar> : 

        <ElContainer>
        <div className="flex items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="cursor-pointer py-1.5"
          >
            <img src={logo} alt="" width='120' height='120' />
          </Typography>
          <Typography onClick={handleSearchForm} className="flex items-center gap-4 border border-gray-300 rounded-full py-2 px-2 pl-6 shadow-md shadow-gray-300">
            <div className="font-semibold text-sm">Anywhere</div>
            <div className="border border-y-8 border-l border-gray-300"></div>
            <div className="font-semibold text-sm">Any Week</div>
            <div className="border border-y-8 border-l border-gray-300"></div>
            <div className="text-gray-400 font-sm">Add Guest</div>
            <button
              size="sm"
              className="border rounded-full p-2 text-white bg-[#ff385c]"
            >
              <FaSearch></FaSearch>
            </button>
          </Typography>
          <div className="flex items-center gap-4 py-2 px-4">
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
          </div>
        </div>
        </ElContainer>
      }
    </div>
  );
};

export default NavBar;
