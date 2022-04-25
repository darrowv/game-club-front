import React, { useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const products = useSelector((state) => state.barReducer.products);

  function handleAddToCart(product) {
    dispatch({ type: "addToCart", payload: product });
    dispatch({ type: "added", payload: product });
  }

  const filteredItems = products.filter((item) => {
    if (!categoryId) {
      return item.name.toLowerCase().includes(value.toLowerCase());
    }

    return item.categoryId === Number(categoryId)
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
            <Link className="barLinks" to={"/cafe"}>
              Все
            </Link>
            <Link className="barLinks" to={"/cafe/2"}>
              Напитки
            </Link>
            <Link className="barLinks" to={"/cafe/1"}>
              Шоколад
            </Link>
            <Link className="barLinks" to={"/cafe/3"}>
              Снэки
            </Link>
          </ul>
        </div>
        <div className="cardsMain">
          {filteredItems.map((product) => {
            return (
              <Card
                key={product._id}
                name={product.name}
                img={product.img}
                price={product.price}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
