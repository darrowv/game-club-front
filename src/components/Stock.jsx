import React from "react";
import "./stock.style.css";

const Stock = () => {
  return (
    
    <div className="stock">
      <a name="stock"></a>
      <h1 className="deni__stock_title">Акции</h1>
      <div className="promos__list">
        <img
          src="https://avatars.mds.yandex.net/get-tycoon/6567337/2a000001803c7740cabc0eb8e3a234644142/priority-promotion"
          className="promo__image"
          alt="stock"
        />
        <div className="promo__details">
          <h3 className="promo__title">Супер цены на Bootcamp</h3>

          <div className="promo__description promo__description_description-outer">
            <div className="promo__description promo__description_description-inner">
              Новые суперкомпы на базе RTX 3060 + монитор 280 Hz. Ночь всего за
              750 р.
            </div>
          </div>

          <div className="promo__date">
            с&nbsp;18.04.2022&nbsp;по&nbsp;18.05.2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
