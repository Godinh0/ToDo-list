import { Card, Form, Input, Radio, Select, Space, Button, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";

const { TextArea } = Input;
const { Option } = Select;
const options = [{ key: "Little" }, { key: "Normal" }, { key: "Extreme" }];

const ModalForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  }
  function urgencyChangeHandler(value) {
    setUrgency(value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const taskData = {
      taskName: name,
      taskDescription: description,
      taskUrgency: urgency,
    };
    console.log(taskData);
    props.onAddTask(taskData);
    props.onCancel();
  }

  return (
    <>
      <Modal
        open={props.show}
        onCancel={props.onCancel}
        footer
      >
        <Space direction="vertical" size={16}>
          <Card>
            <Form layout="vertical" onFinish={submitHandler}>
              <FormItem name={"name"} label="Task Name:">
                <Input onChange={nameChangeHandler} />
              </FormItem>
              <FormItem name={"urgency"} label="Urgency:">
                <Select
                  onChange={urgencyChangeHandler}
                >
                  {options.map((option) => {
                    return (
                      <Option key={option.key} value={option.key}>
                        {option.key}
                      </Option>
                    );
                  })}
                </Select>
              </FormItem>
              <FormItem name={"description"} label="Description:">
                <TextArea onChange={descriptionChangeHandler} rows={4} />
              </FormItem>
              <Button key="1" onClick={props.onCancel}>
                Cancel
              </Button>

              <Button key="2" type="primary" onClick={submitHandler}>
                Confirm
              </Button>
            </Form>
          </Card>
        </Space>
      </Modal>
    </>
  );
};
export default ModalForm;
