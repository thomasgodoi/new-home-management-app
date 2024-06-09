import { Button } from "antd";
import { HomeFilled } from "@ant-design/icons";

export default function AppHeader() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1001",
        width: "100%",
        top: "0",
        padding: "5px 10px",
        filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)",
        background: "#F4F1EB",
        height: "40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        icon={<HomeFilled />}
        ghost
        onClick={() => window.location.assign("/dashboard")}
        style={{
          color: "#6F5C4C",
          borderColor: "#6F5C4C",
        }}
      >
        Home
      </Button>
    </div>
  );
}
