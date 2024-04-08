import { Button, Card, Form, Input, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import React from "react";

export default function Login() {
  const handleValidateLogin = (values) => {
    if (values.password === "1234") {
      openNotification("success");
    } else {
      openNotification();
    }
  };

  const openNotification = (status) => {
    status === "success"
      ? notification.success({
          placement: "topRight",
          message: "Usuário logado. Redirecionando...",
          closeIcon: <CloseOutlined />,
        })
      : notification.error({
          placement: "topRight",
          message: "Usuário ou senha inválidos",
          closeIcon: <CloseOutlined />,
        });
  };

  return (
    <Card title="Login">
      <div style={{ width: "250px", display: "flex", flexDirection: "column" }}>
        <Form
          name="login"
          onFinish={handleValidateLogin}  
          style={{
            maxWidth: 400,
          }}
        >
          <Form.Item
            label="Usuário"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{width:"100%"}}>
            Enviar
          </Button>
        </Form>
      </div>
    </Card>
  );
}
