import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// You need this to fix the default marker icon issue in Leaflet when using it with Webpack
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const position = [22.992593545127082, 88.4487911059281];
  return (
    <div className="sm:w-[50%] w-full sm:h-full h-[50vh] z-[1]">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%", zIndex: -1 }} // Set z-index lower here
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            SAC KGEC <br /> This is where Student's Automobile Club of KGEC is
            located.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
