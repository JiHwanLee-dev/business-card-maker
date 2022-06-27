import React, { useContext, useEffect, useState } from "react";
import Carditem from "./carditem";
import { UserContext } from "../../providers/userprovider";
import { dbDelete, dbRead } from "../../service/fireBase";
import styles from "./cardmaker.module.css";

const Cardmaker = () => {
  const user = useContext(UserContext);
  // console.log(user);
  const [cards, setCards] = useState([]);
  const [refresh, setRefresh] = useState("");

  const hadnleDelete = (key) => {
    console.log("hadnleDelete() ");
    console.log(key);

    dbDelete(user.uid, key, () => {
      console.log("aaaaaaaa");
      setRefresh("Refresh");
    });
  };

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
  }, [refresh]);

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
