import React from "react";
import SeverityIcon from "../components/icons/severityIcon";
import LocationIcon from "../components/icons/locationIcon";

function ReportCard({ issue, location, severity, reportedOn }) {
  const colors = {
    power: "flex items-end px-8 py-3 mb-2 bg-purple-100",
    ambulance: "flex items-end px-8 py-3 mb-2 bg-red-100",
    water: "flex items-end px-8 py-3 mb-2 bg-blue-100",
    police: "flex items-end px-8 py-3 mb-2 bg-yellow-100",
    fire: "flex items-end px-8 py-3 mb-2 bg-orange-100",
  };

  const Icon = issue.Icon;

  return (
    <div className="mb-10 overflow-hidden rounded-lg shadow-md">
      <div className={colors[issue.name]}>
        <Icon className="mr-3" />
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
