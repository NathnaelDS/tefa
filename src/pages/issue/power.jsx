import React, { useState } from "react";
import Header from "../../components/header";
import BasicInfo from "../../components/basicInfo";
import PowerIcon from "../../components/icons/powerOutline";
import SeverityIcon from "../../components/icons/severityIcon";
import TypeIcon from "../../components/icons/typeIcon";
import SendIcon from "../../components/icons/sendIcon";
import { captureFormData } from "../../utils/captureFormData";

const data = {
  emergencyNumber: "905",
  phoneNumbers: [
    { name: "North Addis Ababa", phone: "+251911223344" },
    { name: "East Addis Ababa", phone: "+251911223344" },
    { name: "West Addis Ababa", phone: "+251911223344" },
    { name: "South Addis Ababa", phone: "+251911223344" },
  ],
};

function Power() {
  const [location, setLocation] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [severity, setSeverity] = useState(undefined);
  const [automaticLocation, setAutomaticLocation] = useState(false);
  const [incompleteFields, setIncompleteFields] = useState([]);

  function geoFindMe() {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      setLocation({
        type: "automatic",
        place: {
          accuracy,
          latitude,
          longitude,
        },
      });
    }

    function error() {
      const err = "Unable to retrieve your location";
      console.log("err: ", err);
    }

    if (!navigator.geolocation) {
      const notSupported = "Geolocation is not supported by your browser";
      console.log(notSupported);
    } else {
      const locating = "Locating…";
      console.log(locating);
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        maximumAge: 100,
        timeout: 3000,
      });
    }
  }

  const handleChange = (event) => {
    setLocation({
      type: "manual",
      place: { ...location?.place, [event.target.name]: event.target.value },
    });
    // setLocation({ ...location, [event.target.name]: event.target.value });
    return event.target;
  };

  function submitForm(event) {
    event.preventDefault();

    // todo: location
    if (location === undefined) {
      setIncompleteFields(["location"]);
      return false;
    }

    // todo: type
    if (type === undefined) {
      setIncompleteFields(["type"]);
      return false;
    }

    // todo: severity
    if (severity === undefined) {
      setIncompleteFields(["severity"]);
      return false;
    }

    setIncompleteFields([]);
    const formLocationData = { type: "manual", place: captureFormData(event) };

    const formData = {
      location: automaticLocation ? location : formLocationData,
      type: type,
      severity: severity,
    };

    console.log(formData);
  }

  return (
    <div>
      <Header name={"Power"} Icon={PowerIcon} color="bg-purple-100" />
      <hr />

      <form onSubmit={submitForm}>
        {/* <form onSubmit={(event) => submitForm(event)}> */}
        <div className="max-w-xl mx-auto">
          <div className="px-6 mt-12">
            <div className="flex items-center mb-8">
              <TypeIcon />
              <div className="ml-2 font-bold text-gray-800">Location</div>
            </div>

            {/* Automatic/Manual Location Switch */}
            <div className="flex items-center mb-4">
              <div className="pr-6">Find Location Automatically</div>
              <label className="switch">
                <input
                  id="automaticLocation"
                  className="sliderCheckbox"
                  type="checkbox"
                  onChange={() => setAutomaticLocation(!automaticLocation)}
                />
                <span className="slider" />
              </label>
              {/* {automaticLocation ? (
                <button
                  type="button"
                  className="px-3 py-2 bg-teal-200 rounded"
                  onClick={() => setAutomaticLocation(false)}
                >
                  ON
                </button>
              ) : (
                <button
                  type="button"
                  className="px-3 py-2 bg-teal-200 rounded"
                  onClick={() => setAutomaticLocation(true)}
                >
                  OFF
                </button>
              )} */}
            </div>

            {automaticLocation ? (
              <div>
                {/* Auto Location */}
                {location !== undefined ? (
                  <>
                    <div>Latitude: {location?.place?.latitude}</div>
                    <div>Longitude: {location?.place?.longitude}</div>
                    <div>Accuracy in Meters: {location?.place?.accuracy}</div>
                    <div>
                      <a
                        href={`https://www.google.com/maps/?q=${location?.place?.latitude},${location?.place?.longitude}`}
                      >
                        See your position on a map
                      </a>
                    </div>
                  </>
                ) : null}
                <button
                  type="button"
                  className="px-3 py-2 my-4 bg-teal-200 rounded"
                  onClick={() => geoFindMe()}
                >
                  Find Location
                </button>
                {incompleteFields.includes("location") ? (
                  <div>You need to provide location</div>
                ) : null}
              </div>
            ) : (
              <div>
                {/* Manual Location */}
                <label htmlFor="subCity">Sub City</label>
                <select
                  onChange={handleChange}
                  defaultValue="yeka"
                  name="subCity"
                  id="subCity"
                  className="block w-full px-2 py-1 mt-1 mb-4 bg-white border-b-2 outline-none focus:border-green-900 focus:ring"
                >
                  <option value="yeka">Yeka</option>
                  <option value="bole">Bole</option>
                  <option value="arada">Arada</option>
                  <option value="kirkos">Kirkos</option>
                  <option value="nefas-silk">Nifas Silk Lafto</option>
                  <option value="akaki">Akaki Kaliti</option>
                  <option value="addis-ketema">Addis Ketema</option>
                  <option value="gulele">Gulele</option>
                  <option value="lideta">Lideta</option>
                  <option value="kolfe-keraneyo">Kolfe Keraneyo</option>
                </select>
                {/* <input
                    className="block w-full px-2 py-1 mt-1 mb-4 border-b-2 outline-none focus:border-green-900 focus:ring"
                    type="text"
                    id="sub_city"
                  /> */}
                <label htmlFor="woreda">Woreda</label>
                <input
                  onChange={handleChange}
                  // defaultValue={location.woreda}
                  className="block w-full px-2 py-1 mt-1 mb-4 border-b-2 outline-none focus:border-green-900 focus:ring"
                  type="number"
                  name="woreda"
                  id="woreda"
                  required
                />
                <label htmlFor="more_info">More Info</label>
                <input
                  onChange={handleChange}
                  // defaultValue={location.moreInfo}
                  className="block w-full px-2 py-1 mt-1 border-b-2 outline-none focus:border-green-900 focus:ring"
                  type="text"
                  name="moreInfo"
                  id="more_info"
                />
              </div>
            )}
          </div>

          {/* TYPE OF PROBLEM */}
          <div className="px-6 mt-12">
            <div className="flex items-center mb-8">
              <TypeIcon />
              <div className="ml-2 font-bold text-gray-800">
                Type of Problem
              </div>
            </div>
            <div className="grid sm:block">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setType(index)}
                  className={`inline-block sm:mr-6 mb-6 px-4 py-2 border rounded ${
                    type === index ? "bg-green-700 text-white" : null
                  }`}
                >
                  Option {item}
                </button>
              ))}
            </div>
            {incompleteFields.includes("type") ? (
              <div>You need to provide the type of problem</div>
            ) : null}
          </div>

          {/* SEVERITY OF PROBLEM */}
          <div className="px-6 mt-12">
            <div className="flex items-center mb-8">
              <SeverityIcon />
              <div className="ml-2 font-bold text-gray-800">Severity</div>
            </div>
            <div className="grid sm:block">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSeverity(index)}
                  className={`inline-block sm:mr-6 mb-6 px-4 py-2 border rounded ${
                    severity === index ? "bg-green-700 text-white" : null
                  }`}
                >
                  Option {item}
                </button>
              ))}
            </div>
            {incompleteFields.includes("severity") ? (
              <div>You need to provide the severity of the problem</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-24 px-3 py-2 mx-auto my-16 bg-teal-200 rounded"
          >
            <SendIcon />
            <div className="ml-2 text-lg font-bold text-green-900">Send</div>
          </button>
        </div>
      </form>

      <BasicInfo data={data} className="p-10 bg-purple-300" />
    </div>
  );
}

export default Power;
