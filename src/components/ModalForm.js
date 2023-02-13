import { Card, Form, Input, Radio, Select, Space,Button, Modal,} from "antd";
import FormItem from "antd/es/form/FormItem";
import { useState } from 'react';
import NewTask from './NewTask';


const { TextArea } = Input;
const ModalForm = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
      </Modal>
    </>
  );
};
export default ModalForm;