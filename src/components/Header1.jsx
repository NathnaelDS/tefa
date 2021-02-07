import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ExitIcon from "./icons/ExitIcon";
import MenuIcon from "./icons/menuIcon";

export default function Header1({ title }) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const { currentUser, signOut } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative flex items-center">
      {/* Open/Close Menu Button */}
      <div className="flex">
        {openMenu ? (
          <button
            className="rounded cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <ExitIcon className="box-content p-6 transition duration-150 transform hover:scale-125" />
          </button>
        ) : (
          <button
            className="rounded cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon className="box-content p-6 transition duration-150 transform hover:scale-125" />
          </button>
        )}
      </div>

      <div className="flex-grow pr-16 font-medium text-center">{title}</div>

      {/* Fly out menu */}
      {openMenu && (
        <div
          ref={menuRef}
          className={
            "absolute top-0 left-0 w-screen h-screen py-4 px-12 bg-teal-100 rounded rounded-l-none shadow-md sm:shadow-lg md:w-1/3 sm:w-1/2"
          }
        >
          <div className="flex justify-end mb-4">
            <button
              className="rounded cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ExitIcon className="box-content p-4 transition duration-150 transform hover:scale-125" />
            </button>
          </div>

          <div className="mb-8 font-mono text-2xl text-gray-700">
            {currentUser?.phoneNumber}
          </div>

          <div className="space-y-2 font-bold text-gray-900">
            <Link
              to="/"
              className="block w-full px-2 py-2 rounded cursor-pointer hover:bg-gray-300"
            >
              Home
            </Link>
            <Link
              to="/reports"
              className="block w-full px-2 py-2 rounded cursor-pointer hover:bg-gray-300"
            >
              Your Reports
            </Link>
            <Link
              to="/settings"
              className="block w-full px-2 py-2 rounded cursor-pointer hover:bg-gray-300"
            >
              Settings
            </Link>
            <button
              onClick={signOut}
              className="block w-full px-2 py-2 font-bold text-left rounded cursor-pointer hover:bg-gray-300"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
