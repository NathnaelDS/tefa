import React from "react";
import Header from "../../components/header";
import WaterIcon from "../../components/icons/waterOutline";
import BasicInfo from "../../components/basicInfo";

const data = {
  emergencyNumber: "905",
  phoneNumbers: [
    { name: "North Addis Ababa", phone: "+251911223344" },
    { name: "East Addis Ababa", phone: "+251911223344" },
    { name: "West Addis Ababa", phone: "+251911223344" },
    { name: "South Addis Ababa", phone: "+251911223344" },
  ],
};

function Water() {
  return (
    <div>
      <Header name={"Water"} icon={WaterIcon} color="bg-teal-100" />
      <hr />
      <BasicInfo data={data} className="p-10 bg-teal-300" />
    </div>
  );
}

export default Water;
