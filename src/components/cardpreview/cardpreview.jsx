import React, { useContext, useEffect, useState } from "react";
import Cardpreviewitem from "../cardpreviewitem/cardpreviewitem";
import styles from "./cardpreview.module.css";
import { UserContext } from "../../providers/userprovider";
import { dbRead } from "../../service/fireBase";

const Cardpreview = () => {
  const user = useContext(UserContext);
  const [cards, setCards] = useState([]);

  console.log("Cardpreview()");
  useEffect(() => {
    if (user) {
      dbRead(user.uid, (res) => {
        if (res !== null) {
          console.log(res);
          let strArr = Object.keys(res); // object to array
          let data = [];
          strArr.map((value) => {
            let key = { key: value };
            data.push(Object.assign(key, res[value]));
          });
          // data.push(res);

          console.log(data);

          setCards(data);
        } else {
          setCards([]);
        }
      });
    }
  }, []);

  return (
    <div className={styles.cardpreview}>
      <span> Card Preview </span>
      <ul className={styles.cards}>
        {cards.map((card, index) => (
          <li className={styles.card_li} key={index}>
            <Cardpreviewitem key={card.key} card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cardpreview;
