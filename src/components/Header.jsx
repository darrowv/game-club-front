import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <ul className="list">
          <Link className="link" to={"/"}>Главня</Link>
          <Link className="link" to={"/"}>Тарифы</Link>
          <Link className="link" to={"/"}>Акции</Link>
          <Link className="link" to={"/"}>Новости</Link>
          <Link className="link" to={"/"}>Контакты</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
