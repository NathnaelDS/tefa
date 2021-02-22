import React, { useState } from "react";
import Header1 from "../components/Header1";
import { captureFormData } from "../utils/captureFormData";

export default function Settings() {
  const [location, setLocation] = useState(undefined);
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

    console.log(captureFormData(event));
    // todo: location
    if (location === undefined) {
      setIncompleteFields(["location"]);
      return false;
    }

    setIncompleteFields([]);
    const formLocationData = { type: "manual", place: captureFormData(event) };

    const formData = {
      location: automaticLocation ? location : formLocationData,
    };

    console.log(formData);
  }

  return (
    <>
      {/* Header */}
      <Header1 title="Settings" />

      <div>
        <h2 className="max-w-xl px-6 mx-auto mt-12 text-lg font-bold">
          Set a default location
        </h2>
        <form onSubmit={submitForm}>
          {/* <form onSubmit={(event) => submitForm(event)}> */}
          <div className="max-w-xl mx-auto">
            <div className="px-6 mt-4">
              {/* Name your place */}
              <label htmlFor="">
                What would you like to call this place?
                <input
                  className="block w-full px-2 py-1 mt-1 border-b-2 outline-none focus:border-green-900 focus:ring"
                  type="text"
                />
              </label>

              {/* Automatic/Manual Location Switch */}
              <div className="flex items-center mt-8 mb-4">
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
                  <p className="mb-4 text-sm text-gray-700">
                    Uses your device’s GPS or internet connection to get your
                    current location.
                  </p>
                  {/* Auto Location */}
                  {location !== undefined ? (
                    <>
                      <div>Latitude: {location?.place?.latitude}</div>
                      <div>Longitude: {location?.place?.longitude}</div>
                      <div>Accuracy in Meters: {location?.place?.accuracy}</div>
                      <a
                        className="block mt-2 text-blue-800 underline"
                        href={`https://www.google.com/maps/?q=${location?.place?.latitude},${location?.place?.longitude}`}
                      >
                        Check your position on a map
                      </a>
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

            <button
              type="submit"
              className="flex px-4 py-2 mx-auto my-16 font-bold bg-teal-200 rounded"
            >
              Save this location
              {/* <div className="ml-2 text-lg text-green-900">
              </div> */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
