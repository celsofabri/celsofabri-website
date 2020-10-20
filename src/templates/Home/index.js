import React from 'react';
import {
  StyledHome,
  StyledHomeSidebar,
  StyledHomeContent,
  StyledHomeImage
} from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';

const Home = () => {
  return (
    <StyledHome>
      <StyledHomeSidebar>
        <StyledHomeContent>
          <h2>Celso Fabri</h2>
          <p>Front-End Developer & UX/UI Designer</p>
        </StyledHomeContent>
      </StyledHomeSidebar>
      <StyledHomeImage>
        <img src={ImageCelsoFabri} alt="Celso Fabri Junior" />
      </StyledHomeImage>
    </StyledHome>
  );
};

export default Home;
