import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import AmbulanceIcon from "../components/icons/ambulanceIcon";
import FireIcon from "../components/icons/fireIcon";
import PoliceIcon from "../components/icons/policeIcon";
import PowerIcon from "../components/icons/powerIcon";
import WaterIcon from "../components/icons/waterIcon";
import Header1 from "../components/Header1";

const items = [
  { name: "Power", link: "/power", icon: PowerIcon },
  { name: "Ambulance", link: "/ambulance", icon: AmbulanceIcon },
  { name: "Water", link: "/water", icon: WaterIcon },
  { name: "Police", link: "/police", icon: PoliceIcon },
  { name: "Fire", link: "/fire", icon: FireIcon },
];

mapboxgl.accessToken =
  "pk.eyJ1IjoibmF0aWRlamVuZSIsImEiOiJja2xkOGowczkxY2dqMm9zOHhhbmhpM2drIn0.ufYeKFwwHrNfrB3ocDcv_Q";

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [38.75, 8.98],
      },
      properties: {
        title: "Addis Baby",
        description: "Addis Ababa, Ethiopia",
      },
    },
  ],
};

function HomeResponder() {
  const [mapState, setMapState] = useState({
    lng: 38.75,
    lat: 8.98,
    zoom: 10.75,
  });
  let mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState.lng, mapState.lat],
      zoom: mapState.zoom,
    });

    map.on("move", () => {
      setMapState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // todo: maybe add to a different useEffect when I have to fetch geoJson from the backend
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h3 class='font-bold'>" +
                marker.properties.title +
                "</h3><p>" +
                marker.properties.description +
                "</p>"
            )
        )
        .addTo(map);
    });
  }, []);

  return (
    <div>
      <Header1 title="Responder Dashboard" />
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className=""
        // className="flex-grow"
        ref={(el) => (mapContainer = el)}
      />
      {/* <div className="relative flex-1">
      </div> */}
    </div>
  );
}

export default HomeResponder;
