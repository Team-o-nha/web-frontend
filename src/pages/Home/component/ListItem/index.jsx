import React from "react";
import { Row } from "antd";
import Button from "@/components/Button";
import ProductItem from "@/components/ProductItem";
import data from "@/mocks/ListItem/data";
import "./style.scss";

const ListItem = () => {
  return (
    <div className="list-item-wrapper">
      <div className="list-item-wrapper-inner">
        <Row gutter={16}>
          {data.slice(0, 4).map((key, index) => (
            <ProductItem key={index} title={key.name} image={key.image} />
          ))}
        </Row>
      </div>
      <Button title={"See more"} />
    </div>
  );
};

export default ListItem;
