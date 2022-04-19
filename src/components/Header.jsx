import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <ul className="list">
          <Link to={"/"}>Главня</Link>
          <Link to={"/"}>Тарифы</Link>
          <Link to={"/"}>Акции</Link>
          <Link to={"/"}>Новости</Link>
          <Link to={"/"}>Контакты</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
