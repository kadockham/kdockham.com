import React from 'react';

import kadLogo from '../../assets/logo2.png'
import './footer.css';

const Footer = () => {
  return (
    <div className="kdock__footer section__padding">
      <div className="kdock__footer-heading">
        <h1 className="gradient__text">Do you want to work together?</h1>
      </div>
      <div className="kdock__footer-btn">
        <p>Download Resume</p>
      </div>
      <div className="kdock__footer-links">
        <div className="kdock__footer-links_logo">
          <img src={kadLogo} alt="logo"/>
        </div>
        <div className="kdock__footer-links_div">
          <h4>Links</h4>
          <p><a href="#socials">Social Media</a></p>
          <p><a href="mailto:kenny.dockham@gmail.com">Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer