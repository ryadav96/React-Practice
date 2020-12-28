import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

const todoListD = [];
const reducer = (state = { todoList: todoListD }, action) => {
  if (action.type === "ADD") {
    return { todoList: [...state.todoList, action.payload] };
  }
  return { todoList: todoListD };
};
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
