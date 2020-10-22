import React from 'react';
import { Link } from 'gatsby';
import { StyledProject, StyledInfo, StyledImage } from './styled';

const Post = ({ project }) => {
  const { title, company, image, slug } = project;

  return (
    <StyledProject>
      <Link to={`/portfolio/${slug}`} title={title}>
        <StyledImage>
          <img
            src={image?.url || 'https://via.placeholder.com/800x600'}
            alt={title}
          />
        </StyledImage>
        <StyledInfo>
          <h6>{company?.name}</h6>
          <h3>{title}</h3>
        </StyledInfo>
      </Link>
    </StyledProject>
  );
};

export default Post;
