import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BackImg from "../components/BackImg";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  useEffect(() => {
    document.title = "anushujan | Home";
  }, []);
  return (
    <div>
      <Navbar />
      <BackImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
