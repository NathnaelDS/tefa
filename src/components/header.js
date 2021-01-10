import React from "react";
import { useHistory } from "react-router-dom";
import BackArrow from "./icons/backArrow";
import Info from "./icons/info";

function Header({ name, Icon, color }) {
  const history = useHistory();
  return (
    <div
      className={`flex items-center justify-between h-20 px-6 border ${color}`}
    >
      <div
        className="flex items-center cursor-pointer"
        onClick={() => history.push("/")}
      >
        <BackArrow />
        <div className="hidden pl-2 text-sm font-bold sm:block">Back</div>
      </div>
      <div className="flex flex-col items-center">
        <Icon />
        <div className="mt-1 text-xs font-bold uppercase">{name}</div>
      </div>
      <div className="p-1 bg-white rounded-full shadow-lg cursor-pointer">
        <a href="#basicInfo">
          <Info />
        </a>
      </div>
    </div>
  );
}

export default Header;
