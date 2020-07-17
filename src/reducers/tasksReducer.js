var taskReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TASKS":
      return action.tasks;
    case "ADD_TASK":
      return [...state, { title: action.title, body: action.body }];
    case "REMOVE_TASK":
      return state.filter((task) => task.title !== action.title);
    default:
      return state;
  }
};

export { taskReducer };
