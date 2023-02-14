import { Space, Row, Col, Modal } from "antd";
import { useState } from "react";
import CardTask from "./CardTask";
import ModalForm from "./ModalForm";

function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(taskData) {
    setTasks((existingTasks) => [taskData, ...existingTasks]);
  }
  return (
    <Space direction="horizontal" size="middle">
      
      <ModalForm
        show={props.showModalForm}
        onCancel={props.closeModalForm}
        onAddTask={addTaskHandler}
      />
      {tasks.map((task) => (
        <CardTask
          name={task.taskName}
          urgency={task.taskUrgency}
          descriptions={task.taskDescription}
        />
      ))}
    </Space>
  );
}

export default TaskList;
