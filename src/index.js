import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

const todoListD = [];
const reducer = (state = { todoList: todoListD }, action) => {
 
  if (action.type === "ADD") {
    console.log("add")
    state.todoList.push(action.payload);
     const newTdoList = state.todoList.map(list=>list);
     return {todoList: newTdoList};
  }
  console.log("default")
  return state;
};
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
