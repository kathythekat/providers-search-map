import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import providers from "./providers_with_specialties.json";
import specialtiesCodes from "./specialties.json";

const Map = ({ specialty }) => {
  console.log("map being rendered");
  console.log("SPECIALTY", specialty);
  const [providersData, setProvidersData] = useState([]);

  useEffect(() => {
    function filterResults() {
      const filteredResults = providers.filter((provider) =>
        provider.specialties.some((sp) => specialtiesCodes[sp] === specialty[0])
      );
      setProvidersData(filteredResults.slice(0, 100));
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
          providersData.map((p) => (
            <Marker
              position={[p.location.latLng.lat, p.location.latLng.lng]}
              key={p.id}
            >
              <Popup>{p.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
};

export default React.memo(Map);
