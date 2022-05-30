import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import pc from "./img/pc1.jpg";
import pc2 from "./img/2.jpg";
import ps from "./img/ps2.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item className="c-item">
        <img className="d-block w-100" src={pc} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="c-item">
        <img className="d-block w-100" src={pc2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="c-item">
        <img className="d-block w-100" src={ps} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
