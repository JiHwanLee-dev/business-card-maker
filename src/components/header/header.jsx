import React, { useContext, useEffect } from "react";
import logo from "../../images/logo.png";
import styles from "./header.module.css";
import { logOut } from "../../service/fireBase";
import { UserContext } from "../../providers/userprovider";
import { useNavigate } from "react-router-dom";

// 새로고침 시 user값이 초기화가 되고, userprovider에서 함수가 실행된 후 user 값이 반환됨. 나중에 수정해야 되는 부분.
const Header = () => {
  console.log("Header");
  const user = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    console.log();
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="" />
        {user && (
          <button className={styles.btnLogout} onClick={logOut}>
            Logout
          </button>
        )}
      </div>

      <h2 className={styles.title}> Business Card Maker </h2>
    </header>
  );
};

export default Header;
