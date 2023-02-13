import { Card, Form, Input, Radio, Select, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const { TextArea } = Input;
const NewTask = (props) => {

  return (
    <Space direction="vertical" size={16}>
      <Card
      >
        <Form layout="vertical">
          <FormItem label="Task Name:">
            <Input onChange={props.onNameChange}/>
          </FormItem>
          <FormItem label="Urgency:">
            <Select
              defaultValue="Normal"
              onChange={props.onUrgencyChange}
              options={[
                {
                  value: "little",
                  label: "Little",
                },
                {
                  value: "normal",
                  label: "Normal",
                },
                {
                  value: "extreme",
                  label: "Extreme",
                },
              ]}
            />
          </FormItem>
          <FormItem label="Description:">
            <TextArea onChange={props.onDescriptionChange} rows={4} />
          </FormItem>
        </Form>
      </Card>
    </Space>
  );
};
export default NewTask;
