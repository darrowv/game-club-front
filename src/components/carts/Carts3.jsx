import React from "react";
import { Link } from "react-router-dom";
import styles from "../style.module.css";

const Carts3 = () => {
  return (
    <div className={styles.mainDivCars}>
      <div className={styles.divCarts}>
        <div>
          <img
            src="https://bau-architects.ru/wp-content/uploads/2021/04/r_gl.jpg"
            className={styles.imgCarts}
            alt="pc"
          />
        </div>
        <div className={styles.divTextCarts}>
          <span className={styles.oneSpan}>Захватывает дух!</span>
          <h1 className={styles.h1Cart}>PLAYSTATION ROOM</h1>
          <div className={styles.textAbout}>
            <p className={styles.about}>
              В этом зале есть VR+PLAYSTATION 5 , Динамические VR-аттракционы.
              Почувствуй настоящие перегрузки на виражах и резких маневрах!
              <br />
              Американские горки, гигантские качели и многое другое. <br />
              Спецэффекты нового поколения! Кричать разрешено! <br />
              Есть та кже пуфики <br />
              Можно собраться с друзьями и посмотреть фильмы
              <br />
            </p>
            <p className={styles.quantity}>Количество мест</p>
            <p>от 1 до 15</p>
          </div>
          <Link className={styles.btnCarts} to={"/booking"} >Записаться на игру</Link>
        </div>
      </div>
    </div>
  );
};

export default Carts3;
