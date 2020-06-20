import React from "react";
import Slider from "react-slick";
import { Card, Col } from "antd";
import "./style.scss";
import { formatNumber } from "@/utils";

const ProductItem = ({ images, title, price, colors }) => {
  const { Meta } = Card;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: index => (
      <div class="color-wrapper" key={index}>
        <div class="color-wrapper-inner">
          <div className="select-color">
            <div
              className="color"
              style={{
                background: `${colors[index] && colors[index].colorCode}`
              }}
            ></div>
          </div>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <Col span={6}>
      <div className="product-item-wrapper">
        <div className="product-item-wrapper-inner">
          <Card
            hoverable
            cover={
              <Slider {...settings}>
                {images.map((key, index) => (
                  <img key={index} src={key.url} alt="" />
                ))}
              </Slider>
            }
          >
            <Meta title={title} description={`${formatNumber(price)}đ`} />
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
