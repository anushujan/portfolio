import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useRef, useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [femail, setFemail] = useState("");
  const [fsubject, setFsubject] = useState("");
  const [fmessage, setFmessage] = useState("");

  const form = useRef();
  //send mail
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
          toast.success('successfully submitted', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearForm();
  };

  //clear field
  const clearForm = () => {
    setFname("");
    setFemail("");
    setFsubject("");
    setFmessage("");
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Full Name</label>
        <input
          type="text"
          name="from_name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          id=""
          required={true}
        />
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          value={femail}
          onChange={(e) => setFemail(e.target.value)}
          id=""
          required={true}
        />
        <label>Subject</label>
        <input
          type="text"
          name="from_subject"
          value={fsubject}
          onChange={(e) => setFsubject(e.target.value)}
          id=""
          required={true}
        />
        <label>Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="6"
          placeholder="Type your message here"
          value={fmessage}
          onChange={(e) => setFmessage(e.target.value)}
          required={true}
        />
        <button className="btn">Submit</button>
        <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      </form>
    </div>
  );
};

export default Form;
