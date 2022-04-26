import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createApp } from "../../redux/reducers/application";
import styles from "./signUpIn.module.css";
import Link from "react-scroll/modules/components/Link";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    dispatch(createApp(login, password));
    navigate('/')
  };
  return (
    <>
    <Header />
      <div>
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "150px" }}>
        <div>
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
        <button className={styles.btn} onClick={submit}>
          Зарегистрироваться
        </button>
        <div>
        <Link className="" to={'/signin'}>Уже есть аккаунт?</Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;