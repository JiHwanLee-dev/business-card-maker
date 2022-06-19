import React, { useContext, useEffect, useState } from "react";
import Carditem from "./carditem";
import { UserContext } from "../../providers/userprovider";
import { dbRead } from "../../service/fireBase";
import styles from "./cardmaker.module.css";

const Cardmaker = () => {
  const user = useContext(UserContext);
  console.log(user);
  const [cards, setCards] = useState([]);

  const hadnleDelete = (key) => {
    console.log("hadnleDelete() ");
    console.log(key);
  };

  useEffect(() => {
    if (user) {
      dbRead(user.uid, (res) => {
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
      });
    }
  }, []);

  return (
    <>
      <span> Card Maker </span>
      <ul className={styles.cards}>
        {cards.map((card, index) => (
          <li key={index}>
            <Carditem key={card.key} card={card} handleDelete={hadnleDelete} />
          </li>
        ))}
      </ul>
      {/* 반복문으로 파이어베이스에 등록된 카드정보를 불러옴.  */}

      <Carditem />
    </>
  );
};

export default Cardmaker;
