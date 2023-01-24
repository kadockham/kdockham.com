import React from 'react';
import './header.css';
import headshot from '../../assets/headshot.png';

const Header = () => {
  return (
    <div className="kdock__header section__padding" id="home">
      <div className="kdock__header-content">
        <h1 className="gradient__text">Welcome to my website!</h1>
        <p>Please take time to look around and see the various projects I have worked on and learn more about me. Also feel free to view and download my resmue on this page. If you are looking for a new teammeber or working together please reachout to me.</p>
        {/*<div className="kdock__header-content__input">
          <input type="email" placeholder="Your Email"/>
          <button type="button">Get Started</button>
        </div>
        
        <div className="kdock__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>*/}
      </div>
      <div className="kdock__header-image">
        <img src={headshot} alt="headshot"/>
      </div>
    </div>
  )
}

export default Header