import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import Banner from "../../components/Banner/Banner";
import { useRef } from "react";

export default function Login() {
  const [auth, setAuth] = useState(true);

  const [email, setEmail] = useState("");

  const remindEmail = useRef();

  useEffect(() => {
    remindEmail.current.value = email;
  });
  return (
    <>
      <div className={styles.wrapper}>
        <Banner />
        {auth ? (
          // Log in Form
          <form className={styles.form}>
            <p className={styles.formTitle}>Log in</p>
            <input
              ref={remindEmail}
              type="text"
              className={styles.formInput}
              placeholder="Type your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className={styles.formInput}
              placeholder="Type your password"
            />

            <button className={styles.formButton}>Log in</button>
            <p onClick={() => setAuth(!auth)} className={styles.formLinkButton}>
              Create a new account
            </p>
          </form>
        ) : (
          // Sign Up Form
          <form className={styles.form}>
            <p className={styles.formTitle}>Sign up</p>
            <input
              ref={remindEmail}
              type="text"
              className={styles.formInput}
              placeholder="Type your email"
            />
            <input
              type="password"
              className={styles.formInput}
              placeholder="Type your password"
            />
            <input
              type="password"
              className={styles.formInput}
              placeholder="Confirm your password"
            />

            <button className={styles.formButton}>Sign Up</button>
            <p onClick={() => setAuth(!auth)} className={styles.formLinkButton}>
              Already have an account?
            </p>
          </form>
        )}
      </div>
    </>
  );
}
