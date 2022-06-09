import React from "react";
import styles from "./login.module.css";

const Login = () => {
  const onSnsBtnClick = (v) => {
    // alert(`v: ${v}`);
    console.log(`onSnsBtncLICK`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Business Card Maker</h2>
      <div className={styles.content}>
        <h2> Login </h2>
        <button className={styles.btn} onClick={onSnsBtnClick("google")}>
          Google
        </button>
        <button className={styles.btn} onClick={onSnsBtnClick("github")}>
          {" "}
          Github{" "}
        </button>
      </div>
      <h2 className={styles.footer}> Code your dream</h2>
    </div>
  );
};

export default Login;
