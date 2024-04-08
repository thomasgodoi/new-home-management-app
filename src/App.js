import "@fontsource/roboto/300.css";
import "./App.css";

import Login from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import MapBoard from "./components/map-board/MapBoard";

function App() {
  return (
    <div id="app"> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map-board" element={<MapBoard />} />
      </Routes>
    </div>
  );
}

export default App;
