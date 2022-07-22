import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bfxjwhi', 'template_1jqbeq5', form.current, '28K1IJ9QJIA8vpjSl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>acastilloa24@gmail.com</h5>
            <a href="mailto:acastilloa24@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+528341385470</h5>
            <a href="https://wa.me/528341385470" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Goldenbeastmusic</h5>
            <a href="https://www.instagram.com/goldenbeastmusic/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" required placeholder='Your Full Name' />
            <input type="email" name="email" required placeholder='Your Email'/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact