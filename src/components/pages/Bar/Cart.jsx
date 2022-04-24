import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "./img/cart.png";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.barReducer.cartItems);

  const handleOpen = () => {
    setOpen(!open);
  };

  const increaseAmount = (item) => {
    if(item.amount < 20) {
      dispatch({ type: "increaseAmount", payload: item })
    }
  }

  const decreaseAmount = (item) => {
    if(item.amount > 1) {
      dispatch({ type: "decreaseAmount", payload: item })
    }
  }

  const removeFromCart = (id) => {
    dispatch({ type: "removeFromCart", payload: id })
    dispatch({ type: "removed", payload: id })
    
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
                {!cartItems.length ? (<div className="empty-cart">Корзина пуста</div>) : null}
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
                        <button className="decrease" onClick={() => decreaseAmount(item)}>-</button>
                        <span className="amount-number">{item.amount}</span>
                        <button className="increase" onClick={() => increaseAmount(item)}>+</button>
                        <span className="material-symbols-outlined remove-item" onClick={() => removeFromCart(item.id)}>delete</span>
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
