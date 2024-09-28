import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between items-center h-[146px] px-4 md:px-8  md:flex-col  md:items-start relative z-50">
      {/* Logo */}
      <div className="flex-shrink-0 ">
        <a href="/">
          <img
            src="/images/Sintana2.png"
            alt="Logo"
            className="w-[118px] h-auto mix-blend-color-burn ml-3 font-extrabold"
          />
        </a>
      </div>

      {/* Hamburger Menu for Mobile View (visible only on 'sm' screen) */}
      <div
        className="sm:block md:hidden lg:hidden xl:hidden absolute top-0 right-0 p-6 text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {showMenu ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-[#E7C022]" />
        )}
      </div>

      {/* Main Menu */}
      <div
        className={`flex flex-row ${
          showMenu ? "flex-col w-[100vw] h-[100vh] bg-[#425563]" : "sm:hidden"
        }`}
      >
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a
            href="#"
            className="font-sans text-[12.96px] text-white px-6 py-5 flex items-center transition-colors duration-300 hover:text-[#f0a500]  md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            SOLUTIONS <FaChevronDown className="ml-2 text-[#f0a500]" />
          </a>
          {showDropdown && (
            <div className="absolute font-normal text-[15px] top-full left-0 bg-[#425563] text-[#f5b719] py-4 z-50 flex flex-col rounded-lg min-w-[180px] max-w-[250px] transition-opacity duration-300">
              <a
                href="#"
                className="px-4 py-2  hover:bg-opacity-75 sm:px-6 sm:py-5"
              >
                Existing Universities
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:bg-opacity-75 sm:px-6 sm:py-5"
              >
                Powered by ASU
              </a>
              <a
                href="#"
                className="px-4 py-2 hover:bg-opacity-75 sm:px-6 sm:py-5"
              >
                New Universities
              </a>
              <a href="#" className="px-4 hover:bg-opacity-75 sm:px-6 sm:py-5">
                Globally Ranked Universities
              </a>
            </div>
          )}
        </div>

        {/* Other Links */}
        <div className={`flex md:flex-row md:items-center `}>
          <a
            href="#"
            className="px-6 py-5 text-[12.96px] text-white hover:text-[#f0a500] font-normal md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            TEAM
          </a>
          <a
            href="#"
            className="px-6 py-5 text-[12.96px] text-white hover:text-[#f0a500] font-normal md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            THE CINTANA ALLIANCE
          </a>
          <a
            href="#"
            className="px-6 py-5 text-[12.96px] text-white hover:text-[#f0a500] font-normal md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            ASU PARTNERSHIP
          </a>
          <a
            href="#"
            className="px-6 py-5 text-[12.96px] text-white hover:text-[#f0a500] font-normal md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="px-6 py-5 text-[12.96px] text-white hover:text-[#f0a500] font-normal md:pr-[24px] md:pl-0 md:py-0 lg:pr-[24px] lg:pl-0 lg:py-0 lg:text-[11.52px]"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
