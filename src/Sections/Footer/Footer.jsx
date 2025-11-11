import { ImFacebook } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoTwitter } from 'react-icons/bi'
import React, { useState } from "react"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'


const Footer = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <footer>
      <a href="#" className="footer_logo">ROHIT</a>

      <div className="footer_social">
        <a href="facebook"><ImFacebook /></a>
        <a href="facebook"><FaInstagram /></a>
        <a href="facebook"><BiLogoLinkedin /></a>
        <a href="facebook"><BiLogoTwitter /></a>
      </div>

      <div className="footer_copy">
        <small>
          &copy; Rohit Web Developer. All rights reserved.
        </small>
      </div>



      <div className="footer-nav">
        <nav>
          <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
          <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiBook /></a>
          <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
      </div>

    </footer>
  )
}

export default Footer