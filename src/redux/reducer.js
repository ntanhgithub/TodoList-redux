const initSate = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "learn Js", completed: "false", priority: "Medium" },
    { id: 1, name: "learn ReactJs", completed: "true", priority: "High" },
    { id: 1, name: "learn NodeJs", completed: "false", priority: "Low" },
  ],
};

const rootReducer = (state = initSate, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: 1, name: "learn NodeJs", completed: "false", priority: "Low" },
        ],
      };

    default:
      break;
  }
};

export default rootReducer;
