import { Button, Divider, Layout, Menu, Space } from "antd";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import title from "../assets/title.png";
const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Item 1", null, null),
  ]),
];
const MainLayout = (props) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        theme="dark"
        style={{
          width: 316,
        }}
      >
        <div
          style={{
            height: 50,
            marginTop: 20,
            marginBottom: 20,
            backgroundImage: `url(${title})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        <hr
          style={{
            border: "1px solid #FFFFFF",
            width: 150,
            marginTop: 20,
            marginBottom: 20,
          }}
        ></hr>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#FFFFFF" }}></Header>
        <Content style={{ backgroundColor: "#F1F5F9" }}>
          <div
            style={{
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            fontSize: "10px",
            backgroundColor: "#F1F5F9",
          }}
        >
          Gabriel Godinho ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
