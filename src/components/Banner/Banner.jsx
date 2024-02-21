import React from "react";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <Link to="/" className={styles.bannerLogo}>
          Todo Calendar
        </Link>
      </div>
      <ul className={styles.bannerLinks}>
        <li>
          <Link to="/Auth/login" className={styles.bannerLink}>
            <IoIosLogIn size={30} fill="white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Banner;
