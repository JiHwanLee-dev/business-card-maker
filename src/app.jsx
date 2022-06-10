import logo from "./logo.svg";
import logo2 from "./logo192.png";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
