import { Button, Divider, Layout, Menu, Space } from "antd";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import title from "../assets/title.png";
import CardTask from "./../components/CardTask";
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
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
];
const MainLayout = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
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
        <Button style={{ marginLeft: 50 }}>New Task</Button>
        <hr
          style={{
            border: "1px solid #FFFFFF",
            width: 150,
            marginTop: 20,
            marginBottom: 20,
          }}
        ></hr>
        <Menu
          theme="dark"
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <hr
          style={{
            border: "1px solid #FFFFFF",
            width: 150,
            marginTop: 20,
            marginBottom: 20,
          }}
        ></hr>
        <Menu
          theme="dark"
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "#FFFFFF" }}></Header>
        <Content style={{ backgroundColor: "#F1F5F9" }}>
          <div        style={{
              marginLeft: 20,
              marginTop: 20,
            }}>
          <CardTask></CardTask>
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
