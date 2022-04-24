import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import "./contacts.css";
import FeedbackPart from "./FeedbackPart";

const Contacts = () => {
  return (
    <>
      <Header />
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div className="page-content">
        <div className="contacts">
          <div className="title">КОНТАКТЫ</div>
          <hr className="demarcation"/>
          <div className="contacts-data">
            <ul>
              <li className="contact">
                <span class="material-symbols-outlined">call</span>
                <p>+7 (999) 888-77-66</p>
              </li>
              <li className="contact">
                <span class="material-symbols-outlined">mail</span>
                <p>game_club@mail.ru</p>
              </li>
              <li className="contact">
                <span class="material-symbols-outlined">schedule</span>
                <p>Пн. - Вс. : круглосуточно</p>
              </li>
            </ul>
          </div>
          <div className="add-contact">
            <p>
              По предложениям и вопросам о сотрудничестве в области маркетинга и
              PR пишите на kupireklamu@pozhalsta.ru
            </p>
          </div>
        </div>
      </div>
      <FeedbackPart />
      <Footer />
    </>
  );
};

export default Contacts;
