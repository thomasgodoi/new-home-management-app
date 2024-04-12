import React, { useEffect, useState } from "react";
import { MapService } from "../services/MapService";
import { Button } from "antd";
import { Marker, Popup } from "react-leaflet";
import { useMapContext } from "../context/MapContext";

export default function SavedMarkers() {
  const { iconUser } = useMapContext();
  const [markerList, setMarkerList] = useState([]);

  useEffect(() => {
    MapService.findHomesList().then((response) => {
      console.log(response.data);
      setMarkerList(response.data);
    });
  }, []);

  return (
    <>
      {markerList.map((item) => {
        return (
          <Marker
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
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
