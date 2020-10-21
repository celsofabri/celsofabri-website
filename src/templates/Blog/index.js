import React from 'react';
import Post from 'components/Post';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledPosts } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Contact = () => {
  return (
    <StyledPage>
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcset={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Blog</StyledTitle>
        <StyledPosts>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </StyledPosts>
      </StyledContent>
    </StyledPage>
  );
};

export default Contact;
