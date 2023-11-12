import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.id} category={task.category} text={task.text} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
}

// Define a function to handle the delete action
function handleDeleteTask(taskId) {
  
  console.log(`Task with ID ${taskId} will be deleted.`);
}

export default TaskList;
