import React from "react";
import styles from "../style.module.css";

const Carts2 = () => {
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
          <span className={styles.oneSpan}>Большой выбор игр!</span>
          <h1 className={styles.h1Cart}>VIP ЗАЛ</h1>
          <div className={styles.textAbout}>
            <p className={styles.about}>
              В этом зале конфигурации пк самая мощная, можно чиле поиграть во
              все что хочешь <br />
              И так наша конфигурация в основном зале: <br />
              ASUS ROG Swift PG65UQ 244Hz <br />
              i9 – 12900 3.4 mhz <br />
              GeForce 3080TI RTX GigaByte 12Gb <br />
              Мышь: Razer Abyssus Essential <br />
              Клавиатура: Razer Cynosa Pro Bundle <br />
              Наушники: Hyperx Alpha S <br />
            </p>
            <p className={styles.quantity}>Количество мест</p>
            <p>от 1 до 10</p>
          </div>
          <button className={styles.btnCarts}>Записаться на игру</button>
        </div>
      </div>
    </div>
  );
};

export default Carts2;
