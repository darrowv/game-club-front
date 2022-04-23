import React, { useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const products = useSelector((state) => state.barReducer.products);

  const addTocart = (product) => {
    dispatch({ type: "addToCart", payload: product })
  }
  

  const filteredItems = products.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <header className="barHeader">
        <div>
          <input
            placeholder="Введите наименование"
            className="barInput"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="barFind">НАЙТИ</button>
        </div>
        <Cart />
      </header>
      <div className="barContant">
        <div>
          <ul className="barList">
            <Link className="barLinks" to={"/"}>
              Напитки
            </Link>
            <Link className="barLinks" to={"/"}>
              Шоколад
            </Link>
            <Link className="barLinks" to={"/"}>
              Снэки
            </Link>
          </ul>
        </div>
        <div className="cardsMain">
          {filteredItems.map((products) => {
            return (
              <Card
                key={products._id}
                name={products.name}
                img={products.img}
                price={products.price}
                addTocart={addTocart}
                products={products}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
