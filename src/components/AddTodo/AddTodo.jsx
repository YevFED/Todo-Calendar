import React from "react";
import styles from "./AddTodo.module.scss";
import { BsSendPlusFill } from "react-icons/bs";

const AddTodo = () => {
  return (
    <div className={styles.addTodoWrapper}>
      <form className={styles.addForm} action="">
        <input
          className={styles.formInput}
          type="text"
          placeholder="Type what to add..."
        />
        <BsSendPlusFill
          className={styles.sendButton}
          fill="#44cfc6"
          size={30}
        />
      </form>
    </div>
  );
};

export default AddTodo;
