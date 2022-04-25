import React, { useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import notfound from "./img/notfound.gif"

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [sort, setSort] = useState(false)
  const [sortUp, setSortUp] = useState(false)
  const [sortDown, setSortDown] = useState(false)

  const products = useSelector((state) => state.barReducer.products);

  function handleAddToCart(product) {
    dispatch({ type: "addToCart", payload: product });
    dispatch({ type: "added", payload: product });
  }

  const sortToMax = () => {
    dispatch({ type: "sortToMax" })
    setSort(!sort)
    setSortUp(true)
    setSortDown(false)
  }

  const sortToMin = () => {
    dispatch({ type: "sortToMin" })
    setSort(!sort)
    setSortDown(true)
    setSortUp(false)
  }

  const filteredItems = products.filter((item) => {
    if (!categoryId) {
      return item.name.toLowerCase().includes(value.toLowerCase());
    }
    if (item.categoryId === Number(categoryId)) {
      return item.name.toLowerCase().includes(value.toLowerCase());
    }

    return null
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
            <li>
              Упорядочить по цене
              <button
                class="material-symbols-outlined"
                onClick={sortToMax}
                disabled={!sortUp ? false : true}
              >
                arrow_upward
              </button>
              <button
                class="material-symbols-outlined"
                onClick={sortToMin}
                disabled={!sortDown ? false : true}
              >
                arrow_downward
              </button>
            </li>
          </ul>
        </div>
        <div className="cardsMain">
          {!filteredItems.length ? (
            <div className="notfound">
              <img src={notfound} className="notfound-img" alt="pulp-fiction" />
            </div>
          ) : filteredItems.map((product) => {
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
