import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, description, link }) => {
  return (
    <div className="kdock__blog-container_article">
      <div className="kdock__blog-container_article-image">
        <img src={imgUrl} alt="blog"/>
      </div>
      <div className="kdock__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3><a href={link}>{title}</a></h3>
          <h4>{description}</h4>
        </div>
        <p><a href={link}>See Full Project</a></p>
      </div>
    </div>
  )
}

export default Article