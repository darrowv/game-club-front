import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVip, patchVip } from "../../../redux/reducers/VipReducer";
import "./booking.css";

const VipPage = () => {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVip());
  }, [dispatch]);

  const place = useSelector((state) => state.VipReducer.place);
  const handlePlace = (i, boolean, id) => {
    dispatch(patchVip(i, boolean, id));
  };
  return (
    <>
      <div className="booking_main">
        {" "}
        <div className="place_cart">
        <div className="zal">
            <h1>VIP</h1>
          </div>
          {place.map((item) => {
            return (
              <div className="place_wind">
                <button
                disabled={item.user && id !== item.user ? true : false}
                  className={item.user ? "place" : "place_check"}
                  onClick={() =>
                    item.user
                      ? handlePlace( item._id, item.boolean, null)
                      : handlePlace( item._id, item.boolean, id)
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

export default VipPage;
