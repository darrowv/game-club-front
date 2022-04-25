import React from "react";

const Card = ({ img, name, price, handleAddToCart, product }) => {
  return (
    <>
      <div className="barCard">
        <div className="imgBlock">
          <img className="barIcons" src={img} alt="" />
        </div>
        <div>
          <h3 className="bar_h3">{name}</h3>
        </div>
        <div className="aboutSneak">
          <p>Цена: {price}р</p>
          <button
            onClick={() => handleAddToCart(product)}
            disabled={!product.inCart ? false : true}
          >
            {!product.inCart ? "Купить" : "В корзине"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
