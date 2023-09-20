import "./FormStyles.css";
import emailjs from "@emailjs/browser";

import React, { useRef } from "react";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hh5tjeb",
        "template_8likieb",
        form.current,
        "F67Wnf9KqJj76higo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="from_name" id="" />
        <label>Email</label>
        <input type="email" name="from_email" id="" />
        <label>Subject</label>
        <input type="text" name="subject" id="" />
        <label>Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="6"
          placeholder="Type your message here"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
