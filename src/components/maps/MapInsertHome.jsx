import { MapContainer, TileLayer } from "react-leaflet";
import UserMarker from "../user-marker/UserMarker";
import ModalSaveMarker from "../modals/ModalSaveMarker";
import SavedMarkers from "../saved-markers/SavedMarkers";
import { Card } from "antd";

export default function MapInsertHome(props) {
  return (
    <MapContainer
      center={[-23.241119, -45.916765]}
      zoom={13}
      scrollWheelZoom
      id="map"
      style={{border:"1px solid #6F5C4C"}}
    >
      <TileLayer
        url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
        maxZoom={25}
        minZoom={15}
      />
      <SavedMarkers />
      {props.insertHomeMarkerEnabled && (
        <>
          <ModalSaveMarker />
          <UserMarker />
          <div
            style={{
              position: "absolute",
              zIndex: 550,
              left: "50%",
              transform: "translate(-50%,-50%)",
              bottom: "5px",
              padding: "5px 10px",
              color: "white",
              filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
            }}
          >
            <Card
              size="small"
              style={{
                textWrap: "nowrap",
                background: "#F4F1EB",
                color: "#6F5C4C",
                border: "none",
              }}
            >
              Insira um marcador no mapa clique nele para salvar
            </Card>
          </div>
        </>
      )}
    </MapContainer>
  );
}
