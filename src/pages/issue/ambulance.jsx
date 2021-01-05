import React from "react";
import Header from "../../components/header";
import AmbulanceIcon from "../../components/icons/ambulanceIcon";
import BasicInfo from "../../components/basicInfo";

const data = {
  emergencyNumber: "911",
  phoneNumbers: [
    { name: "North Addis Ababa", phone: "+251911223344" },
    { name: "East Addis Ababa", phone: "+251911223344" },
    { name: "West Addis Ababa", phone: "+251911223344" },
    { name: "South Addis Ababa", phone: "+251911223344" },
  ],
};

function Ambulance() {
  return (
    <div>
      <Header name={"Ambulance"} Icon={AmbulanceIcon} color="bg-red-100" />
      <hr />
      <BasicInfo data={data} className="p-10 bg-red-300" />
    </div>
  );
}

export default Ambulance;
