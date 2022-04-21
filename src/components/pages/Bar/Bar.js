import React, { useEffect } from "react";
import Header from "../../Header";
import Search from "./Search";
import "./bar.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/reducers/barReducer";
import Cart from "./Cart";
import Footer from "../../Footer";

const Bar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <>
      <Header />
      <section className="barSection">
        <div>
          <Cart />
          <Search />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Bar;
