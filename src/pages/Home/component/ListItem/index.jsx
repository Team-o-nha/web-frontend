import React from "react";
import Button from "@/components/Button";
import ProductItem from "@/components/ProductItem";
import { fakeItem } from "@/mocks/API/data";
import "./style.scss";

const ListItem = () => {
  return (
    <div className="list-item-wrapper">
      <div className="list-item-wrapper-inner">
        {fakeItem.slice(0, 4).map((key, index) => (
          <ProductItem
            key={index}
            title={key.name}
            images={key.images}
            price={key.price}
            colors={key.colors}
          />
        ))}
      </div>
      <Button title={"See more"} />
    </div>
  );
};

export default ListItem;
