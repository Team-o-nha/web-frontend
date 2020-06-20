// imp lib
import React from "react";
import Slider from "react-slick";
import { Row, Col } from "antd";
// orther
import baloden from "./assets/images/baloden.svg";
import tuicheoden from "./assets/images/tuicheoden.svg";
import tuixachden from "./assets/images/tuixachden.svg";
import viden from "./assets/images/viden.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const CategoriesBar = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Row className="carousel-bar-wrapper">
      <Col xs={24} sm={10}>
        <div className="carousel-bar-wrapper-inner">
          <Slider {...settings}>
            <div className="item">
              <img src={baloden} className="yours-custom-class" alt="balodo" />
              <div className="item-title">Balo</div>
            </div>
            <div className="item">
              <img
                src={tuicheoden}
                className="yours-custom-class"
                alt="tuicheodo"
              />
              <div className="item-title">Túi chéo</div>
            </div>
            <div className="item">
              <img
                src={tuixachden}
                className="yours-custom-class"
                alt="tuixachdo"
              />
              <div className="item-title">Túi xách</div>
            </div>
            <div className="item">
              <img src={viden} className="yours-custom-class" alt="vido" />
              <div className="item-title">Ví</div>
            </div>
          </Slider>
        </div>
      </Col>
    </Row>
  );
};

export default CategoriesBar;
