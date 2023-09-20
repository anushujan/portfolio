import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackImg2 from '../components/backImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  useEffect(() => {
    document.title = "anushujan | About";
  }, []);
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="ABOUT" text="I'm a Full-Stack Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About