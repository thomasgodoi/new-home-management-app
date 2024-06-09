import "./page-title.css";
import React from "react";
import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";

export default function PageTitle(props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{props.pageTitle}</h1>
      <Button
        id="go-back"
        icon={<RollbackOutlined />}
        danger
        type="link"
        onClick={() => window.location.assign(props.pageUrl)}
        style={{
          background: "#6F5C4C",
          color: "#FFFFFF",
          filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 2px)",
        }}
      >
        Voltar
      </Button>
    </div>
  );
}
