import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsersById, handleImage } from "../../redux/reducers/application";
import Header from "../Header";
import styles from "./Profile.module.css";

const PersonalArea = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.applicationReducer.users);
  const load = useSelector((state) => state.applicationReducer.loader);

  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  console.log(users);
  console.log(file);

  useEffect(() => {
    dispatch(getUsersById(id));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(handleImage(users._id, file));
  };

  return (
    <div>
      <Header />
      {!load ? (
        load
      ) : (
        <div className={styles.file__wrapper}>
          <div className={styles.img}>
            <div className={styles.input__file}>
              <div>
                <div>
                  <label for="upload_photo">
                    <img
                      className={styles.image__profile}
                      src={`http://localhost:6006/${users.image}`}
                    />
                    <input
                      id="upload_photo"
                      className={styles.file}
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>

                  {/* 
              <button className={styles.button1} onClick={handleClick}>
                Изменить фото
              </button> */}
                </div>

                <div className={styles.container}>
                  <button
                    className={styles.animated__word}
                    onClick={handleClick}
                  >
                    GAME
                  </button>
                </div>
                <p>Ваш логин: {users.login}</p>
                <p>Ваш баланс: {users.amount}</p>
              </div>
            </div>
          </div>
          <div className={styles.glitch}></div>
        </div>
      )}
    </div>
  );
};

export default PersonalArea;
