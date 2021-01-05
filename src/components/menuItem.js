import React from "react";
import { useHistory } from "react-router-dom";

function MenuItem({ link, Icon, name }) {
  const history = useHistory();

  return (
    <div
      className="flex flex-col items-center w-20 mx-1 my-6 border border-green-100 rounded shadow-sm cursor-pointer hover:shadow-md sm:w-24 sm:m-6"
      onClick={() => history.push(link)}
    >
      <Icon width={40} height={40} />
      <div className="text-xs font-bold text-gray-800 sm:text-base">{name}</div>
    </div>
  );
}

export default MenuItem;
