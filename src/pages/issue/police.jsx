import React from "react";
import Header from "../../components/header";
import PoliceIcon from "../../components/icons/policeOutline";
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

function Police() {
  return (
    <div>
      <Header name="Police" Icon={PoliceIcon} color="bg-blue-100" />
      <hr />
      <BasicInfo data={data} className="p-10 bg-blue-300" />
    </div>
  );
}

export default Police;
