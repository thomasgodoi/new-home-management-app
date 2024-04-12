import React, { useEffect, useState } from "react";
import { MapService } from "../services/MapService";
import { Marker, Popup } from "react-leaflet";
import { useMapContext } from "../context/MapContext";
import { Button } from "antd";

export default function SavedMarkers() {
  const { openNotification, setOpen } = useMapContext();

  const { iconUser } = useMapContext();
  const [markerList, setMarkerList] = useState([]);

  function getHomeList() {
    MapService.findHomesList().then((response) => {
      setMarkerList(response.data);
    });
  }

  function deleteMarker(id) {
    console.log("id", id);
    try {
      MapService.deleteHome(id).then(() => {
        openNotification("success", "Sucesso", "Marcador excluído com sucesso");
        getHomeList();
        setOpen(false);
      });
    } catch (err) {
      openNotification(
        "error",
        "Erro",
        "Houve um problema ao excluir o marcador"
      );
      console.error("error => ", err);
    }
  }

  useEffect(() => {
    getHomeList();
  }, []);

  return (
    <>
      {markerList.map((item, idx) => {
        return (
          <Marker
            key={idx}
            position={[item.homeLatitude, item.homeLongitude]}
            icon={iconUser}
          >
            <Popup>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <b>nome:</b> <span>{item.homeName}</span>
                </div>
                <div>
                  <b>preço:</b> <span>{item.homePrice}</span>
                </div>
                <div>
                  <b>Data de entrega:</b>{" "}
                  <span>
                    {item.homeFinishMonth}/{item.homeFinishYear}
                  </span>
                </div>
                <div>
                  <b>Construtora:</b> <span>{item.homeConstructor}</span>
                </div>
                <Button
                  type="primary"
                  danger
                  onClick={() => deleteMarker(item.idHome)}
                >
                  Excluir marcador
                </Button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
