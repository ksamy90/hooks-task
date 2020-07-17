import React from "react";

var Task = (props) => {
  return (
    <div>
      <h3>{props.task.title}</h3>
      <p>{props.task.body}</p>
      <button onClick={() => props.remove(props.task.title)}>remove</button>
    </div>
  );
};

export { Task };
