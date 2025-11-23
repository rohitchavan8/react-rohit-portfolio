import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [inputValue, setInputValue] = useState('');
  const [success, setSuccess] = useState(false); // Success popup state

  const handleInputChange = (event) => {
    if (event.target.value.length <= 10) {
      setInputValue(event.target.value);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sbwvfjr',
        'template_usa43jr',
        form.current,
        '-MHwKMsgmd-DUBiGv'
      )
      .then(
        (result) => {
          console.log(result.text);

          // IF EMAIL SENT SUCCESSFULLY
          setSuccess(true);

          // HIDE POPUP AFTER 3 SECONDS
          setTimeout(() => {
            setSuccess(false);
          }, 3000);

          // CLEAR FORM FIELDS
          form.current.reset();
          setInputValue('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
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
          <input
            type="number"
            name="mobile"
            placeholder="Enter your contact number"
            value={inputValue}
            onChange={handleInputChange}
            maxLength={10}
            required
          />
          <input type="email" name="email" placeholder="Enter your email id" required />
          <textarea name="message" cols="10" rows="10" placeholder="Your message" required></textarea>
          <button type="submit" className="btn primary">
            <b>Send Message</b>
          </button>
        </form>

        {/* SUCCESS POPUP MESSAGE */}
        {success && (
          <div
            style={{
               marginTop: "-25px", alignContent:"center",
              background: "#4caf50",
              color: "#fff",
              padding: "12px",
              borderRadius: "6px",
              textAlign: "center",
              fontWeight: "bold",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              top: "-221px",
              position: "relative",  right: "-60px",
  }}
          >
            Mail Sent Successfully!
          </div>
        )}

      </div>
    </section>
  );
};

export default Contact;
