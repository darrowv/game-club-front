import React from "react";
import styles from "../style.module.css";
import Carts2 from "./Carts2";
import Carts3 from "./Carts3";

const Carts = () => {
  return (
    <div style={{ marginTop: "50px"}}>
      <div style={{ display: "flex" }} className={styles.mainDivCars}>
        <div className={styles.divCarts}>
          <div>
            <img
              src="https://mybrand.kz/wp-content/uploads/2019/11/franchise-united-gamers-1.jpg"
              className={styles.imgCarts}
              alt="pc"
            />
          </div>
          <div className={styles.divTextCarts}>
            <span className={styles.oneSpan}>Так ты еще не играл!</span>
            <h1 className={styles.h1Cart}>ОСНОВНОЙ ЗАЛ</h1>
            <div className={styles.textAbout}>
              <p className={styles.about}>
                В этом зале конфигурации пк не самая мощная, но также можно на
                чиле поиграть во все что хочешь <br />
                И так наша конфигурация в основном зале: <br />
                AOC 24″ Gaming C24G1 144Hz <br />
                i5 – 12400 3.4 mhz <br />
                GeForce 3070TI RTX GigaByte 6Gb <br />
                Мышь: Razer Abyssus Essential <br />
                Клавиатура: Razer Cynosa Pro Bundle <br />
                Наушники: Hyperx cloud X <br />
              </p>
              <p className={styles.quantity}>Количество мест</p>
              <p>от 1 до 20</p>
            </div>
            <button className={styles.btnCarts}>Записаться на игру</button>
          </div>
        </div>
        <Carts2 />
        <Carts3 />
      </div>
    </div>
  );
};

export default Carts;
