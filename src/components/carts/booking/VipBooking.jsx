import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadVip } from '../../../redux/reducers/VipReducer';

const VipBooking = () => {
    const place = useSelector((state) => state.VipReducer.place);
    const id = localStorage.getItem("id");


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadVip());
    }, [dispatch]);


    return (
        <div>
            {place.map((item, i) => {
            return (
              <div className="place_wind">
                <div key={i}>
                  {item.user === id ? item.name: null}
                </div>
              </div>
            );
          })}
        </div>
    );
};

export default VipBooking;