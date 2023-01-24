import React from 'react';
import './brand.css';
import { linkedin, github, gmail, twitter } from './imports';

const Brand = () => {
  return (
    <div className='kdock__brand section__padding' id="socials">
      <div className="kdock__brand-content">
        <h3>Follow Me on Social Media</h3>
      </div>
      <div className="kdock__brand-content">
        <div className="kdock__brand-content_div">
          <div>
            <a href="https://www.linkedin.com/in/kdockham">
            <img src={linkedin} alt="linkedin"/>
            </a>
          </div>
          <div>
            <a href="https://github.com/kadockham">
            <img src={github} alt="github"/>
            </a>
          </div>
        </div>
        <div className="kdock__brand-content_div">
          <div>
            <a href="mailto:kenny.dockham@gmail.com">
            <img src={gmail} alt="gmail"/>
            </a>
          </div>
          <div>
            <img src={twitter} alt="twitter"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand