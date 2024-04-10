/* eslint-disable */
import React, { useRef, useState } from "react";
import L, { map } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Modal, Button } from "antd";

import "leaflet/dist/leaflet.css";
import "./MapBoard.css";

export default function MapBoard() {
  const [open, setOpen] = useState(false);
  const [coordinates, setCoordinates] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const iconUser = L.icon({
    iconUrl: "/map-icons/marker-icon.png",
    shadowUrl: "/map-icons/marker-shadow.png",
  });

  function onClickShowMarker() {
    markerRef.current = addTo(map);
  }

  function UserMarker() {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
        setCoordinates([lat, lng]);
      },
    });

    return (
      <Marker
        position={[position.latitude, position.longitude]}
        icon={iconUser}
      >
        <Popup>
          Salvar marcador?
          <Button onClick={() => setOpen(true)}>Sim</Button>
        </Popup>
      </Marker>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <Button onClick={() => onClickShowMarker()}>Save inserted marker</Button>
      <Button onClick={() => setIsEnabled(!isEnabled)}>Add marker</Button>
      <div>
        <MapContainer
          center={[-23.241119, -45.916765]}
          zoom={13}
          scrollWheelZoom
          id="map"
          ref={mapRef}
        >
          <TileLayer
            url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
            maxZoom={25}
            minZoom={15}
          />
          {isEnabled && (
            <>
              <UserMarker />
              <div
                style={{
                  position: "absolute",
                  zIndex: 550,
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  bottom: "200px",
                  width: "200px",
                  padding: "5px 10px",
                  background: "black",
                  color: "white",
                }}
              >
                <span>Clique para adicionar um marcador</span>
              </div>
            </>
          )}
        </MapContainer>
      </div>
      <Modal open={open} onCancel={() => setOpen(false)}>
        Lat: {coordinates[0]}
        Lon: {coordinates[1]}
      </Modal>
    </div>
  );
}
