import React from "react";
import Logo from "../assets/icons/logo512.png";
import Services from "../assets/icons/services.svg";

function AuthFormWrapper({ children }) {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-br from-yellow-100 via-green-200 to-blue-200">
      <div className="flex-1 max-w-3xl mx-4 overflow-hidden bg-white rounded shadow-lg md:grid md:grid-cols-2">
        {/* Left */}
        <div className="left bg-gradient-to-b from-blue-100 to-white">
          <div className="flex flex-col items-center pt-6 pb-10 md:pb-48 md:pt-36">
            <img
              style={{
                filter: "drop-shadow(rgba(0, 0, 0, 0.4) 2px 4px 4px)",
              }}
              className="hidden h-24 mb-24 md:block"
              src={Logo}
              width="96px"
              alt="tefa logo"
            />
            <p className="pb-5 font-bold">Report Issues with Essentials</p>
            <img
              src={Services}
              alt="Power, Ambulance, Water, Police, and Fire"
            />
          </div>
        </div>

        {/* Right */}
        <div className="grid items-center">{children}</div>
      </div>
    </div>
  );
}

export default AuthFormWrapper;
