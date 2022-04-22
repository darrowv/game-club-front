import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPlace, patchFetch } from "../../../redux/reducers/PlaceReducer";
import Header from "../../Header";
import "./booking.css";

const BookingPage = () => {
  const id = localStorage.getItem("id");
  const users = useSelector((state) => state.PlaceReducer.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlace());
  }, [dispatch]);
  const place = useSelector((state) => state.PlaceReducer.place);
  const us = place.map((item) => {
    return item;
  });


  const handlePlace = (i, boolean, id) => {
    dispatch(patchFetch(i, boolean, id));
  };
  return (
    <>
      <Header />
      <div className="booking_main">
        {" "}
        <div className="place_cart">
          {place.map((item) => {
            return (
              <div className="place_wind">
                <div
                  className={item.user ? "place" : "place_check"}
                  onClick={(e) => item.user ? handlePlace(item._id, item.boolean, null) : handlePlace(item._id, item.boolean, id)}
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookingPage;
