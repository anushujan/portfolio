import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackImg2 from '../components/backImg2';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project