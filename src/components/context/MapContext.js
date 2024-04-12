import React, { createContext, useContext, useState } from "react";
import L from "leaflet"

const MapContext = createContext();

export function MapProvider({ children }) {
  const [coordinates, setCoordinates] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [homeFinishMonth, setHomeFinishMonth] = useState("");
  const [homeFinishYear, setHomeFinishYear] = useState("");
  const iconUser = L.icon({
    iconUrl: "/map-icons/marker-icon.png",
    shadowUrl: "/map-icons/marker-shadow.png",
  });

  return (
    <MapContext.Provider
      value={{
        iconUser,
        coordinates,
        setCoordinates,
        position,
        setPosition,
        open,
        setOpen,
        isEnabled,
        setIsEnabled,
        homeFinishMonth,
        setHomeFinishMonth,
        homeFinishYear,
        setHomeFinishYear,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  return useContext(MapContext);
}
