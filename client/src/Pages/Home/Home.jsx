import React from "react";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Navbar/NavBar";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
