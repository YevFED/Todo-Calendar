import React from "react";
import TodoItem from "../Todo/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.scss";
import { useState } from "react";
import todos from "../Todo/todos.data.js";

export default function TodoList() {
  const [list, setList] = useState(todos);

  // Chage status of cepmplete or no

  const changeStatus = (_id) => {
    const copy = [...list];
    const current = copy.find((i) => i._id === _id);
    current.isComplete = !current.isComplete;
    setList(copy);
    console.log("Clicked and changed");
  };

  // adding a new taks

  const addTodo = (title) => {
    setList([
      {
        title,
        _id: new Date(),
        isComplete: false,
      },
      ...list,
    ]);
    if (title == "") {
      setList([...list]);
      window.alert("Type a goal");
    }
  };

  // Delete Task
  const deleteTodo = (_id) => setList([...list].filter((e) => e._id != _id));

  window.addTodo = addTodo;

  return (
    <div className={styles.todoListWrapper}>
      <AddTodo addTodo={addTodo} />

      {list.map((todo) => (
        <TodoItem
          todo={todo}
          title={todo.title}
          id={todo._id}
          isComplete={todo.isComplete}
          changeStatus={changeStatus}
          deleteTask={deleteTodo}
        />
      ))}
    </div>
  );
}
