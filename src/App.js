import "@fontsource/roboto/300.css";
import "./App.css";

import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import HomesMap from "./components/homes-map/HomesMap";
import React from "react";
import { MapProvider } from "./components/context/MapContext";
import AppHeader from "./components/header/AppHeader";

function App() {
  return (
    <div id="app">
      <MapProvider>
        <div style={{ display: "block", width: "100%" }}>
          <AppHeader />
          <div style={{ width: "60%", margin:"auto", height:"calc(100vh - 74px)", marginTop:"70px" }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/homes-map" element={<HomesMap />} />
            </Routes>
          </div>
        </div>
      </MapProvider>
    </div>
  );
}

export default App;