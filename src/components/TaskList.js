import { Space, Row, Col, Modal } from "antd";
import { useState } from "react";
import CardTask from "./CardTask";
import ModalForm from "./ModalForm";
import NewTask from "./NewTask";

function TaskList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }
  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  }
  function urgencyChangeHandler(event) {
    setUrgency(event.target.value);
  }

  return (
    <Space direction="vertical" size="middle">
      <ModalForm
        onNameChange={nameChangeHandler}
        onDescriptionChange={descriptionChangeHandler}
        onUrgencyChange={urgencyChangeHandler}
      />
      <CardTask name={name} urgency={urgency} descriptions={description} />
    </Space>
  );
}

export default TaskList;
