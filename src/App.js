import "@fontsource/roboto/300.css";
import "./App.css";

import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import MapBoard from "./components/map-board/MapBoard";
import React from "react";
import { MapProvider } from "./components/context/MapContext";

function App() {
  return (
    <div id="app">
      <MapProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/map-board" element={<MapBoard />} />
        </Routes>
      </MapProvider>
    </div>
  );
}

export default App;
