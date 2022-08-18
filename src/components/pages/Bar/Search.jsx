import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import { getProducts } from "../../../redux/reducers/barReducer";
import Skeleton from "./Skeleton";

const Search = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [sortUp, setSortUp] = useState(false);
  const [sortDown, setSortDown] = useState(false);

  const products = useSelector((state) => state.barReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  function handleAddToCart(product) {
    dispatch({ type: "addToCart", payload: product });
    dispatch({ type: "added", payload: product });
  }

  const sortToMax = () => {
    dispatch({ type: "sortToMax" });
    setSortUp(true);
    setSortDown(false);
  };

  const sortToMin = () => {
    dispatch({ type: "sortToMin" });
    setSortDown(true);
    setSortUp(false);
  };

  const filteredItems = products.filter((item) => {
    if (!categoryId) {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    }
    if (item.categoryId === Number(categoryId)) {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    }
    return null;
  });

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div>
      <div className="barHeader">
        <div>
          <input
            placeholder="Введите наименование"
            className="barInput"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="barFind">НАЙТИ</button>
        </div>
        <Cart />
      </div>
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
                className="material-symbols-outlined"
                onClick={sortToMax}
                disabled={!sortUp ? false : true}
              >
                arrow_upward
              </button>
              <button
                className="material-symbols-outlined"
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
            skeletons
          ) : (
            filteredItems.map((product) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
