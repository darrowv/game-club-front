import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const id = useSelector((state) => state.applicationReducer.id);
  
  const auth = useSelector((state) => state.applicationReducer.signIn);

  const token = useSelector(state => state.applicationReducer.token)

  const handleOut = () => {
    if (!auth) {
      localStorage.clear();
    }
  };

  const logText = !token ? "ВОЙТИ" : "ВЫЙТИ";

  return (
    <header>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center"}}>
          <span className="logo">R&R</span>
          <ul className="list">
            <Link className="link" to={"/"}>
              Главная
            </Link>
            <a className="link" href="/#tariffs">
              Тарифы
            </a>
            <Link className="link" to={"/cafe"}>
              Бар
            </Link>
            <a className="link" href="/#stock">
              Акции
            </a>
            <Link className="link" to={"/news"}>
              Новости
            </Link>
            <Link className="link" to={"/contacts"}>
              Контакты
            </Link>
            <Link className="link"  to={`/profile/${id}`} >
              Профиль
            </Link>
          </ul>
          <Link to={"/signin"}>
            <button onClick={handleOut} className="signIn">
              {token ? 'ВЫЙТИ' : 'ВОЙТИ'}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
