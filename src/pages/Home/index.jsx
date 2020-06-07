import React from "react";
import CarouselSlider from "./component/CarouselSlider";
import CategoriesBar from "./component/CategoriesBar";
import HomeBody from "./component/HomeBody";
import "./style.scss";

const Home = () => (
  <div className="home-wrapper">
    <div className="home-wrapper-inner">
      <CarouselSlider />
      <CategoriesBar />
      <HomeBody />
    </div>
  </div>
);

export default Home;
