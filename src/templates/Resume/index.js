import React from 'react';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledResume, StyledExperience } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Resume = () => {
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
        <StyledTitle>Resume</StyledTitle>
        <StyledResume>
          <h3>Celso Fabri Junior</h3>
          <p>
            Currently I’m work at{' '}
            <a
              href="https://ateliware.com"
              title="ateliware"
              target="_blank"
              rel="noopener noreferrer"
            >
              ateliware
            </a>{' '}
            as <strong>Front-End Developer</strong>, but I already
            worked in other companies such as{' '}
            <a
              href="https://bcredi.com.br"
              title="Bcredi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bcredi
            </a>
            ,{' '}
            <a
              href="https://madeiramadeira.com.br"
              title="MadeiraMadeira"
              target="_blank"
              rel="noopener noreferrer"
            >
              MadeiraMadeira
            </a>
            ,{' '}
            <a
              href="https://ebanx.com"
              title="EBANX"
              target="_blank"
              rel="noopener noreferrer"
            >
              EBANX
            </a>
            ,{' '}
            <a
              href="https://snowmanlabs.com.br"
              title="Snowman Labs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snowman Labs
            </a>
            ,{' '}
            <a
              href="https://imam.ag"
              title="IMAM Publicidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              IMAM
            </a>
            ,{' '}
            <a
              href="https://agenciawx.com.br"
              title="Agência WX"
              target="_blank"
              rel="noopener noreferrer"
            >
              WX
            </a>{' '}
            and{' '}
            <a
              href="https://andaraki.com.br"
              title="Andaraki Calçados"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andaraki
            </a>
            .
          </p>
          <p>
            I’m graduate in the course of Production Multimedia (Web
            Design) by Opet University. I have visual skills as{' '}
            <strong>UX/UI designer</strong>, but my focus is{' '}
            <strong>front-end development</strong>. Currently, I’m
            work with ReactJS and learning a bit about VueJS and
            Elixir.
          </p>
        </StyledResume>
        <StyledExperience></StyledExperience>
      </StyledContent>
    </StyledPage>
  );
};

export default Resume;
