import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../redux/reducers/application";
import Header from "../Header";

import styles from "./signUpIn.module.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.applicationReducer.id);
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
  };
  return (
    <div>
      <Header />

      <div className={styles.main__div}>
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
  );
};

export default SignIn;