import React, { useState } from "react";
import cart from "./img/cart.png";

const Cart = () => {
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="cartButton" onClick={handleOpen}>
        <img width={"60px"} src={cart} alt="" />
        {open && (
          <div className="cart">
            <button 
              className="closeBtn" 
              onClick={handleOpen}
            >
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
