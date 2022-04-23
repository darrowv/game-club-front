import React, { useState } from "react";
import { useSelector } from "react-redux";
import cart from "./img/cart.png";

const Cart = () => {
  const [open, setOpen] = useState(false);

  const cartItems = useSelector((state) => state.barReducer.cartItems);

  const handleOpen = () => {
    setOpen(!open);
  };

  const increaseAmount = (amount) => {
    return amount++
  }

  const decreaseAmount = (amount) => {
    return amount ? amount-- : null
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className="cartButton">
        <img onClick={handleOpen} width={"60px"} src={cart} alt="" />
        {open && (
          <div className="cart">
            <span
              class="material-symbols-outlined closeBtn"
              onClick={handleOpen}
            >
              cancel
            </span>
            <div className="cart-items">
              <ul className="cart-items-list">
                {cartItems.map((item) => {
                  return (
                    <li className="cart-item">
                      <div style={{display: "flex", alignItems: "center"}}> 
                        <div>
                          <img
                            className="item-img"
                            src={item.img}
                            alt="product"
                          />
                        </div>
                        <div className="item-name">{item.name}</div>
                      </div>
                      <div className="item-amount">
                        <span className="decrease" onClick={() => decreaseAmount(item.amount)}>-</span>
                        <span className="amount-number">{item.amount}</span>
                        <span className="increase" onClick={() => increaseAmount(item.amount)}>+</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
