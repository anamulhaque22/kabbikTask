import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

import logo from "../../assets/logo.png";
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Products" },
    { id: 3, text: "Services" },
  ];

  return (
    <div className="font-archivo-narrow bg-white flex justify-between items-center h-24 container mx-auto px-4 text-primary z-50">
      {/* Logo */}
      <img src={logo} alt="" className="w-[100px] h-[34px]" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300 "
          >
            {item.text}
          </li>
        ))}
        <li className="p-4 m-2">
          <a
            href=""
            className="text-white bg-[#2F6F59] px-3 py-2 rounded-full text-base"
          >
            Login
          </a>
        </li>
        <li
          className="p-4 m-2
"
        >
          <div className="relative inline-flex items-center px-3 py-1 text-xs font-medium text-center rounded-lg ">
            <IoCartOutline size="25px" />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#2F6F59]  rounded-full -top-1 -end-1 ">
              8
            </div>
          </div>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r  bg-white ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <img src={logo} alt="" className="w-[100px] h-[34px] m-4" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="p-4 duration-300  cursor-pointer ">
            {item.text}
          </li>
        ))}
        <li className="p-4 duration-300">
          <a
            href=""
            className="text-white bg-[#2F6F59] px-3 py-2 rounded-full text-base"
          >
            Login
          </a>
        </li>
        <li className="p-4 duration-300">
          <div className="relative inline-flex items-center px-3 py-1 text-xs font-medium text-center rounded-lg ">
            <IoCartOutline size="25px" />
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#2F6F59]  rounded-full -top-1 -end-1 ">
              8
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
