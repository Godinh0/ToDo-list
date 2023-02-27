import { Space, Row, Col, Modal, Button } from "antd";
import { useState, useEffect } from "react";
import CardTask from "./CardTask";
import ModalForm from "./ModalForm";

const tasksLocalStorage = JSON.parse(localStorage.getItem('myLocalStorage')||"[]")

function TaskList(props) {
  const [tasks, setTasks] = useState(tasksLocalStorage);


  function addTaskHandler(taskData) {
    setTasks((existingTasks) => [taskData, ...existingTasks]);
  }
  function deleteTaskHandler(task) {
    setTasks((existingTasks) => {
      return existingTasks.filter((item) => item !== task);
    });
  }

  useEffect(() => {
    localStorage.setItem('myLocalStorage', JSON.stringify(tasks));
  }, [tasks])
  
  
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
              <div style={{display:'flex', flexDirection:'column'}}>
                <CardTask
                  key={task.taskName}
                  name={task.taskName}
                  urgency={task.taskUrgency}
                  descriptions={task.taskDescription}
                />
                <Button onClick={() => deleteTaskHandler(task)}>Done</Button>
              </div>
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
