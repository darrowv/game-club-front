import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNews } from "../../../redux/reducers/newsReducer";
import Footer from "../../Footer";
import Header from "../../Header";
import "./news.style.css";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.NewsReducer.news);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
   <>
   <Header />
     <div className="deni__news">
     <h1 style={{textAlign: 'center', color: 'white'}}>Новости на сегодня</h1>
      <div className="deni__news_content">
        {news.map((item) => {
          return (
            <Link to={`/news/${item._id}`} className="news_deni" key={item._id}>
              <div className="news__img">
                <img src={item.img} alt="img" />
              <div className="news__title">{item.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    <Footer />
   </>
  );
};

export default News;
