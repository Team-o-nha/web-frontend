// imp lib
import React from "react";
import { Carousel } from "antd";
// components, assets
import ms_banner_img1 from "../../assets/images/ms_banner_img1.jpg";
import ms_banner_img3 from "../../assets/images/ms_banner_img3.jpg";
import "./style.scss";

const CarouselSlider = () => (
  <div className="carousel-wrapper">
    <div className="carousel-wrapper-inner">
      <Carousel effect="fade" autoplay>
        <div>
          <img src={ms_banner_img1} alt="banner" />
        </div>
        <div>
          <img src={ms_banner_img3} alt="banner" />
        </div>
      </Carousel>
      ,
    </div>
  </div>
);

export default CarouselSlider;
