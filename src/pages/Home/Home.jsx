import Banner from "../../components/Banner/Banner";
import styles from "./Home.module.scss";

import React from "react";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Banner />
    </div>
  );
};

export default Home;
