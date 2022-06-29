import React, { useContext, useEffect, useState } from "react";
import styles from "./cardpreviewitem.module.css";
import { UserContext } from "../../providers/userprovider";
import { dbRead } from "../../service/fireBase";

const Cardpreviewitem = (props) => {
  console.log("CardPreviewItem()");
  console.log(props);

  //   const container = useRef();

  const [color, setColor] = useState("");

  const aa = "dark";
  const element = <h1>Hello, world!</h1>;
  const light = "1px solid red";
  const dark = "1px solid black";

  let backColor = "1px solid blue";

  if (props.card.color === "Light") {
    backColor = styles.light;
  } else if (props.card.color === "Dark") {
    backColor = styles.dark;
  } else if (props.card.color === "Colorful") {
    backColor = styles.colorful;
  }

  useEffect(() => {
    // console.log("useEffecrt()");
    // if (props.card.color === "Light") {
    //   console.log("aaaaaaaaaaaaaa");
    //   backColor = "1px solid red";
    // } else if (props.card.color === "Dark") {
    //   backColor = "1px solid black";
    // }
  }, []);

  return (
    <>
      <div
        className={`${styles.container} ${backColor}`}
        style={{ border: backColor }}
      >
        <div className={styles.img}>
          <img src="../../logo192.png" alt="" />
        </div>
        <div className={styles.content}>
          <div>
            <span className={styles.name}> {props.card.name} </span>
          </div>
          <div>
            <span> {props.card.company} </span>
          </div>
          <div className={styles.line}></div>
          <div>
            <span> {props.card.title} </span>
          </div>
          <div>
            <span> {props.card.email} </span>
          </div>
          <div className={styles.message}>"{props.card.message}"</div>
        </div>
      </div>
    </>
  );
};

export default Cardpreviewitem;
