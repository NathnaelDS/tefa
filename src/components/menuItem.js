import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ link, Icon, name, description }) {
  return (
    <Link
      className="flex justify-between w-full mx-1 my-6 duration-150 ease-out border border-teal-400 rounded shadow-sm cursor-pointer hover:shadow-lg"
      to={link}
    >
      <div className="px-6 py-4">
        <div className="mb-1 font-bold text-gray-800 uppercase sm:text-base">
          {name}
        </div>
        <div className="text-sm text-gray-800 sm:text-base">{description}</div>
      </div>
      <Icon className="pr-6" />
    </Link>
  );
}

export default MenuItem;
