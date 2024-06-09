import "./saved-markers.css";
import React, { useEffect, useState } from "react";
import { MapService } from "../services/MapService";
import { Marker, Popup } from "react-leaflet";
import { useMapContext } from "../context/MapContext";
import { Button } from "antd";

export default function SavedMarkers() {
  const { openNotification, setModalSaveMarkerOpen } = useMapContext();

  const { iconUser } = useMapContext();
  const [markerList, setMarkerList] = useState([]);

  function getHomeList() {
    MapService.findHomesList().then((response) => {
      setMarkerList(response.data);
    });
  }

  function deleteMarker(id) {
    try {
      MapService.deleteHome(id).then(() => {
        openNotification("success", "Sucesso", "Marcador excluído com sucesso");
        getHomeList();
        setModalSaveMarkerOpen(false);
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
              <div style={{padding: "10px 0 30px 0", width:"250px"}}>
                <table id="table-marker-home">
                  <tr><h3>{item.homeName}</h3></tr>
                  <tr>
                    <td>
                      <b>preço:</b>
                    </td>
                    <td>
                      <span>{item.homePrice}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Data de entrega</b>
                    </td>
                    <td>
                    <span>
                      {item.homeFinishMonth}/{item.homeFinishYear}
                    </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Construtora</b>
                    </td>
                    <td>
                    <span>
                    {item.homeConstructor}
                    </span>
                    </td>
                  </tr>
                </table>
              </div>
              <div id="remove-marker"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
