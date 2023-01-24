import React from 'react';
import Article from '../../components/article/Article';
import { proj01, proj02, proj03, proj04 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="kdock__blog section__padding" id="blog">
    <div className="kdock__blog-heading">
      <h1 className="gradient__text">Projects</h1>
    </div>
    <div className="kdock__blog-container">
      <div className="kdock__blog-container_groupA">
        <Article imgUrl={proj01} date="Dec 1, 2021" title="Coyote Quest" link="https://github.com/kadockham/coyote-quest" description="The primary goal of the Coyote Quest application was to alleviate some of the pressure and frustration of navigating the unfamiliar area. Additionally the app allows faculty to see underground waterlines and fire hydrants around campus."/>
      </div>
      <div className="kdock__blog-container_groupB">
        <Article imgUrl={proj02} date="Dec 20, 2022" title="DOS Like Operating System" link="https://github.com/kadockham/CSE4160" description="The purpose of this project was to create an operating system like DOS in c++."/>
        <Article imgUrl={proj03} date="Dec 6, 2022" title="Knights of the Round Table" link="https://github.com/kadockham/Round-Table" description="2D platformer that takes place in medieval times and developed in Unity."/>
        <Article imgUrl={proj04} date="Jan 29 2021" title="Parallel execution project" link="https://github.com/kadockham/CSE4600" description="These are projects from my computer science operating systems course. Some of these projects require XV6 and ptheards to run."/>
      </div>
    </div>
  </div>
);

export default Blog;