import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandMap = () => {
  return (
    <div>
      <YMaps>
        <div>
          <h2 style={{textAlign:'center', color:'#fff', marginBottom: '30px'}}>Наши клубы</h2>
          <Map 
          width={'100%'}
          height={'450px'}
          defaultState={{ center: [55.75, 37.57], zoom: 10}}>
            <Placemark geometry={[55.78, 37.60]}/>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandMap;
