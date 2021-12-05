import React from "react";
import Navbar from "../../components/navbar/navbar";
import Announcement from "../../components/announcement/announcement";
import Slider from "../../components/slider/slider";
import Categories from "../../components/categories/categories";
import Products from "../../components/products/products";
// import { Container } from "./home_style";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Announcement /> */}
      <Navbar />
      <Slider></Slider>
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
