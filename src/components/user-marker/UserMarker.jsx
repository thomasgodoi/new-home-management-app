import React, { useContext, useState } from "react";
import { Button } from "antd";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useMapContext } from "../context/MapContext";

export default function UserMarker() {

    const {
        position,
        setPosition,
        setCoordinates,
        setOpen,
        iconUser
     } = useMapContext();


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
        Salvar marcador?
        <Button onClick={() => setOpen(true)}>Sim</Button>
      </Popup>
    </Marker>
  );
}
