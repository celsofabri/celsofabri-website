import React from 'react';
import { Link } from 'gatsby';
import { StyledPost, StyledImage } from './styled';

const Post = ({ post }) => {
  const { title, image, slug } = post;

  return (
    <StyledPost>
      <Link to={`/blog/${slug}`} title={title}>
        <StyledImage>
          <img
            src={image?.url || 'https://via.placeholder.com/800x600'}
            alt={title}
          />
        </StyledImage>
        <h3>{title}</h3>
      </Link>
    </StyledPost>
  );
};

export default Post;
