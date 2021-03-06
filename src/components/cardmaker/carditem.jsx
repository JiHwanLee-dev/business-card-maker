import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./carditem.module.css";
import { UserContext } from "../../providers/userprovider";
import { dbSet, dbRead, writeNewPost } from "../../service/fireBase";
import { setImage } from "../../service/cloudinary";

const Carditem = (props) => {
  console.log(`CardItem()`);

  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    color: "Light",
    title: "",
    email: "",
    message: "",
    file: "No file",
    fileUrl: "",
    fileName: "",
  });

  const [selectFile, setSelectFile] = useState();

  const { name, company, color, title, email, message, file, fileUrl } = inputs; // 비구조화 할당을 통해 값 추출

  // const [name, setName] = useState("");
  // const [company, setCompany] = useState("");
  // const [color, setColor] = useState("Light");
  // const [title, setTitle] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [file, setFile] = useState("");

  console.log(Object.keys(props).length);

  useEffect(() => {
    // 기존에 firebase database의 value 확인
    if (Object.keys(props).length !== 0) {
      setInputs({
        name: props.card.name,
        company: props.card.company,
        color: props.card.color,
        title: props.card.title,
        email: props.card.email,
        message: props.card.message,
        file: props.card.file,
        fileUrl: props.card.fileUrl,
      });

      // setName(props.card.username);
      // setCompany(props.card.company);
      // setColor(props.card.color);
      // setTitle(props.card.title);
      // setEmail(props.card.email);
      // setMessage(props.card.message);
    }
  }, [props]);

  const user = useContext(UserContext);
  // console.log(user);

  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    console.log(props.card.key);
    // props.handleFile(fileUploaded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    if (e.nativeEvent.submitter.value === "Add") {
      let index = new Date();

      console.log(selectFile);
      const response = await setImage(selectFile);
      const fileUrl = response.url;
      console.log(response);
      console.log(fileUrl);

      // return;

      // userId, name, email, company, color, title, message
      await dbSet(
        user.uid,
        index,
        name,
        email,
        company,
        color,
        title,
        message,
        file,
        fileUrl,
      );
      setInputs({
        name: "",
        company: "",
        color: "Light",
        title: "",
        email: "",
        message: "",
        file: "No file",
        fileUrl: "",
      });
    } else if (e.nativeEvent.submitter.value === "Delete") {
      props.handleDelete(props.card.key);
    }
  };

  const onChangeEvent = async (e) => {
    console.log(`onChangeEvent()`);
    // alert(props.card.key);
    // return;
    // console.log(props.card.key);
    let { value, name, files } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    console.log(e.target);
    console.log(`value: ${value} / name: ${name} / file: ${files}`);
    if (name === "file") {
      console.log(files[0].name);
      value = files[0].name.split(".")[0];
      setSelectFile(files[0]);

      const response = await setImage(files[0]);
      const fileUrl = response.url;
      console.log(response);
      console.log(fileUrl);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });

    let mInputs = {
      ...inputs,
      [name]: value,
    };

    // setName(value);
    // await dbSet(user.uid, index, name, email, company, color, title, message);

    if (Object.keys(props).length !== 0) {
      await writeNewPost(
        user.uid,
        props.card.key,
        mInputs,
        // name,
        // email,
        // company,
        // color,
        // title,
        // message,
      );
    }
  };

  const handleSetFile = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {Object.keys(props).length !== 0 ? <span> {props.card.key} </span> : ""}
        <div className={styles.content1}>
          <input
            type="text"
            placeholder="Name"
            className={styles.inputName}
            // onChange={(e) => setName(e.target.value)}
            onChange={onChangeEvent}
            value={name}
            name="name"
          />
          <input
            type="text"
            placeholder="Company"
            className={styles.inputCompany}
            onChange={onChangeEvent}
            value={company}
            name="company"
          />
          <select
            className={styles.selectColor}
            onChange={onChangeEvent}
            value={color}
            name="color"
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
            onChange={onChangeEvent}
            value={title}
            name="title"
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.inputEmail}
            onChange={onChangeEvent}
            value={email}
            name="email"
          />
        </div>
        <div className={styles.content3}>
          <textarea
            placeholder="Message"
            className={styles.inputTitle}
            onChange={onChangeEvent}
            value={message}
            name="message"
          />
        </div>
        <div className={styles.content4}>
          <button className={styles.btnFile} onClick={handleClick}>
            {file}
          </button>
          <input
            type="file"
            ref={hiddenFileInput}
            name="file"
            onChange={onChangeEvent}
            style={{ display: "none" }}
          />
          {/*           
          <label className={styles.btnFile} htmlFor="file">
            {file}
          </label>
          <input
            type="file"
            id="file"
            name="file"
            style={{ display: "none" }}
            onChange={onChangeEvent}
          /> */}
          {Object.keys(props).length === 0 ? (
            <input type="submit" className={styles.btnAdd} value="Add" />
          ) : (
            <input type="submit" className={styles.btnAdd} value="Delete" />
          )}

          {/* <button className={styles.btnAdd}> te </button> */}
        </div>
      </form>
    </div>
  );
};

export default Carditem;
