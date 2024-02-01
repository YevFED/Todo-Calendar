import React from "react";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <Link className={styles.bannerLogo}>Todo Calendar</Link>
      </div>
      <ul className={styles.bannerLinks}>
        <li>
          <Link className={styles.bannerLink}>Create</Link>
        </li>
        <li>
          <Link className={styles.bannerLink}>Log in</Link>
        </li>
        <li>
          <Link className={styles.bannerLink}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
