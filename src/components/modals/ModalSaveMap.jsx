import React from "react";
import { useMapContext } from "../context/MapContext";
import { Button, Form, Input, Modal, Select } from "antd";
import { MapService } from "../services/MapService";

export default function ModalSaveMap() {
  const { open, setOpen, coordinates, openNotification } = useMapContext();
  const [form] = Form.useForm();

  function handleSubmitMarker(e) {
    let dto = {};

    dto.homeConstructor = e.home_constructor;
    dto.homeFinishYear = e.home_finish_year;
    dto.homeFinishMonth = e.home_finish_month;
    dto.homePrice = e.home_price;
    dto.homeLongitude = coordinates[1];
    dto.homeLatitude = coordinates[0];
    dto.homeName = e.home_name;

    console.log(dto);
    try {
      MapService.saveHome(dto).then((r) => {
        if (r.status === 200) {
          openNotification("success", "Sucesso", "Marcador salvo.");
          setOpen(false);
          return;
        }
        openNotification(
          "error",
          "Erro",
          "Houve um problema ao salvar o marcador"
        );
      });
    } catch (error) {
      console.error(error);
      openNotification("error", "Erro", "Tente novamente mais tarde");
    }
  }

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      style={{ width: "100%" }}
      footer={[]}
    >
      <Form form={form} onFinish={(e) => handleSubmitMarker(e)}>
        <Form.Item
          variant="filled"
          label="Nome"
          name="home_name"
          rules={[{ required: true, message: "Insira nome da casa" }]}
          style={{ width: "300px" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          variant="filled"
          label="Preço"
          name="home_price"
          style={{ width: "300px" }}
        >
          <Input prefix="R$" type="number" />
        </Form.Item>
        <Form.Item
          variant="filled"
          label="Construtora"
          name="home_constructor"
          style={{ width: "300px" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mês de entrega"
          name="home_finish_month"
          style={{ width: "250px" }}
        >
          <Select>
            <Select.Option value="1">Janeiro</Select.Option>
            <Select.Option value="2">Fevereiro</Select.Option>
            <Select.Option value="3">Março</Select.Option>
            <Select.Option value="4">Abril</Select.Option>
            <Select.Option value="5">Maio</Select.Option>
            <Select.Option value="6">Junho</Select.Option>
            <Select.Option value="7">Julho</Select.Option>
            <Select.Option value="8">Agosto</Select.Option>
            <Select.Option value="9">Setembro</Select.Option>
            <Select.Option value="10">Outubro</Select.Option>
            <Select.Option value="11">Novembro</Select.Option>
            <Select.Option value="12">Dezembro</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Ano de entrega"
          name="home_finish_year"
          style={{ width: "250px" }}
        >
          <Select>
            <Select.Option value="2024">2024</Select.Option>
            <Select.Option value="2025">2025</Select.Option>
            <Select.Option value="2026">2026</Select.Option>
            <Select.Option value="2027">2027</Select.Option>
            <Select.Option value="2028">2028</Select.Option>
            <Select.Option value="2029">2029</Select.Option>
            <Select.Option value="2030">2030</Select.Option>
          </Select>
        </Form.Item>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ marginRight: "10px" }}
            danger
            type="primary"
            onClick={() => {
              form.resetFields();
            }}
          >
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
