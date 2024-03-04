import React from "react";
import styles from "./AddTodo.module.scss";
import { BsSendPlusFill } from "react-icons/bs";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <div className={styles.addTodoWrapper}>
      <form className={styles.addForm} action="">
        <input
          className={styles.formInput}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="type your task here :"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              addTodo(title) & setTitle("");
            }
          }}
        />

        <BsSendPlusFill
          className={styles.sendButton}
          onClick={() => addTodo(title) & setTitle("")}
          fill="#44cfc6"
          size={30}
        />
      </form>
    </div>
  );
};

export default AddTodo;
