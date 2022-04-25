import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import PcPage from "./PcPage";
import PsPage from "./PsPage";
import VipPage from "./VipPage";

const BookingPage = () => {

  const booking = () => {
    return alert("Забронировано") 
  }
  
  return (
    <>
      <Header />
      <div className="bron">
        <div className="booking_button">
          <button onClick={() => booking()} >Забронировать</button>
        </div>
      </div>

      <div className="booking">
        <PcPage />
        <PsPage />
        <VipPage />
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
