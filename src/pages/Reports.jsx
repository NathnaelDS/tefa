import React from "react";
import Header1 from "../components/Header1";
import AmbulanceIcon from "../components/icons/ambulanceIcon";
import FireIcon from "../components/icons/fireIcon";
import PoliceIcon from "../components/icons/policeIcon";
import PowerIcon from "../components/icons/powerIcon";
import WaterIcon from "../components/icons/waterIcon";
import ReportCard from "../components/ReportCard";

const items = {
  power: {
    name: "power",
    Icon: PowerIcon,
    title: "Power Issue",
  },
  ambulance: {
    name: "ambulance",
    Icon: AmbulanceIcon,
    title: "Ambulance Issue",
  },
  water: {
    name: "water",
    Icon: WaterIcon,
    title: "Water Issue",
  },
  police: {
    name: "police",
    Icon: PoliceIcon,
    title: "Police Issue",
  },
  fire: {
    name: "fire",
    Icon: FireIcon,
    title: "Fire Issue",
  },
};

const reports = [
  {
    issue: items.water,
    location: "Here, Now",
    severity: "13 days brother",
    reportedOn: "Reported on Feb 04, 2021",
  },
  {
    issue: items.power,
    location: "Here, Now",
    severity: "13 days brother",
    reportedOn: "Reported on Feb 04, 2021",
  },
  {
    issue: items.ambulance,
    location: "Here, Now",
    severity: "13 days brother",
    reportedOn: "Reported on Feb 04, 2021",
  },
  {
    issue: items.police,
    location: "Here, Now",
    severity: "13 days brother",
    reportedOn: "Reported on Feb 04, 2021",
  },
  {
    issue: items.fire,
    location: "Here, Now",
    severity: "13 days brother",
    reportedOn: "Reported on Feb 04, 2021",
  },
];
export default function Reports() {
  return (
    <>
      {/* Header */}
      <Header1 title="Your reports" />

      <div className="w-full max-w-screen-sm px-8 mx-auto text-gray-800 sm:px-10">
        {/* Iterate over a list of reports */}
        {reports.map((report, index) => (
          <ReportCard
            key={index}
            issue={report.issue}
            location={report.location}
            severity={report.severity}
            reportedOn={report.reportedOn}
          />
        ))}
      </div>
    </>
  );
}
