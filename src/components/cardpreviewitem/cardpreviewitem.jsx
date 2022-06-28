import React from "react";
import styles from "./cardpreviewitem.module.css";

const Cardpreviewitem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="../../logo192.png" alt="" />
      </div>
      <div className={styles.content}>
        <div>
          <span className={styles.name}> Name </span>
        </div>
        <div>
          <span> Company </span>
        </div>
        <div className={styles.line}></div>
        <div>
          <span> Title </span>
        </div>
        <div>
          <span> Eamil </span>
        </div>
        <div>
          <span> Message </span>
        </div>
      </div>
    </div>
  );
};

export default Cardpreviewitem;
