import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData= [
  {
    title: 'Experience working in a Linux environment',
    text: 'My introduction to coding was in a Linux environment. I have spent the past 4 years working and developing in a Linux environment and am very comfortable working in Linux.'
  },
  {
    title: '2 years of experience working with C++',
    text: 'I have worked on many projects with C++ and am very comfortable working with the language. Most recently I completed a project of implementing a DOS like operating system in C++.'
  },
  {
    title: 'Experience with HTML, CSS, JavaScript, and React',
    text: 'One of my most major projects (Coyote Quest) was developed using React Native. This website is developed using React and I also used HTML to implement custom email signatures at Smith Marion & Co.'
  },
  {
    title: 'Strong problem solving skills',
    text: 'My time working in IT was very valuable to me in developing my problem solving skills. I have experience analyzing and solving problems both individualy and in a team setting.'
  }
]

const Features = () => {
  return (
    <div className="kdock__features section__padding" id="addInfo">
      <div className="kdock__features-heading">
        <h1 className="gradient__text">Additional Relevant Skills and Experience.</h1>
        <p></p>
      </div>
      <div className="kdock__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features