import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const id = useSelector((state) => state.applicationReducer.id);
  
  const auth = useSelector((state) => state.applicationReducer.signIn);

  const handleOut = () => {
    if (!auth) {
      localStorage.clear();
    }
  };

  const logText = auth ? "ВОЙТИ" : "ВЫЙТИ";

  return (
    <header>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="logo">LOGO</span>
          <ul className="list">
            <Link className="link" to={"/"}>
              Главная
            </Link>
            <Link className="link" to={"/"}>
              Тарифы
            </Link>
            <Link className="link" to={"/cafe"}>
              Бар
            </Link>
            <Link className="link" to={"/"}>
              Акции
            </Link>
            <Link className="link" to={"/"}>
              Новости
            </Link>
            <Link className="link" to={"/"}>
              Контакты
            </Link>
            <Link className="link" to={`/profile/${id}`}>
              Профиль
            </Link>
          </ul>
          <Link to={"/signin"}>
            <button onClick={handleOut} className="signIn">
              {logText}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
