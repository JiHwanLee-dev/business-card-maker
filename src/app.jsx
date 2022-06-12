import logo from "./logo.svg";
import logo2 from "./logo192.png";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

function App() {
  console.log("App()");
  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            {/* <Route element={<Layout />}>
              <Route path="/" element={<Login />}></Route>
            </Route> */}
            <Route path="/" element={<Login />}></Route>
            <Route path="/app" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
