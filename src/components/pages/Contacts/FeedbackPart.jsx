import React, { useState } from "react";

const FeedbackPart = () => {
  const [window, setWindow] = useState(false);
  const [empty, setEmptyField] = useState(false)
  const [msgText, setMsgText] = useState("")
  const [nameText, setNameText] = useState("")
  const [emailText, setEmailText] = useState("")

  const handleMsgText = (e) => {
    setMsgText(e.target.value)
    setEmptyField('')
  }

  const handleNameText = (e) => {
    setNameText(e.target.value)
    setEmptyField('')
  }

  const handleEmailText = (e) => {
    setEmailText(e.target.value)
    setEmptyField('')
  }

  const handleClick = () => {
    if (!msgText || !nameText || !emailText) {
      return setEmptyField(true)
    } 
    setWindow(true)
    setEmailText('')
    setMsgText('')
    setNameText('')
    setEmptyField('')
  }

  return (
    <>
      {window ? (
        <div className="modal-wrapper">
          <div className="modal-window">
            <span>
              Заявка успешно отправлена в никуда. В ближайшее время с вами никто
              не свяжется
            </span>
            <span
              onClick={() => setWindow(false)}
              class="material-symbols-outlined close-btn"
            >
              cancel
            </span>
          </div>
        </div>
      ) : null}
      <div className="feedback">
        <div className="fb-title">ОБРАТНАЯ СВЯЗЬ</div>
        <hr className="demarcation" />
        <section className="inputs">
          <div className="personal-data">
            <input
              value={nameText}
              onChange={handleNameText}
              type="text"
              name="name"
              id="name-input"
              placeholder="Ваше имя"
            />
            <input
              value={emailText}
              onChange={handleEmailText}
              type="email"
              name="email"
              id="email-input"
              placeholder="E-mail"
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              id="message"
              placeholder="Текст заявки"
              minLength={10}
              maxLength={500}
              value={msgText}
              onChange={handleMsgText}
            ></textarea>
          </div>
        </section>
        <section className="send-msg">
          <button className="send-btn" onClick={handleClick}>
            Отправить
          </button>
          {empty ? (
            <div className="error-msg">*Необходимо заполнить все поля</div>
          ): null}
          <p className="under-btn">
            Нажимая кнопку отправить, вы соглашаетесь с тем, что потратили свое
            время впустую
          </p>
        </section>
      </div>
    </>
  );
};

export default FeedbackPart;
