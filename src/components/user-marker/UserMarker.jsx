// import React, { useState } from "react";
// import { Button } from "antd";
// import { Marker, Popup, useMapEvents } from "react-leaflet";
// import L from "leaflet";

// export default function UserMarker() {



//   useMapEvents({
//     click: (e) => {
//       const { lat, lng } = e.latlng;
//       setPosition({
//         latitude: lat,
//         longitude: lng,
//       });
//       setCoordinates([lat, lng]);
//     },
//   });

//   return (
//     <Marker position={[position.latitude, position.longitude]} icon={iconUser}>
//       <Popup>
//         Salvar marcador?
//         <Button onClick={() => setOpen(true)}>Sim</Button>
//       </Popup>
//     </Marker>
//   );
// }
