import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import PcPage from "./PcPage";
import PsPage from "./PsPage";
import VipPage from "./VipPage";

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className="booking">
        <PcPage />
        <PsPage />
        <VipPage />
      </div>
      <Footer/>
    </>
  );
};

export default BookingPage;
