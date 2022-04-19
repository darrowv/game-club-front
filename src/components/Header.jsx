import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <header>
      <ul className='list'>
        <Link to={'/'}>Главня</Link>
        <Link to={'/'}>Тарифы</Link>
        <Link to={'/'}>Акции</Link>
        <Link to={'/'}>Новости</Link>
        <Link to={'/'}>Контакты</Link>
      </ul>
    </header>
  );
};

export default Header;