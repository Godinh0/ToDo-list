import { Space, Row, Col, Modal, Button } from "antd";
import { useState } from "react";
import CardTask from "./CardTask";
import ModalForm from "./ModalForm";

function TaskList(props) {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(taskData) {
    setTasks((existingTasks) => [taskData, ...existingTasks]);
  }
  function deleteTaskHandler(task) {
    setTasks((existingTasks) => {
      return existingTasks.filter((item) => item !== task);
    });
  }
  return (
    <Space direction="horizontal" size="middle">
      <ModalForm
        show={props.showModalForm}
        onCancel={props.closeModalForm}
        onAddTask={addTaskHandler}
      />
      {tasks.length > 0 && (
        <>
          {tasks.map((task) => (
            <>
              <CardTask
                key={task.taskName}
                name={task.taskName}
                urgency={task.taskUrgency}
                descriptions={task.taskDescription}
              />
              <Button onClick={() => deleteTaskHandler(task)}>Delete</Button>
            </>
          ))}
        </>
      )}
      {tasks.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no tasks yet!</h2>
          <p>Add Some!!</p>
        </div>
      )}
    </Space>
  );
}

export default TaskList;
