import { useMapContext } from "../context/MapContext";
import { MapService as MAP_SERVICE } from "../services/MapService";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Divider,
  ConfigProvider,
} from "antd";

export default function ModalEditHome(props) {
    const {
        setModalSaveMarkerOpen,
        coordinates,
        openNotification,
        setInsertHomeMarkerEnabled,
        setMarkerList,
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

    try {
      MAP_SERVICE.saveHome(dto).then((r) => {
        if (r.status === 200) {
          openNotification("success", "Success", "Marker saved.");
          setModalSaveMarkerOpen(false);
          setInsertHomeMarkerEnabled(false);
          MAP_SERVICE.findHomesList().then((response) => {
            setMarkerList(response.data);
          });
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
    <>
      {props.isModalEditHomeVisible && (
        <ConfigProvider
          theme={{
            components: {
              Modal: {
                contentBg: "#F9F7F5",
                headerBg: "#F9F7F5",
                titleColor: "#3f362f",
              },
            },
          }}
        >
          <Modal
            open={props.isModalEditHomeVisible}
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
                rules={[{ required: true, message: "Insert home's name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Home price" name="home_price">
                <Input prefix="R$" type="number" />
              </Form.Item>
              <Form.Item label="Constructor" name="home_constructor">
                <Input value={props.homeConstructor} />
              </Form.Item>
              <Form.Item label="Deliver month" name="home_finish_month">
                <Select>
                  <Select.Option value={1}>January</Select.Option>
                  <Select.Option value={2}>February</Select.Option>
                  <Select.Option value={3}>March</Select.Option>
                  <Select.Option value={4}>April</Select.Option>
                  <Select.Option value={5}>May</Select.Option>
                  <Select.Option value={6}>June</Select.Option>
                  <Select.Option value={7}>July</Select.Option>
                  <Select.Option value={8}>August</Select.Option>
                  <Select.Option value={9}>September</Select.Option>
                  <Select.Option value={10}>October</Select.Option>
                  <Select.Option value={11}>November</Select.Option>
                  <Select.Option value={12}>December</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Deliver year" name="home_finish_year">
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
                  style={{ marginRight: "10px", background: "#C35354" }}
                  danger
                  type="primary"
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  style={{ background: "#008E56" }}
                  type="primary"
                  htmlType="submit"
                >
                  Salvar
                </Button>
              </div>
            </Form>
          </Modal>
        </ConfigProvider>
      )}
    </>
  );
}
