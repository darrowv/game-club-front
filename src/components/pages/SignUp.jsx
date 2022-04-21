import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createApp } from "../../redux/reducers/application";
import styles from "./signUpIn.module.css";
import Header from "../Header";

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
      </div>
    </div>
  );
};

export default SignUp;
