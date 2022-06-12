import React from "react";
import styles from "./login.module.css";
import { signInWithGoogle, signInWithGithub } from "../../service/fireBase.js";
import logo2 from "../../logo192.png";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const click = async () => {
    console.log("1111");
    const aa = await signInWithGoogle();
    console.log("2222");
    console.log(aa);
    navigate("/app");
  };

  return (
    <div className={styles.wrapper}>
      <img src={logo2} alt="" />
      <div className={styles.container}>
        <h2 className={styles.title}>Business Card Maker</h2>
        <div className={styles.content}>
          <h2> Login </h2>
          <button className={styles.btn} onClick={click}>
            Google
          </button>
          <button className={styles.btn} onClick={signInWithGithub}>
            Github
          </button>
        </div>
        <h2 className={styles.footer}> Code your dream</h2>
        <button onClick={click}> test btn </button>
      </div>
    </div>
  );
};

export default Login;
