import React from 'react';
import { Link } from 'gatsby';
import { StyledPost, StyledImage } from './styled';

const Post = () => {
  return (
    <StyledPost>
      <Link to="/" title="Título do post">
        <StyledImage>
          <img
            src="https://via.placeholder.com/800x600"
            alt="Título do post"
          />
        </StyledImage>
        <h3>O poder do background-position</h3>
      </Link>
    </StyledPost>
  );
};

export default Post;
