import React from "react";
import BasicInfoIcon from "./icons/basicInfoIcon";

function BasicInfo({ data, ...props }) {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center mx-auto">
        <BasicInfoIcon />
        <div className="text-xs font-bold text-green-900 uppercase">
          Basic Information
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto mt-6">
        <div className="text-xs font-medium text-gray-800 uppercase">
          Emergency Number
        </div>
        <a
          href={`tel:${data.emergencyNumber}`}
          className="text-2xl font-bold text-green-900 underline"
        >
          {data.emergencyNumber}
        </a>
      </div>
      <div className="flex flex-wrap justify-between max-w-xl mx-auto mt-6">
        {data.phoneNumbers.map((item) => (
          <div key={item.name} className="mx-2 mb-6">
            <div className="text-xs">{item.name}</div>
            <a
              href={`tel:${item.phone}`}
              className="font-bold text-green-900 underline"
            >
              {item.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BasicInfo;
