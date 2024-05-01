/* eslint-disable */
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Button, Card } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "leaflet/dist/leaflet.css";
import "./MapBoard.css";
import UserMarker from "../user-marker/UserMarker";
import { useMapContext } from "../context/MapContext";
import ModalSaveMarker from "../modals/ModalSaveMarker";
import SavedMarkers from "../saved-markers/SavedMarkers";

export default function MapBoard() {
  const { isEnabled, setIsEnabled, coordinates } = useMapContext();

  return (
    <div style={{ width: "100%" }}>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        onClick={() => setIsEnabled(!isEnabled)}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "10px",
          zIndex: "401",
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0, 0.5)",
        }}
      >
        Adicionar casa
      </Button>
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
            <ModalSaveMarker />
            <UserMarker />
            <div
              style={{
                position: "absolute",
                zIndex: 550,
                left: "50%",
                transform: "translate(-50%,-50%)",
                bottom: "100px",
                padding: "5px 10px",
                color: "white",
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
              }}
            >
              <Card
                size="small"
                style={{
                  textWrap: "nowrap",
                  background: "#1677ff",
                  color: "white",
                  border: "none",
                }}
              >
                Insira um marcador no mapa clique nele para salvar
              </Card>
              )
            </div>
          </>
        )}
      </MapContainer>
    </div>
  );
}
