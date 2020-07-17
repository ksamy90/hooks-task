import React, { useState } from "react";

var TaskForm = (props) => {
  var [title, setTitle] = useState("");
  var [body, setBody] = useState("");

  var addTask = (evt) => {
    evt.preventDefault();
    props.dispatch({
      type: "ADD_TASK",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} />
        <textarea
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        ></textarea>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export { TaskForm };
