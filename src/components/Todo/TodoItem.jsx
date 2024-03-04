import React from "react";
import styles from "./TodoItem.module.scss";

import { useState } from "react";
// Icons
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const TodoItem = ({
  todo,
  title,
  id,
  isComplete,
  changeStatus,
  deleteTask,
}) => {
  return (
    <div key={id} id={id} className={styles.todoItem}>
      <FaCheck
        fill="#44cfc6"
        onClick={() => changeStatus(todo._id)}
        className={isComplete ? styles.checkedIcon : styles.checkIcon}
        size={13}
      />

      <div className={styles.todoTitle}>{title}</div>
      <FaTrash
        onClick={() => deleteTask(todo._id)}
        className={styles.deleteIcon}
        fill="#44cfc6"
        size={25}
      />
    </div>
  );
};

export default TodoItem;
