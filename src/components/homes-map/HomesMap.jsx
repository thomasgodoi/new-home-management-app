/* eslint-disable */
import React from "react";
import { Button } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import "./homes-map.css";
import { useMapContext } from "../context/MapContext";
import MapInsertHome from "../maps/MapInsertHome";
import PageTitle from "../page-title/PageTitle";

export default function HomesMap() {
  const { insertHomeMarkerEnabled, setInsertHomeMarkerEnabled, coordinates } = useMapContext();

  return (
    <div>
      <div
        id="mapboard-title"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      <PageTitle pageTitle="Homes Map" pageUrl="/dashboard"/>
      </div>
      <div id="mapboard-map">
        <MapInsertHome insertHomeMarkerEnabled={insertHomeMarkerEnabled} />
      </div>
      <div
        id="mapboard-btns"
        style={{
          paddingTop: "10px",
          display: "flex",
          gap: "10px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          id="add-home"
          icon={!insertHomeMarkerEnabled ? <PlusOutlined /> : <CloseOutlined />}
          type="primary"
          onClick={() => setInsertHomeMarkerEnabled(!insertHomeMarkerEnabled)}
          style={{
            background: !insertHomeMarkerEnabled ? "#008E56" : "#C35354",
            color: "#FFF",
            filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 2px)",
            minWidth:"150px"
          }}
        >
          {!insertHomeMarkerEnabled ? <span>Adicionar casa</span> : <span>Cancelar</span>}
        </Button>
      </div>
    </div>
  );
}
