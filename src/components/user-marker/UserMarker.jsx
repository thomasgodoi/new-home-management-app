import React from "react";
import { Button } from "antd";
import {
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useMapContext } from "../context/MapContext";

export default function UserMarker() {
  const {
    position,
    setPosition,
    setCoordinates,
    setModalSaveMarkerOpen,
    iconUser,
  } = useMapContext();

  const map = useMap();

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
      setCoordinates([lat.toFixed(6), lng.toFixed(6)]);
    },
  });

  return (
    <Marker position={[position.latitude, position.longitude]} icon={iconUser}>
      <Popup>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          Deseja salvar essa localização?
          <div
            style={{
              width: "100%",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button style={{background: "#C35354"}} type="primary" danger onClick={() => map.closePopup()}>
              Não
            </Button>
            <Button style={{background: "#008E56"}} type="primary" onClick={() =>{ setModalSaveMarkerOpen(true); map.closePopup()}}>
              Sim
            </Button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
