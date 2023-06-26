import React from 'react';
import BlogDetail from '../components/BlogDetail';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const BlogInnerPage = () => {
  return (
    <Layout>
      <PageTitle title='My daily skin care routine' />
      <BlogDetail />
    </Layout>
  );
}

export default BlogInnerPage;
