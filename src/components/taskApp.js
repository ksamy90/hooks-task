import React, { useEffect, useReducer } from "react";
import { taskReducer } from "../reducers/tasksReducer";
import { TaskList } from "./taskList";
import { TaskForm } from "./addTaskForm";

var TaskApp = () => {
  var [tasks, dispatch] = useReducer(taskReducer, []);

  var removeTask = (title) => {
    dispatch({
      type: "REMOVE_TASK",
      title,
    });
  };

  useEffect(() => {
    var tasksInfo = JSON.parse(localStorage.getItem("tasks"));
    if (tasksInfo) {
      dispatch({
        type: "SHOW_TASKS",
        tasks: tasksInfo,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <TaskForm dispatch={dispatch} />
    </div>
  );
};

export { TaskApp };
