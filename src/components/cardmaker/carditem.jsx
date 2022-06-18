import React, { useState } from "react";
import styles from "./carditem.module.css";

const Carditem = () => {
  console.log(`CardItem()`);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(e);
    console.log(`name : ${name}`);
    console.log(`company : ${company}`);
    console.log(`color : ${color}`);
    console.log(`title : ${title}`);
    console.log(`email : ${email}`);
    console.log(`message : ${message}`);
    console.log(`file : ${file}`);
    console.log(file);

    setName("");
  };

  const handleSetFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.content1}>
          <input
            type="text"
            placeholder="Name"
            className={styles.inputName}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            className={styles.inputCompany}
            onChange={(e) => setCompany(e.target.value)}
          />

          <select
            name="selectColor"
            id="selectColor"
            className={styles.selectColor}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="Light"> Light</option>
            <option value="Dark"> Dark</option>
            <option value="Colorful"> Colorful</option>
          </select>
        </div>
        <div className={styles.content2}>
          <input
            type="text"
            placeholder="Title"
            className={styles.inputTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.inputEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.content3}>
          <textarea
            placeholder="Message"
            className={styles.inputTitle}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className={styles.content4}>
          <label className={styles.btnFile} for="file">
            No file
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleSetFile}
          />
          <input type="submit" className={styles.btnAdd} value="Add" />

          {/* <button className={styles.btnAdd}> Add </button> */}
        </div>
      </form>
    </div>
  );
};

export default Carditem;
