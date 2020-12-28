import React from "react";
import "./style.css";
import { useState } from "react";
import { connect } from "react-redux";

const App = props => {
  let newTodo;
  const renderedToTo = props.todoList.map(todo => {
    return todo.status === "DONE" ? (
      <li>
        <s>{todo.value}</s>
      </li>
    ) : (
      <li>{todo.value}</li>
    );
  });
  return (
    <div>
      <h1>Add ToDo!</h1>
      <input
        onChange={e => {
          newTodo = e.target.value;
        }}
        type="text"
      />
      <button
        onClick={() => {
          props.dispatch({
            type: "ADD",
            payload: { value: newTodo, status: "NEW" }
          });
        }}
      >
        Add New To Do
      </button>
      <div>
        <ul>{renderedToTo}</ul>
      </div>
      <div>
        {" "}
        <a
          href=""
          onClick={event => {
            event.preventDefault();
          }}
        >
          All
        </a>{" "}
        <a
          href=""
          onClick={event => {
            event.preventDefault();
          }}
        >
          New
        </a>
        <a
          href=""
          onClick={event => {
            event.preventDefault();
          }}
        >
          Done
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { todoList: state.todoList };
};
export default connect(mapStateToProps)(App);
