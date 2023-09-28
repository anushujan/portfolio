import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackImg2 from "../components/backImg2";
import Form from "../components/Form";
// import { render } from 'react-dom';
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import ReactWhatsapp from 'react-whatsapp';
// import {ava} from '../assets/logo512.png'

const Contact = () => {
  useEffect(() => {
    document.title = "anushujan | Contact";
  }, []);
  return (
    <div>
      <Navbar />
      <BackImg2 heading="CONTACT" text="Let's have a chat" />
      <Form />
      <FloatingWhatsApp
        placeholder="Type a message"
        phoneNumber="+94 771827347"
        accountName="Anushujan"
        avatar="logo512.png"
        statusMessage="online"
        chatMessage="Hello there! "
        messageDelay={2}
        darkMode
      />
      <Footer />
    </div>
  );
};

export default Contact;
