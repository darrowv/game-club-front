import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center"}}>
          <span className="logo">R&R</span>
          <ul className="list">
            <a className="link" href="/">
              Главная
            </a>
            <a className="link" href="/#tariffs">
              Тарифы
            </a>
            <a className="link" href="/#stock">
              Акции
            </a>
            <a className="link" href="/cafe">
              Бар
            </a>
            <a className="link" href="/news">
              Новости
            </a>
            <a className="link" href="/contacts">
              Контакты
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
