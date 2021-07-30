import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import providers from "./providers_with_specialties.json";
import specialtiesCodes from "./specialties.json";

const Map = ({ specialty }) => {
  console.log("map being rendered");
  console.log("SPECIALTY", specialty);
  const [providerLocation, setProviders] = useState(null);
  const [providerInfo, setProviderInfo] = useState(null);

  useEffect(() => {
    function filterResults() {
      const filteredResults = providers.filter((provider) =>
        provider.specialties.some((sp) => specialtiesCodes[sp] === specialty[0])
      );
      setProviderInfo(filteredResults[0]);
      setProviders(filteredResults[0].location.latLng);
      console.log(providerLocation);
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
        {providerLocation ? (
          <Marker position={[providerLocation.lat, providerLocation.lng]}>
            <Popup>{providerInfo.name}</Popup>
          </Marker>
        ) : (
          <Marker position={[37.9577384, -122.0710787]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};

export default React.memo(Map);
