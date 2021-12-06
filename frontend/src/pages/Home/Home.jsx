import React from "react";
import Navbar from "../../components/navbar/index";
import Announcement from "../../components/announcement/index";
import Slider from "../../components/slider/index";
import Categories from "../../components/categories/index";
import Products from "../../components/products/index";
import Newsletter from "../../components/newsletter/index";
// import { Container } from "./home_style";

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <Announcement /> */}
      <Navbar />
      <Slider></Slider>
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
