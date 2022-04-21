import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addComments,
  fetchComments,
} from "../../../redux/reducers/commentsReducer";
import { fetchNews } from "../../../redux/reducers/newsReducer";
import Header from "../../Header";
import "./oneNew.style.css";
const OneNew = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const id = useParams().id;
  const news = useSelector((state) => state.NewsReducer.news);
  const comms = useSelector((state) => state.CommentsReducer.comments);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value[0] === " " || value === "") {
      return;
    }
    dispatch(addComments(value, id));
    setValue("");
  };

  const handleEnter = (e) => {
    if (value && e.key === "Enter") {
      dispatch(addComments(value));
      setValue("");
    }
  };
  return (
    <>
    <Header />
      <div className="newsCategories">
        {news.map((item) => {
          if (item._id === id) {
            return (
              <div key={item._id} className="one__new">
                <div className="one__new-container">
                  <div className="one__new-title">
                    <h2 className="header">{item.title}</h2>
                  </div>
                  <div className="one__new-img">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="new_text-text">{item.text}</div>
                  <hr className="news_hr" />
                </div>
                <div className="news_comments">
                  <h2 className="head_comments">Комментарии</h2>
                  <div className="div_comments">
                    {comms.map((item) => {
                      if (item.news === id) {
                        return (
                          <div className="one_comment_info" key={item._id}>
                            <div className="one_comment">{item.text}</div>
                          </div>
                        );
                      }
                    })}
                    <div className="add_comment">
                      <div className="input_commet">
                        <input
                          type="text"
                          onChange={(e) => handleChange(e)}
                          onKeyPress={(e) => handleEnter(e)}
                          placeholder="Добавить комментарий"
                          value={value}
                        />
                      </div>
                      <button className="btn_comment" onClick={handleClick}>
                        Добавить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default OneNew;
