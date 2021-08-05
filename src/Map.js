import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import filterProviders from "./helpers/filterProviders";
import MarkerClusterGroup from "react-leaflet-markercluster";
import providers from "./providers_with_specialties.json";

const Map = ({ specialty, defaultCoords }) => {
  console.log("map being rendered");
  const [providersData, setProvidersData] = useState([]);

  useEffect(() => {
    function filterResults() {
      const providersBasedOnSpecialty = filterProviders(specialty);
      console.log(providersBasedOnSpecialty);
      setProvidersData(providersBasedOnSpecialty);
    }
    if (specialty) filterResults();
  }, [specialty]);

  return (
    <>
      <MapContainer
        className="relative w-screen"
        style={{ height: "100%" }}
        center={defaultCoords}
        zoom={4}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {providersData &&
            providersData.map((provider) => (
              <Marker
                position={[
                  provider.location.latLng.lat,
                  provider.location.latLng.lng,
                ]}
                center={[
                  provider.location.latLng.lat,
                  provider.location.latLng.lng,
                ]}
                key={provider.id}
              >
                <Popup>
                  <ul>
                    <li>{provider.name}</li>
                    <li>
                      {provider.location.address.city},{" "}
                      {provider.location.address.state}
                    </li>
                  </ul>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default React.memo(Map);
