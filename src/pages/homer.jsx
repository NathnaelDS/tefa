import React, { useState, useEffect } from "react";
import AmbulanceIcon from "../components/icons/ambulanceIcon";
import FireIcon from "../components/icons/fireIcon";
import PoliceIcon from "../components/icons/policeIcon";
import PowerIcon from "../components/icons/powerIcon";
import WaterIcon from "../components/icons/waterIcon";
import MenuIcon from "../components/icons/menuIcon";
import ExitIcon from "../components/icons/ExitIcon";
import ReportCardResponder from "../components/reportCardResponder";
import useClickOutside from "../hooks/useClickOutside";

const items = [
  { name: "Power", link: "/power", icon: PowerIcon },
  { name: "Ambulance", link: "/ambulance", icon: AmbulanceIcon },
  { name: "Water", link: "/water", icon: WaterIcon },
  { name: "Police", link: "/police", icon: PoliceIcon },
  { name: "Fire", link: "/fire", icon: FireIcon },
];

function HomeResponder() {
  const [reportModalOpen, setReportModalOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const { ref, outside } = useClickOutside();
  const { ref: modalRef, outside: modalOutside } = useClickOutside();

  useEffect(() => {
    if (outside) {
      setOpenMenu(false);
    }
  }, [outside]);

  useEffect(() => {
    if (modalOutside) {
      setReportModalOpen(false);
    }
  }, [modalOutside]);

  return (
    <>
      <div className="relative mr-4 border">
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
            ref={ref}
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
      <div
        className="grid justify-center px-6"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 360px)",
          gridGap: "3rem",
        }}
      >
        {items.map((item) => (
          <ReportCardResponder
            key={item.name}
            report={item}
            openReport={() => setReportModalOpen(true)}
          />
        ))}
      </div>
      {reportModalOpen && (
        <div
          className="fixed inset-0 flex items-center"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0, 0.5)",
          }}
        >
          <div
            ref={modalRef}
            className="flex m-auto overflow-hidden rounded shadow-xl"
            style={{
              maxWidth: "max-content",
            }}
          >
            {/* 1st Column */}
            <div
              className="grid items-center justify-center bg-teal-600"
              style={{
                width: 380,
                height: 540,
              }}
            >
              <div className="space-y-3">
                <div className="text-xl font-bold">27 Reports</div>
                <div className="flex items-center">
                  <div className="text-xl font-bold">Power Outage</div>
                  <div
                    className="w-2 h-2 mx-2 bg-gray-900"
                    style={{ borderRadius: "100%" }}
                  ></div>
                  <div className="text-xl font-bold">4 Days</div>
                </div>
                <div className="">
                  <div className="font-bold">Yeka, Woreda 11</div>
                  <div className="font-bold">9.00003343, 38.92315145</div>
                </div>
              </div>
            </div>

            {/* 2nd Column */}
            <div
              className="bg-teal-200"
              style={{
                width: 380,
                height: 540,
              }}
            >
              <div className="flex justify-end" style={{ height: "13%" }}>
                <button
                  className="rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <ExitIcon className="box-content p-6 text-gray-700 hover:text-black" />
                </button>
              </div>
              <div
                className="px-20 pt-4 pb-12 overflow-y-auto"
                style={{ height: "87%" }}
              >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                  <div className="flex items-center pb-8">
                    <div className="">
                      <div
                        className="text-xs"
                        // onClick={() => openReport()}
                      >
                        Kolfe Keranio doro bet
                      </div>
                      <div className="text-xs uppercase">Arnold Johnson</div>
                      <div className="text-xs">+251 911 23 45 67</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeResponder;
