import React from "react";
import styles from "./carditem.module.css";

const Carditem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <input type="text" placeholder="Name" className={styles.inputName} />
        <input
          type="text"
          placeholder="Company"
          className={styles.inputCompany}
        />

        <select name="" id="" className={styles.selectColor}>
          <option value=""> Light</option>
          <option value=""> Dark</option>
          <option value=""> Colorful</option>
        </select>
      </div>
      <div className={styles.content2}>
        <input type="text" placeholder="Title" className={styles.inputTitle} />
        <input type="text" placeholder="Email" className={styles.inputEmail} />
      </div>
      <div className={styles.content3}>
        <textarea placeholder="Message" className={styles.inputTitle} />
      </div>

      <div className={styles.content4}>
        <button className={styles.btnFile}> No file </button>
        <button className={styles.btnAdd}> Add </button>
      </div>
    </div>
  );
};

export default Carditem;
