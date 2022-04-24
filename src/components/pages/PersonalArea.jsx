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
import "./presonalB.css"

const PersonalArea = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.applicationReducer.users);
  const load = useSelector((state) => state.applicationReducer.loader);

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
                      />
                      <input className={styles.profileInput} onChange={handleChange} value={nickName} />
                      <button className={styles.profileButton} onClick={handleNickName}>жми шейкер</button>
                      <input
                        id="upload_photo"
                        className={styles.file}
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>
                  </div>

                  <div className={styles.container}>
                    <button
                      className={styles.animated__word}
                      onClick={handleClick}
                    >
                      GAME
                    </button>
                  </div>
                  <p>Ваш ник: {users.nickName}</p>
                  <p>Ваш баланс: {users.amount}</p>
                </div>
                <h1>Забронировано вами:</h1>
                <div className="personal_booking">
                  <div className="personal_pc">
                    <PcBooking />
                  </div>

                  <div className="personal_pc">
                    <PsBooking />
                  </div>

                  <div className="personal_pc">
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
