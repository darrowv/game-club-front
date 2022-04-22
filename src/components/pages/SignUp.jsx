import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createApp } from "../../redux/reducers/application";
import Header from "../Header";
import styles from "./signUpIn.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const SignUp = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    dispatch(createApp(login, password));
  };
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", textAlign: "center", marginTop: "150px" }}>
        <div>

          <h2 style={{paddingBottom: '30px', color: '#fff'}}>Регистрация</h2>
          <input
            className={styles.input1}
            type="text"
            placeholder="type login"
            value={login}
            onChange={handleLogin}
          />
        </div>
        <div>
          <input
            className={styles.input1}
            type="password"
            placeholder="type password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
        <button className={styles.btn} onClick={submit}>
          Зарегистрироваться
        </button>
        </div>
        <Link to={'/signin'} >Уже есть аккаунт?</Link>

      </div>
      <Footer />
    </>
  );
};

export default SignUp;
