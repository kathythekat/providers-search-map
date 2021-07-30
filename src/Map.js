import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import filterProviders from "./helpers/filterProviders";

const Map = ({ specialty }) => {
  console.log("map being rendered");
  console.log("SPECIALTY", specialty);
  const [providersData, setProvidersData] = useState([]);

  useEffect(() => {
    function filterResults() {
      const providersBasedOnSpecialty = filterProviders(specialty);
      setProvidersData(providersBasedOnSpecialty.slice(0, 100));
    }
    if (specialty) filterResults();
  }, [specialty]);

  return (
    <>
      <MapContainer
        className="relative w-screen"
        style={{ height: "100%" }}
        center={[37.9295254, -101.2235221]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {providersData &&
          providersData.map((provider) => (
            <Marker
              position={[
                provider.location.latLng.lat,
                provider.location.latLng.lng,
              ]}
              key={provider.id}
            >
              <Popup>{provider.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
};

export default React.memo(Map);
