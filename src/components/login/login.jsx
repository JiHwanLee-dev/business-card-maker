import React, { useContext, useEffect } from "react";
import styles from "./login.module.css";
import {
  signInWithGoogle,
  signInWithGithub,
  logOut,
} from "../../service/fireBase.js";
import logo2 from "../../logo192.png";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/userprovider";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = () => {
  console.log(`Login`);
  const user = useContext(UserContext);
  //   const [redirect, setredirect] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (user) {
      navigate("/app");
      // setredirect('/app')
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo2} alt="" />
      <Header />
      <div className={styles.container}>
        {/* <h2 className={styles.title}>Business Card Maker</h2> */}
        <div className={styles.content}>
          <h2> Login </h2>
          <button className={styles.btn} onClick={signInWithGoogle}>
            Google
          </button>
          <button className={styles.btn} onClick={signInWithGithub}>
            Github
          </button>
        </div>

        {/* <h2 className={styles.footer}> Code your dream</h2> */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
