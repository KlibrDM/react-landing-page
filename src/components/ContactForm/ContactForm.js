import React, { useState } from "react";

import './ContactForm.css';

export default function ContactForm({ children }) {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  let submitMsg = <></>

  if(submitted){
    submitMsg = <p className="form-submit-message">Thank you for trying to contact us but this demo is front-end only and we will never get your message.</p>
  }

  return (
    <section id="contact">
      <h2>Contact us!</h2>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
      {submitMsg}
    </section>
  )
}