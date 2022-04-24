import React from "react";

const Card = ({ img, name, price, addToСart, product }) => {

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
          <button onClick={() => addToСart(product)}>Купить</button>
        </div>
      </div>
    </>
  );
};

export default Card;
