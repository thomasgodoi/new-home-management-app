import "./dashboard.css";
import React from "react";
import { useMapContext } from "../context/MapContext";
import { Button } from "antd";
import { EnvironmentFilled, FolderOpenFilled } from "@ant-design/icons";

export default function Dashboard() {
  const {} = useMapContext();

  return (
    <div id="dashboard-div">
      <Button
        id="btn-homes-map"
        icon={<EnvironmentFilled />}
        style={{ background: "#6F5C4C" }}
        type="primary"
        onClick={() => window.location.assign("/homes-map")}
      >
        Homes Map
      </Button>
      <Button
        id="btn-homes-list"
        icon={<FolderOpenFilled />}
        style={{ background: "#6F5C4C" }}
        type="primary"
        onClick={() => window.location.assign("/homes-list")}
      >
        Homes List
      </Button>
    </div>
  );
}
