import React from 'react';
import Blog from 'templates/Blog';
import Header from 'components/Header';

const BlogPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Blog />
    </React.Fragment>
  );
};

export default BlogPage;
