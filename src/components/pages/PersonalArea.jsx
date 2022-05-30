import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createNick,
  getUsersById,
  handleImage,
} from "../../redux/reducers/application";
import PcBooking from "../carts/booking/PcBooking";
import PsBooking from "../carts/booking/PsBooking";
import VipBooking from "../carts/booking/VipBooking";

import Footer from "../Footer";
import Header from "../Header";
import styles from "./Profile.module.css";
import "./presonalB.css";

const PersonalArea = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.applicationReducer.users);
  const load = useSelector((state) => state.applicationReducer.loader);
  console.log(users);

  const dispatch = useDispatch();
  const [nickName, setNickName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    dispatch(getUsersById(id));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(handleImage(users._id, file));
  };
  const handleNickName = () => {
    dispatch(createNick(nickName, users._id));
  };
  const handleChange = (e) => {
    setNickName(e.target.value);
  };
  const avat =
    "https://c0.klipartz.com/pngpicture/684/352/gratis-png-un-golpe-hombre-saitama-anime-superheroe-un-golpe.png";

  return (
    <div>
      <Header />
      {load ? (
        <div className="spin-wrapper">
          <div className="spinner">loading</div>
        </div>
      ) : (
        <>
          <div className={styles.file__wrapper}>
            <div className={styles.img}>
              <div className={styles.input__file}>
                <div>
                  <div>
                    <label htmlFor="upload_photo">
                      <img
                        className={styles.image__profile}
                        src={
                          users.image
                            ? `http://localhost:6006/${users.image}`
                            : avat
                        }
                        alt="none"
                      />

                      <input
                        id="upload_photo"
                        className={styles.file}
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>

                    <div className={styles.container}>
                      <div
                        className={styles.animated__word}
                        onClick={handleClick}
                      >
                        Изменить фото
                      </div>
                    </div>
                  </div>
                  <div className={styles.nickName__div}>
                    <input
                      placeholder="Введите желаемый ник, Милорд!"
                      className={styles.nickName__input}
                      onChange={handleChange}
                      value={nickName}
                    />
                  </div>
                  <div className={styles.buttonNickName}>
                    <button
                      className={`${styles.btn3} ${styles.custom__btn}`}
                      onClick={handleNickName}
                    >
                      <span>Изменить ник</span>
                    </button>
                  </div>

                  <p style={{display: 'flex', alignItems: 'center'}}>Ваш ник: <span className={styles.userName} >{users.nickName}</span></p>
                  <p>Ваш баланс: {users.amount}</p>
                </div>
                <h1>Забронировано вами:</h1>
                <div className="personal_booking">
                
                  <div className="personal_pc">
                    <div><h4 style={{fontSize: '14px'}}>Обычный зал</h4></div>
                    <PcBooking />
                  </div>

                  <div className="personal_pc">
                  <div><h4 style={{fontSize: '14px'}}>PS зал</h4></div>
                    <PsBooking />
                  </div>

                  <div className="personal_pc">
                  <div><h4 style={{fontSize: '14px'}}>VIP зал</h4></div>
                    <VipBooking />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.glitch}></div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default PersonalArea;
