import React, { createContext, useContext, useState } from "react";
import L from "leaflet";
import { notification } from "antd";

const MapContext = createContext();

export function MapProvider({ children }) {
  const [coordinates, setCoordinates] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [modalSaveMarkerOpen, setModalSaveMarkerOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [homeFinishMonth, setHomeFinishMonth] = useState("");
  const [homeFinishYear, setHomeFinishYear] = useState("");
  const [api, notificationContextHolder] = notification.useNotification();

  const iconUser = L.icon({
    iconUrl: "/map-icons/marker-icon.png",
    shadowUrl: "/map-icons/marker-shadow.png",
  });

  function openNotification(type, message, description) {
    return api[type]({
      message: <b>{message}</b>,
      description: description,
      placement: "topRight",
    });
  }

  return (
    <MapContext.Provider
      value={{
        iconUser,
        coordinates,
        setCoordinates,
        position,
        setPosition,
        modalSaveMarkerOpen,
        setModalSaveMarkerOpen,
        isEnabled,
        setIsEnabled,
        homeFinishMonth,
        setHomeFinishMonth,
        homeFinishYear,
        setHomeFinishYear,
        api,
        notificationContextHolder,
        openNotification,
      }}
    >
      {children}
      {notificationContextHolder}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  return useContext(MapContext);
}
