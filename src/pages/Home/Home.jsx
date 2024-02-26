import AddTodo from "../../components/AddTodo/AddTodo";
import Banner from "../../components/Banner/Banner";
import TodoList from "../../components/todoList/todoList";
import styles from "./Home.module.scss";

import React from "react";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <TodoList />
    </div>
  );
};

export default Home;
