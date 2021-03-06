import React from 'react';
import SEO from 'components/SEO';
import {
  StyledHome,
  StyledHomeSidebar,
  StyledHomeContent,
  StyledHomeImage
} from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Home = () => {
  return (
    <StyledHome>
      <SEO title="Celso Fabri Junior | Desenvolvedor Front-End & UX/UI Designer" />
      <StyledHomeSidebar>
        <StyledHomeContent>
          <h2>Celso Fabri</h2>
          <p>Front-End Developer & UX/UI Designer</p>
        </StyledHomeContent>
      </StyledHomeSidebar>
      <StyledHomeImage>
        <img
          src={ImageCelsoFabri}
          srcSet={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledHomeImage>
    </StyledHome>
  );
};

export default Home;
