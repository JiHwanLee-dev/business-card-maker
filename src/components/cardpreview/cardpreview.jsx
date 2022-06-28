import React from "react";
import Cardpreviewitem from "../cardpreviewitem/cardpreviewitem";
import styles from "./cardpreview.module.css";

const Cardpreview = () => {
  return (
    <div className={styles.cardpreview}>
      <span> Card Preview </span>
      <Cardpreviewitem />
    </div>
  );
};

export default Cardpreview;
