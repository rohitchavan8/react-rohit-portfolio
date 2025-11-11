import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    // Ensure the input doesn't exceed the maxLength
    if (event.target.value.length <= 10) {
      setInputValue(event.target.value);
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sbwvfjr', 'template_usa43jr', form.current, '-MHwKMsgmd-DUBiGv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <section id="contact" >
      <h2>Contact Me</h2>
      <h5 className="contact">Get in touch</h5>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email ID</h4>
            <h5>chavan061@gmail.com</h5>
            <a href="mailto:chavan061@gmail.com">Send a mail</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>9821725417</h5>
            <a href="https://wa.me/9821725417">Chat on WhatsApp</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <input type="text" name="name" placeholder="Enter your full name" required />
          <input type="number" name="mobile" placeholder="Enter your contact number" value={inputValue} onChange={handleInputChange} maxLength={10} required />
          <input type="email" name="email" placeholder="Enter your email id" required />
          <textarea name="message" id="" cols="10" rows="10" placeholder="Your message" required></textarea>
          <button type="submit" className="btn primary"><b>Send Message</b></button>
        </form>
      </div>
    </section>
  )
}

export default Contact
