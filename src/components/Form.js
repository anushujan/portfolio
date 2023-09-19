import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Full Name</label>
        <input type="text" name="" id="" />
        <label>Email</label>
        <input type="email" name="" id="" />
        <label>Subject</label>
        <input type="text" name="" id="" />
        <label>Message</label>
        <textarea
          name=""
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
