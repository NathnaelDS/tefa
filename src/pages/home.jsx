import React from "react";
import MenuItem from "../components/menuItem";
import Header1 from "../components/Header1";
import AmbulanceIcon from "../assets/icons/ambulanceStroke.svg";
import FireIcon from "../assets/icons/fireStroke.svg";
import PoliceIcon from "../assets/icons/policeStroke.svg";
import PowerIcon from "../assets/icons/powerStroke.svg";
import WaterIcon from "../assets/icons/waterStroke.svg";

const items = [
  {
    name: "Power",
    link: "/power",
    icon: PowerIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Ambulance",
    link: "/ambulance",
    icon: AmbulanceIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Water",
    link: "/water",
    icon: WaterIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Police",
    link: "/police",
    icon: PoliceIcon,
    description: "Power and Electricity related propblems",
  },
  {
    name: "Fire",
    link: "/fire",
    icon: FireIcon,
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
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
