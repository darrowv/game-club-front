import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createApp } from "../../redux/reducers/application";

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
      <div>
        <input
          type="text"
          placeholder="type login"
          value={login}
          onChange={handleLogin}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="type password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button onClick={submit}>Зарегистрироваться</button>
    </div>
  );
};

export default SignUp;
