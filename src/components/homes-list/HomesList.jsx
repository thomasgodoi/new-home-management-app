import "./homes-list.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { MapService as MAP_SERVICE } from "../services/MapService";
import PageTitle from "../page-title/PageTitle";
import { Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { useMapContext } from "../context/MapContext";
import ModalSaveMarker from "../modals/ModalSaveMarker";
import ModalEditHome from "../modal-edit-home/ModalEditHome";

const MONTH_NAME = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


export default function HomesList() {
    const TABLE_COLUMNS = [
      {
        title: "Home Name",
        dataIndex: "homeName",
        key: "idHome",
      },
      {
        title: "Price",
        dataIndex: "homePrice",
        key: "homePrice",
      },
      {
        title: "Constructor",
        dataIndex: "homeConstructor",
        key: "homeConstructor",
      },
      {
        title: "Deliver month",
        dataIndex: "homeFinishMonth",
        key: "homeFinishMonth",
      },
      {
        title: "Deliver year",
        dataIndex: "homeFinishYear",
        key: "homeFinishYear",
      },
      {
        title: "Actions",
        key: "action",
        render: (_, record) => (
          <div style={{ display: "flex", gap: "10px " }}>
            <Button
              icon={<EditFilled />}
              type="primary"
              style={{ filter: "drop-shadow(0, 0, 0 black)" }}
              onClick={() => handleEditHome(record)}
            />
            <Button
              icon={<DeleteFilled />}
              type="primary"
              style={{ filter: "drop-shadow(0, 0, 0 black)" }}
              danger
              onClick={() => handleHomeDelete(record.idHome)}
            />
          </div>
        ),
      },
    ];
  const {openNotification} = useMapContext();
  const [tableData, setTableData] = useState([]);
  const [editHome, setEditHome] = useState(null);
  const [isModalEditHomeVisible, setIsModalEditHomeVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    MAP_SERVICE.findHomesList().then((resp) => {
      handleTableData(resp.data);
    });
  }

  function handleTableData(data) {
    const response = [];

    data.forEach((el) => {
      response.push({
        homeName: el.homeName,
        homePrice: el.homePrice,
        homeLatitude: el.homeLatitude,
        homeLongitude: el.homeLongitude,
        homeConstructor: el.homeConstructor ? el.homeConstructor : "-",
        homeFinishMonth: el.homeFinishMonth
          ? MONTH_NAME[el.homeFinishMonth -1]
          : "-",
        homeFinishYear: el.homeFinishYear > 0 ? el.homeFinishYear : "-",
        idHome: el.idHome,
      });
    });

    setTableData(response);
  }

  function handleEditHome(home) {
      console.log('home', home);
      // TODO: arrumar modal edit home
      setIsModalEditHomeVisible(true);
    setEditHome(home);
  }

  async function handleHomeDelete(id) {
    await MAP_SERVICE.deleteHome(id)
      .then(() => {
        openNotification("success", "Success", "Marker removed.");
        getData();
      })
      .catch(() => {
        openNotification(
          "error",
          "Erro",
          "There was an error trying to remove this home"
        );
      });
  }

  return (
    <div id="homes-list">
      <PageTitle pageTitle="Homes List" pageUrl="/dashboard" />

      <Table
        dataSource={tableData}
        columns={TABLE_COLUMNS}
        style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 2px)" }}
      />
        {isModalEditHomeVisible &&
            <ModalEditHome isModalEditHomeVisible={isModalEditHomeVisible}/>
        }
    </div>
  );
}
