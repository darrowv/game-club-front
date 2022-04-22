import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPs, patchPs } from "../../../redux/reducers/PsReduser";
import "./booking.css";

const PsPage = () => {
  const id = localStorage.getItem("id");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPs());
  }, [dispatch]);
  const place = useSelector((state) => state.PsReducer.place);

  const handlePlace = (i, boolean, id) => {
    dispatch(patchPs(i, boolean, id));
  };
  return (
    <>
      <div className="booking_main">
        {" "}
        <div className="place_cart">
          <div className="zal">
            <h1>PlayStation</h1>
          </div>
          {place.map((item) => {
            return (
              <div className="place_wind">
                <div
                  className={item.user ? "place" : "place_check"}
                  onClick={(e) =>
                    item.user
                      ? handlePlace(item._id, item.boolean, null)
                      : handlePlace(item._id, item.boolean, id)
                  }
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

export default PsPage;
