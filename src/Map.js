import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  console.log("rendering map");
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
        <Marker position={[37.9577384, -122.0710787]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
