import React, { createContext, useContext, useState } from "react";

const MapContext = createContext();

export function MapProvider({ children }) {
  const [coordinates, setCoordinates] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [homeFinishMonth, setHomeFinishMonth] = useState("");
  const [homeFinishYear, setHomeFinishYear] = useState("");

  return (
    <MapContext.Provider
      value={{
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
        setHomeFinishYear
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export function useMapContext() {
  return useContext(MapContext);
}
