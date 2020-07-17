import React from "react";
import { Task } from "./task";

var TaskList = (props) => {
  return props.tasks.map((task) => {
    return <Task key={task.title} task={task} remove={props.removeTask} />;
  });
};

export { TaskList };
