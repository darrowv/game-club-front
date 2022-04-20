import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/reducers/application";

const SignIn = () => {
  const dispatch = useDispatch();

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
      <div>
        <input
          type="text"
          placeholder="type login"
          value={login}
          onChange={handleChangeLogin}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="type password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button onClick={handleSubmit}>вход</button>
    </div>
  );
};

export default SignIn;
