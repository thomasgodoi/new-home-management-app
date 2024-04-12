/* eslint-disable */
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button } from "antd";

import "leaflet/dist/leaflet.css";
import "./MapBoard.css";
import UserMarker from "../user-marker/UserMarker";
import { useMapContext } from "../context/MapContext";
import ModalSaveMap from "../modals/ModalSaveMap";
import SavedMarkers from "../saved-markers/SavedMarkers";

export default function MapBoard() {
  const { setOpen, isEnabled, setIsEnabled, coordinates } = useMapContext();

  return (
    <div style={{ width: "100%" }}>
      <Button onClick={() => setOpen(true)}>Save inserted marker</Button>
      <Button onClick={() => setIsEnabled(!isEnabled)}>Add marker</Button>
      <MapContainer
        center={[-23.241119, -45.916765]}
        zoom={13}
        scrollWheelZoom
        id="map"
      >
        <TileLayer
          url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
          maxZoom={25}
          minZoom={15}
        />
        <SavedMarkers />
        {isEnabled && (
          <>
            <ModalSaveMap />
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
              <span>
                {coordinates.length > 0
                  ? `Clique sobre o marcador para salvar`
                  : `Insira um marcador no mapa`}
              </span>
            </div>
          </>
        )}
      </MapContainer>
    </div>
  );
}
