import React from "react";
import Cardmaker from "../cardmaker/cardmaker";
import Cardpreview from "../cardpreview/cardpreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = () => {
  console.log("Main");
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Cardmaker />
        </div>
        <div className={styles.rightContent}>
          {/* <span> Card Preview </span> */}
          <Cardpreview />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
