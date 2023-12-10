import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, profileRef]);

  const navMenu = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Products", href: "#", current: false },
    { name: "Cart", href: "#", current: false },
    { name: "About", href: "#", current: false },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setOpenProfile(!openProfile);

  return (
    <nav className="bg-gray-800" >
      <div className="px-2 sm:px-6 lg:px-8 max-w-7xl  mx-auto">
        {/* This div controls all "logo", "Nav menu's", "search bar", "profile" */}
        <div className="flex h-16 items-center justify-between sm:justify-between" ref={menuRef}>
          {/* For mobile view toggle menu */}
          <div className="flex relative items-center sm:hidden" >
            <button
              onClick={toggleMenu}
              className=" text-gray-400 hover:bg-gray-700 
              hover:text-white focus:outline-none
              "
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          {/* This div controls space between logo and navMemu */}
          <div className="flex relative gap-x-5 ">
            {/* This div is for hidding logo */}
            <div className="hidden sm:block">
              <h1 className="text-2xl text-blue-400 shadow-lg font-semibold">
                ConnectV
              </h1>
            </div>

            {/* Navigation Menu Bar items */}
            {/* First div is used for hidden feature */}
            <div className="hidden sm:ml-2 sm:block">
              <div className="flex space-x-3">
                {navMenu.map((item) => (
                  <a
                    href={item.href}
                    key={item.name}
                    className={`${
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    } rounded-lg px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex mx-5 relative items-center flex-auto sm:mr-4 ">
            <button className="absolute left-1  items-center pl-2">
              <FaSearch className=" text-slate-600" />
            </button>
            <input
              type="text"
              placeholder="Search for products here"
              className="w-full bg-gray-300
            py-1 px-2 pl-9 placeholder:text-slate-600
            placeholder:font-semibold
            focus:outline-none border border-slate-400 rounded-lg
             focus:bg-white"
            />
          </div>

          {/* For Profile view */}
          <div className="relative ml-2 flex" ref={profileRef}>
            <button
              onClick={toggleProfile}
              className="rounded-full bg-gray-800
            text-sm focus:outline-none focus:ring-2 
            "
            >
              <span className="sr-only">Open user menu</span>
              <div className="">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </button>
            {openProfile && (
              <div
                className="absolute right-0  mt-9 mr-4 w-48 origin-top-right rounded-md
              bg-white py-1 shadow-lg ring-1 ring-black
               ring-opacity-5 focus:outline-none
               "
              >
                <div className="transition-all ease-in-out delay-150">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700
                      hover:rounded-md hover:bg-slate-200"
                  >
                    Profile
                  </a>
                  <a
                    className="block px-4 py-2 text-gray-700
                      hover:rounded-md hover:bg-slate-200"
                    href="#"
                  >
                    Settings
                  </a>
                  <a
                    className="block px-4 py-2 text-gray-700
                      hover:rounded-md hover:bg-slate-200"
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="block px-4 py-2 text-gray-700
                      hover:rounded-md hover:bg-slate-200"
                    href="#"
                  >
                    Signout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="absolute w-full space-y-1 bg-gray-800 p-2">
            {navMenu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  item.current
                    ? "bg-gray-700 text-white"
                    : "text-gray-300  hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
