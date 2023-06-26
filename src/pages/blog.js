import React from 'react';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import BlogCard from '../components/BlogCard';
import ShadedBg from '../components/ShadedBg';

import blogCardData from '../data/blog'; // Adjust the import path

const Blogpage = () => {
  return (
    <Layout>
      <PageTitle title='Blog'/>
      <section className='blogcard-container container-fluid'>
        <div className='row'>
          {blogCardData.map((card, index) => (
            <BlogCard
              key={index}
              text={card.text}
              title={card.title}
              img={card.img}
            />
          ))}
        </div>
      </section>
      <ShadedBg />
    </Layout>
  );
}

export default Blogpage;
