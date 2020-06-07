import React from "react";
import { Card, Col } from "antd";
import "./style.scss";

const ProductItem = ({ image, title }) => {
  const { Meta } = Card;
  return (
    <Col span={6}>
      <div className="product-item-wrapper">
        <div className="product-item-wrapper-inner">
          <Card hoverable cover={<img alt="example" src={image} />}>
            <Meta title={title} description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
