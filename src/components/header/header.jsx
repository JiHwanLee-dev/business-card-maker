import React from "react";
import logo from "../../images/logo.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="" />
        <button className={styles.btnLogout}> Logout </button>
      </div>

      <h2 className={styles.title}> Business Card Maker </h2>
    </header>
  );
};

export default Header;
