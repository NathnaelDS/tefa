import React from "react";
import InfoResponder from "../components/icons/infoResponder";
import LocationResponder from "../components/icons/locationResponder";
import ListResponder from "../components/icons/listResponder";
import UserResponder from "../components/icons/userResponder";

/* 
individual or list (aggregate)
{
    type
    severity
    location - name AND/OR latitude-longitude
    name
    phone
    timestamp

}
*aggregate based on location?
aggregate {
    list of individual reports
}
*/

function ReportCardResponder({ openReport }) {
  return (
    <div className="shadow-md">
      {/* <div className="mb-12 mr-12 shadow-md"> */}
      <div
        className="px-8 pt-6 bg-teal-100 rounded-t"
        style={{ width: 360, height: 200 }}
      >
        {/* First Row */}
        <div className="flex items-center mb-5">
          <div className="mr-6" style={{ width: 24, height: 24 }}>
            <InfoResponder />
          </div>
          <div className="flex items-center">
            <div className="text-xl font-bold">Power Outage</div>
            <div
              className="w-2 h-2 mx-2 bg-gray-900"
              style={{ borderRadius: "100%" }}
            ></div>
            <div className="text-xl font-bold">4 Days</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex items-center mb-5">
          <div className="mr-6" style={{ width: 24, height: 24 }}>
            <LocationResponder />
          </div>
          <div className="">
            <div className="font-bold">Yeka, Woreda 11</div>
            <div className="font-bold">9.00003343, 38.92315145</div>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex items-center pb-8">
          <div className="mr-6" style={{ width: 24, height: 24 }}>
            <ListResponder />
            <UserResponder />
          </div>
          <div className="">
            <div className="text-xs capitalize">27 reports</div>
            <div
              className="text-xs underline cursor-pointer"
              onClick={() => openReport()}
            >
              See Individual Reports
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2" style={{ height: 50 }}>
        <button className="bg-gray-400 hover:bg-gray-800 hover:text-gray-100">
          One
        </button>
        <button className="bg-gray-400 hover:bg-gray-800 hover:text-gray-100">
          Two
        </button>
      </div>
    </div>
  );
}

export default ReportCardResponder;
