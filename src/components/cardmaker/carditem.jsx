import React, { useContext, useEffect, useState } from "react";
import styles from "./carditem.module.css";
import { UserContext } from "../../providers/userprovider";
import { dbSet, dbRead } from "../../service/fireBase";

const Carditem = (props) => {
  console.log(`CardItem()`);
  console.log(props);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  console.log(Object.keys(props).length);

  useEffect(() => {
    // 기존에 firebase database의 value 확인
    if (Object.keys(props).length !== 0) {
      console.log(props.card);
      // console.log(props.card.username);
      console.log(props.card.username);
      console.log(props.card.company);
      console.log(props.card.color);
      console.log(props.card.title);
      console.log(props.card.email);
      console.log(props.card.message);

      setName(props.card.username);
      setCompany(props.card.company);
      setColor(props.card.color);
      setTitle(props.card.title);
      setEmail(props.card.email);
      setMessage(props.card.message);
    }
  }, [props]);

  const user = useContext(UserContext);
  console.log(user);

  const handleSubmit = async (e) => {
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

    console.log(user.uid);
    console.log(user.displayName);
    console.log(user.email);

    let index = new Date();

    // userId, name, email, company, color, title, message
    await dbSet(user.uid, index, name, email, company, color, title, message);
    setName("");
    setCompany("");
    setColor("");
    setTitle("");
    setEmail("");
    setMessage("");
  };

  const handleSetFile = (e) => {
    console.log(e.target.files[0]);
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
            value={name}
          />
          <input
            type="text"
            placeholder="Company"
            className={styles.inputCompany}
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <select
            name="selectColor"
            id="selectColor"
            className={styles.selectColor}
            onChange={(e) => setColor(e.target.value)}
            value={color}
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
            value={title}
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.inputEmail}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.content3}>
          <textarea
            placeholder="Message"
            className={styles.inputTitle}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <div className={styles.content4}>
          <label className={styles.btnFile} htmlFor="file">
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
