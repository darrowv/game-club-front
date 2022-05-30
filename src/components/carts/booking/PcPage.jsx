import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlace, patchFetch } from "../../../redux/reducers/PlaceReducer";
import "./booking.css";
import gf from './img/gamePhoto.jpg'

const PcPage = () => {
  const id = localStorage.getItem("id");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlace());
  }, [dispatch]);

  const place = useSelector((state) => state.PlaceReducer.place);

  const handlePlace = (i, boolean, id) => {
    dispatch(patchFetch(i, boolean, id));
  };

  return (
    <>
      <div className="booking_main">
        {" "}
        <div>
        
        </div>
        <div className="place_cart">
        <img width={'260px'} style={{paddingBottom: '20px'}} src={gf} alt="" />
          <div className="zal">
            <h1>Компьютерный зал</h1>
          </div>
          {place.map((item) => {
            return (
              <div className="place_wind">
                <button
                 disabled={item.user && id !== item.user ? true : false}
                  className={item.user ? "place" : "place_check"}
                  onClick={(e) =>
                    item.user
                      ? handlePlace(item._id, item.boolean, null)
                      : handlePlace(item._id, item.boolean, id)
                  }
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PcPage;
