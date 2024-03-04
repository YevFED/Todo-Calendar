import Banner from "../../components/Banner/Banner";

import TodoList from "../../components/todoList/todoList";
import styles from "./Home.module.scss";
import Loader from "../../components/Loader/Loader";

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
