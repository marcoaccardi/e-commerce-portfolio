import React from "react";
import Navbar from "../../components/navbar/navbar";
import Announcement from "../../components/announcement/announcement";
import Slider from "../../components/slider/slider";
// import { Container } from "./home_style";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider></Slider>
    </div>
  );
};

export default Home;
