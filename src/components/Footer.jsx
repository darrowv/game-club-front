import React from "react";
import "./footer.style.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import {FiMail} from 'react-icons/fi'
const Footer = () => {
  return (
    <div className="deni__footer">
      <div className="footer__top">
        <div className="deni__wrapper">
          <div className="footer-top__box">
            <div className="footer-col footer-col__nav">
              <div className="footer-nav__box">
                <ul className="footer-nav">
                  <li className="main-nav-list__item">
                    <a href="/" className="main-nav-list__link">
                      О КЛУБЕ
                    </a>
                  </li>
                  <li className="main-nav-list__item">
                    <a href="/" className="main-nav-list__link">
                      НОВОСТИ
                    </a>
                  </li>
                  <li className="main-nav-list__item">
                    <a href="/" className="main-nav-list__link">
                      ИНФОРМАЦИЯ
                    </a>
                  </li>
                  <li className="main-nav-list__item">
                    <a href="/" className="main-nav-list__link">
                      КАК ДОБРАТЬСЯ
                    </a>
                  </li>
                  <li className="main-nav-list__item">
                    <a href="/" className="main-nav-list__link">
                      БИБЛИОТЕКА ИГР
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col__center">
              <div className="footer-call">
                <div className="footer-call__text">
                  ПЛАНИРУЙ СВОЙ ОТДЫХ ЗАРАНЕЕ!
                </div>
                <br />
                <a href="/" className="deni__btn">
                  заказать звонок
                </a>
              </div>
            </div>
            <div className="deni__end">
            <div className="footer-col__info">
              <div className="footer-info__block">
                <a href="https://telegram.org/" className="social_end">
                  <FaTelegramPlane size={30} style={{ marginTop: 15 }} />
                </a>
              </div>
              <div className="footer-info__block">
                <a href="https://telegram.org/" className="social_end">
                  <BsFillTelephoneFill size={30} style={{ marginTop: 15 }} />
                </a>
              </div>
              <div className="deni__number">
                <a href="/" className="deni__link">
                  +7(999)999-99-99
                </a>
              </div>
            </div>
            <div className="footer-col__info">
              <div className="footer-info__block">
                <a href="https://telegram.org/" className="social_end">
                  <FiMail size={30} style={{ marginTop: 15 }} />
                </a>
              </div>
              <div className="deni__number">
                <a href="/" className="deni__link">
                  Адаптив@ЮйЦуьн?.com
                </a>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
