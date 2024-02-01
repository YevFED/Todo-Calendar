import React from "react";
import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const changeValue = (title) => {};

  return (
    <div className={styles.addTodoWrapper}>
      <input type="text" onChange={(e) => e.target.value} />
    </div>
  );
};

export default AddTodo;
