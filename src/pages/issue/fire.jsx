import React from "react";
import Header from "../../components/header";
import FireIcon from "../../components/icons/fireIcon";
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

function Fire() {
  return (
    <div>
      <Header name="Fire" Icon={FireIcon} color="bg-orange-100" />
      <hr />
      <BasicInfo data={data} className="p-10 bg-orange-300" />
    </div>
  );
}

export default Fire;
