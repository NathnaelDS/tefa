import React, { useState, useRef, useEffect } from "react";
import MenuItem from "../components/menuItem";
import AmbulanceIcon from "../components/icons/ambulanceIcon";
import FireIcon from "../components/icons/fireIcon";
import PoliceIcon from "../components/icons/policeIcon";
import PowerIcon from "../components/icons/powerIcon";
import WaterIcon from "../components/icons/waterIcon";
import MenuIcon from "../components/icons/menuIcon";
import ExitIcon from "../components/icons/ExitIcon";

const items = [
  { name: "Power", link: "/power", icon: PowerIcon },
  { name: "Ambulance", link: "/ambulance", icon: AmbulanceIcon },
  { name: "Water", link: "/water", icon: WaterIcon },
  { name: "Police", link: "/police", icon: PoliceIcon },
  { name: "Fire", link: "/fire", icon: FireIcon },
];

function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

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
    <>
      <div className="relative mr-4">
        <div className="flex justify-end">
          {openMenu ? (
            <button
              className="rounded cursor-pointer focus:outline-none focus:shadow-outline hover:shadow-sm"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <ExitIcon className="box-content p-6 hover:text-teal-600 " />
            </button>
          ) : (
            <button
              className="rounded cursor-pointer focus:outline-none focus:shadow-outline hover:shadow-sm"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MenuIcon className="box-content p-6 hover:text-teal-600 " />
            </button>
          )}
        </div>
        {openMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 p-4 mt-2 space-y-1 bg-gray-100 rounded shadow-md"
          >
            <button className="block w-full px-2 py-1 text-left rounded cursor-pointer hover:bg-gray-300">
              Change to Amharic
            </button>
            <button className="block w-full px-2 py-1 text-left rounded cursor-pointer hover:bg-gray-300">
              Log Out
            </button>
          </div>
        )}
      </div>
      <div className="mt-16 mb-12 text-xl font-medium text-center">
        What are you reporting?
      </div>
      <div className="flex flex-wrap justify-center max-w-screen-sm px-6 mx-auto sm:px-10">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            link={item.link}
            Icon={item.icon}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
