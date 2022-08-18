import React from "react";
import Header from "../../Header";
import Search from "./Search";
import "./bar.css";
import Footer from "../../Footer";

const Bar = () => {
  return (
    <>
      <Header />
      <section className="barSection">
        <div>
          <Search />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Bar;
