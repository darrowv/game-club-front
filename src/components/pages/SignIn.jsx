import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../redux/reducers/application";
import Header from "../Header";

import styles from "./signUpIn.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const SignIn = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.applicationReducer.id);
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
    navigate("/");
  };
  return (
    <div>
      <Header />

      <div className={styles.main__div}>
    <>
      <Header />
      <div className={styles.signUpMain}>
      <h2 style={{paddingBottom: '30px', color: '#fff'}}>Авторизация</h2>
        <div>
          <input
            className={styles.input1}
            type="text"
            placeholder="type login"
            value={login}
            onChange={handleChangeLogin}
          />
        </div>
        <div>
          <input
            className={styles.input1}
            type="password"
            placeholder="type password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>

        <button className={styles.btn} onClick={handleSubmit}>
          <Link to={`/profile/${id}`}>LOGIN</Link>
        </button>
      </div>
    </div>
        <div>
          <button className={styles.btn} onClick={handleSubmit}>
            LOGIN
          </button>
        </div>
        <div>
          <Link to={"/signup"}>Нет аккаунта?</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
