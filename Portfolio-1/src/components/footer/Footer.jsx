import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Sai Krishna Reddy</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/shravan-kumar-7b54b4255/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Shravan3107" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://x.com/Shravan90576117?s=09" target="_blank" rel="noreferrer" ><FaTwitter  /></a>
      </div>
    </footer>
  )
}

export default Footer
