import { Card, Form, Input, Radio, Select, Space } from "antd";
import FormItem from "antd/es/form/FormItem";

const { TextArea } = Input;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CardTask = () => (
  <Space direction="vertical" size={16}>
    <Card
      style={{
        width: "180vh"
      }}
    >
      <Form layout="vertical">
        <FormItem label="Task Name:">
          <Input />
        </FormItem>
        <FormItem label="Urgencia:">
          <Select
            defaultValue="Normal"
            onChange={handleChange}
            options={[
              {
                value: "pouca",
                label: "Pequena",
              },
              {
                value: "Normal",
                label: "Normal",
              },
              {
                value: "extrema",
                label: "Extrema",
              },
            ]}
          />
        </FormItem>
        <FormItem label="Descrição:">
          <TextArea rows={4} />
        </FormItem>
      </Form>
    </Card>
  </Space>
);
export default CardTask;
