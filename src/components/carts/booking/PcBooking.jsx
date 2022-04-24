import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlace } from '../../../redux/reducers/PlaceReducer';

const PcBooking = () => {
    const place = useSelector((state) => state.PlaceReducer.place);
    const id = localStorage.getItem("id");


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadPlace());
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

export default PcBooking;