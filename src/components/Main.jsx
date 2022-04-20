import React from "react";
import Header from "./Header";
import titleImg from "./img/pubg.png";
import map from "./img/map.png";
import Stock from "./Stock";
import Questions from "./Questions";
import img from "./img/chat4.png";
import Carts from "./carts/Carts";
import ConfigPage from "./ConfigPage";
import img1 from "./img/finding1.svg";
import img2 from "./img/finding2.svg";
import img5 from "./img/finding5.svg";
import img6 from "./img/finding6.svg";
import "./config.css";
import "./pages/Arsenal/config.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="modal">
        <img className="modalImg" src={img} alt="" />
      </div>
      <main>
        <div className="container">
          <div className="flexTitle">
            <div className="mainImgBlock">
              <img className="titleImg" src={titleImg} alt="none" />
            </div>
            <div className="titleText">
              <h1>
                Игровой клуб <br />
                React Redux
              </h1>
              <div className="map">
                <img style={{ width: "100%" }} src={map} alt="" />
              </div>
              <div className="buttons" style={{ display: "flex" }}>
                <button className="titleBtn">Перейти к брони</button>
                <button className="titleBtn">Позвонить</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Stock />
      <section className="cardsSection">
        <Carts />
      </section>
      <section className="finding">
        <h1 className="arsenal">НАШ АРСЕНАЛ</h1>
        <div className="config_sec">
          <ConfigPage
            img={img1}
            title="МОЩНЫE ПК"
            text="С ПРОЦЕССОРАМИ INTEL CORE I7 10700K, I5 10600K, AMD RYZEN 5 3600X.
16 GB ОПЕРАТИВНОЙ ПАМЯТИ НА ЧАСТОТЕ 4000 MHZ И 2 TB NVME SSD НАКОПИТЕЛИ.
ВИДЕОКАРТЫ GEFORCE RTX 2060, GTX 1060 (ОЖИДАЕМ ПОСТУПЛЕНИЕ RTX 3070)."
          />
          <ConfigPage
            img={img6}
            title="МОНИТОРЫ"
            text="27' AOC C27G2ZU 240 HZ
          27' MSI OPTIX MAG271CQR 2К, 144 HZ
          32' MSI OPTIX MAG325CQR 2К, 165 HZ"
          />
          <ConfigPage
            img={img5}
            title="ПЕРЕФЕРИЯ"
            text="КЛАВИАТУРЫ HYPERX ALLOY FPS PRO
          НАУШНИКИ HYPERX CLOUD ALPHA
          МЫШКИ STEELSERIES RIVAL 710"
          />

          <ConfigPage
            img={img2}
            title="ГЕЙМЕРСКИЕ КРЕСЛА"
            text="COUGAR RAMPART"
          />
        </div>
      </section>
      <section className="questionsSection">
        <h2 style={{ textAlign: "center" }}>Частые вопросы</h2>
        <Questions
          question="Есть ли возрастное ограничение?"
          answer="Ворзарстного ограничения нет"
        />
        <Questions
          question="Есть ли возрастное ограничение?"
          answer="Ворзарстного ограничения нет"
        />
        <Questions
          question="Есть ли возрастное ограничение?"
          answer="Ворзарстного ограничения нет"
        />
        <Questions
          question="Есть ли возрастное ограничение?"
          answer="Ворзарстного ограничения нет"
        />
        <Questions
          question="Есть ли возрастное ограничение?"
          answer="Ворзарстного ограничения нет"
        />
      </section>
      <section className="itemsSection"></section>
      <section className="finding">
        
          <h1 className="arsenal">НАШ АРСЕНАЛ</h1>
          <div className="config_sec">
          <ConfigPage
            img={img1}
            title="МОЩНЫE ПК"
            text="С ПРОЦЕССОРАМИ INTEL CORE I7 10700K, I5 10600K, AMD RYZEN 5 3600X.
16 GB ОПЕРАТИВНОЙ ПАМЯТИ НА ЧАСТОТЕ 4000 MHZ И 2 TB NVME SSD НАКОПИТЕЛИ.
ВИДЕОКАРТЫ GEFORCE RTX 2060, GTX 1060 (ОЖИДАЕМ ПОСТУПЛЕНИЕ RTX 3070)."
          />
          <ConfigPage
            img={img6}
            title="МОНИТОРЫ"
            text="27' AOC C27G2ZU 240 HZ
          27' MSI OPTIX MAG271CQR 2К, 144 HZ
          32' MSI OPTIX MAG325CQR 2К, 165 HZ"
          />
          <ConfigPage
            img={img5}
            title="ПЕРЕФЕРИЯ"
            text="КЛАВИАТУРЫ HYPERX ALLOY FPS PRO
          НАУШНИКИ HYPERX CLOUD ALPHA
          МЫШКИ STEELSERIES RIVAL 710"
          />

          <ConfigPage
            img={img2}
            title="ГЕЙМЕРСКИЕ КРЕСЛА"
            text="COUGAR RAMPART"
          />
        </div>
      </section>
    </>
  );
};

export default Main;
