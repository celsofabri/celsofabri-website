import React from 'react';
import { Link } from 'gatsby';
import { StyledProject, StyledInfo, StyledImage } from './styled';

const Post = ({ project }) => {
  const { title, image, slug } = project;

  return (
    <StyledProject>
      <Link to={`/blog/${slug}`} title={title}>
        <StyledImage>
          <img
            src={image?.url || 'https://via.placeholder.com/800x600'}
            alt={title}
          />
        </StyledImage>
        <StyledInfo>
          <h6>IMAM</h6>
          <h3>{title}</h3>
        </StyledInfo>
      </Link>
    </StyledProject>
  );
};

export default Post;
