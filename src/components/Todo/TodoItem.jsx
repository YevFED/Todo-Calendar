import React from "react";
import styles from "./TodoItem.module.scss";
import todos from "./todos.data";
import { useState } from "react";
// Icons
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const TodoItem = ({ changeStatus }) => {
  return todos.map((todo) => (
    <div className={styles.todoItem}>
      <div className={styles.checkedCircle}>
        {/* If Complete paint background to #44cfc6 */}
        <FaCheck
          onClick={changeStatus(todo._id)}
          fill="#44cfc6"
          className={styles.checkIcon}
          size={13}
        />
      </div>

      <div className={styles.todoTitle}>{todo.title}</div>
      <FaTrash className={styles.deleteIcon} fill="#44cfc6" size={25} />
    </div>
  ));
};

export default TodoItem;
