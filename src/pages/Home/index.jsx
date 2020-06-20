import React from "react";
import CarouselSlider from "./mains/CarouselSlider";
import CategoriesBar from "./mains/CategoriesBar";
import HomeBody from "./mains/HomeBody";
import Footer from "@/components/Footer";
import "./style.scss";

const Home = () => (
  <div className="home-wrapper">
    <div className="home-wrapper-inner">
      <CarouselSlider />
      <CategoriesBar />
      <HomeBody />
      <Footer />
    </div>
  </div>
);

export default Home;
