import React from "react";
import TodoItem from "../Todo/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.scss";
import { useState } from "react";
import todos from "../Todo/todos.data";

export default function TodoList() {
  const [list, setList] = useState(todos);

  const changeStatus = (_id) => {
    const copy = [...todos];
    const current = copy.find((i) => i._id === _id);
    current.status = !current.status;
    setList(copy);
  };

  return (
    <div className={styles.todoListWrapper}>
      <AddTodo />
      <TodoItem changeStatus={changeStatus} />
    </div>
  );
}
