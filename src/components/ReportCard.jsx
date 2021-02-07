import React from "react";
import SeverityIcon from "../components/icons/severityIcon";
import LocationIcon from "../components/icons/locationIcon";

function ReportCard({ issue, location, severity, reportedOn }) {
  const colors = {
    power: "flex px-8 py-3 mb-2 bg-purple-100",
    ambulance: "flex px-8 py-3 mb-2 bg-red-100",
    water: "flex px-8 py-3 mb-2 bg-blue-100",
    police: "flex px-8 py-3 mb-2 bg-yellow-100",
    fire: "flex px-8 py-3 mb-2 bg-orange-100",
  };

  return (
    <div className="mb-10 overflow-hidden rounded-lg shadow-md">
      <div className={colors[issue.name]}>
        <img className="mr-3" src={issue.icon} width="20" alt="" />
        <div>{issue.title}</div>
      </div>
      <div className="flex px-8 py-2">
        <LocationIcon className="mr-3 text-gray-600" />
        <div>{location}</div>
      </div>
      <div className="flex px-8 py-2">
        <SeverityIcon className="mr-3 text-gray-600" />
        <div>{severity}</div>
      </div>
      <div className="px-8 py-3 text-sm">{reportedOn}</div>
    </div>
  );
}

export default ReportCard;
