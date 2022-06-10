import React from "react";
import styles from "./login.module.css";
import { signInWithGoogle, signInWithGithub } from "../../service/fireBase.js";

const Login = () => {
  const onSnsBtnClick = (e) => {
    // alert(`v: ${v}`);
    console.log(`onSnsBtncLICK`);
    console.log(e);
    const name = e.target.name;

    if (name === "google") {
      //   provider = new firebase() ;
      //   signInWithGoogle;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Business Card Maker</h2>
      <div className={styles.content}>
        <h2> Login </h2>
        <button className={styles.btn} onClick={signInWithGoogle} name="google">
          Google
        </button>
        <button className={styles.btn} onClick={signInWithGithub}>
          Github
        </button>
      </div>
      <h2 className={styles.footer}> Code your dream</h2>
    </div>
  );
};

export default Login;
