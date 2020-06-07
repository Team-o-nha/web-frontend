import React from "react";
import TitleHead from "@/components/TitleHead";
import ListItem from "../ListItem";
import "./style.scss";

const HomeBody = () => (
  <div className="home-body-wrapper">
    <div className="home-body-wrapper-inner">
      <TitleHead pageTitle={"Backpacks"} />
      <ListItem />
    </div>
  </div>
);

export default HomeBody;
