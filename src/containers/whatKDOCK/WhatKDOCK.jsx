import React from 'react';
import { Feature } from '../../components';
import './whatKDOCK.css';

const WhatKDOCK = () => {
  return (
    <div className="kdock__whatkdock section__margin" id="wkdock">
      <div className="kdock__whatkdock-feature">
        <Feature title = "About Me" text=""/>
      </div>
      {/*<div className="kdock__whatkdock-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>*/}
      <div className="kdock__whatkdock-container">
        <Feature title="Education" text="Graduated Summa Cum Laude from California State University, San Bernardino with a bachelors in computer science. "/>
        <Feature title="Work Experience" text="Most recently worked as a teachers assistant for databases, software engineering, and computer architecture courses. Also worked for 3 years while in undergrad as IT support for Smith Marion & Co."/>
        <Feature title="Hobbies" text="In my free time I enjoy spending time outside, playing videogames, and spending time with friends and family."/>
      </div>
    </div>
  )
}

export default WhatKDOCK