import React from "react";
import { useMapContext } from "../context/MapContext";
import { Button, Form, Input, Modal, Select, Divider } from "antd";
import { MapService } from "../services/MapService";

export default function ModalSaveMarker() {
  const {
    modalSaveMarkerOpen,
    setModalSaveMarkerOpen,
    coordinates,
    openNotification,
  } = useMapContext();
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
          setModalSaveMarkerOpen(false);
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
      open={modalSaveMarkerOpen}
      onCancel={() => setModalSaveMarkerOpen(false)}
      footer={[]}
      title="Salvar marcador"
      width="450px"
    >
      <Divider />
      <Form
        labelAlign="left"
        form={form}
        onFinish={(e) => handleSubmitMarker(e)}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 450,
        }}
      >
        <Form.Item
          label="Nome do imóvel"
          name="home_name"
          rules={[{ required: true, message: "Insira nome da casa" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Preço do imóvel" name="home_price">
          <Input prefix="R$" type="number" />
        </Form.Item>
        <Form.Item label="Construtora" name="home_constructor">
          <Input />
        </Form.Item>
        <Form.Item label="Mês de entrega" name="home_finish_month">
          <Select>
            <Select.Option value={1}>Janeiro</Select.Option>
            <Select.Option value={2}>Fevereiro</Select.Option>
            <Select.Option value={3}>Março</Select.Option>
            <Select.Option value={4}>Abril</Select.Option>
            <Select.Option value={5}>Maio</Select.Option>
            <Select.Option value={6}>Junho</Select.Option>
            <Select.Option value={7}>Julho</Select.Option>
            <Select.Option value={8}>Agosto</Select.Option>
            <Select.Option value={9}>Setembro</Select.Option>
            <Select.Option value={10}>Outubro</Select.Option>
            <Select.Option value={11}>Novembro</Select.Option>
            <Select.Option value={12}>Dezembro</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ano de entrega" name="home_finish_year">
          <Select>
            <Select.Option value={2024}>2024</Select.Option>
            <Select.Option value={2025}>2025</Select.Option>
            <Select.Option value={2026}>2026</Select.Option>
            <Select.Option value={2027}>2027</Select.Option>
            <Select.Option value={2028}>2028</Select.Option>
            <Select.Option value={2029}>2029</Select.Option>
            <Select.Option value={2030}>2030</Select.Option>
          </Select>
        </Form.Item>
        <span>m² ?</span>
        <span>andares?</span>
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
