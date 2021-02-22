import React from "react";
import MenuItem from "../components/menuItem";
import Header1 from "../components/Header1";
import AmbulanceIcon from "../components/icons/ambulanceStroke";
import FireIcon from "../components/icons/fireStroke";
import PoliceIcon from "../components/icons/policeStroke";
import PowerIcon from "../components/icons/powerStroke";
import WaterIcon from "../components/icons/waterStroke";

const items = [
  {
    name: "Power",
    link: "/power",
    Icon: PowerIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Ambulance",
    link: "/ambulance",
    Icon: AmbulanceIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Water",
    link: "/water",
    Icon: WaterIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Police",
    link: "/police",
    Icon: PoliceIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Fire",
    link: "/fire",
    Icon: FireIcon,
    description: "Power and Electricity related propblems",
  },
];

function Home() {
  return (
    <>
      {/* Header */}
      <Header1 title="What are you reporting?" />

      {/* Body */}
      <div className="w-full max-w-screen-sm px-8 mx-auto sm:px-10">
        {items.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            link={item.link}
            Icon={item.Icon}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
