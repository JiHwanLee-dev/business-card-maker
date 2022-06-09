import logo from "./logo.svg";
import logo2 from "./logo192.png";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <div className={styles.container}>
        <img src={logo2} alt="" />
        <Login />
      </div>
    </>
  );
}

export default App;
