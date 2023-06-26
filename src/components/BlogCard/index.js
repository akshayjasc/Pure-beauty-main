import React from 'react';
import './style.css';

const BlogCard = ({ text, title, img }) => {
  return (
    <div className='col-md-6 col-12 p-0 blog-col'>
      <div className='blog-card d-flex'>
        <div className='text-container d-flex align-content-md-end flex-wrap'>
          <p>{text}</p>
          <h2>{title}</h2>
        </div>
        <div className='img-container'>
          <img src={img} alt='pure beauty' />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
