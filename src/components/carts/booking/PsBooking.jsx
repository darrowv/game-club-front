import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPs } from '../../../redux/reducers/PsReduser';

const PsBooking = () => {
    const place = useSelector((state) => state.PsReducer.place);
    const id = localStorage.getItem("id");


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadPs());
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

export default PsBooking;