import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackImg2 from '../components/backImg2';
import Form from '../components/Form';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <BackImg2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact