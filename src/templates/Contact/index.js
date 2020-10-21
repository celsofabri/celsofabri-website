import React from 'react';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
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
        <StyledTitle>Contato</StyledTitle>
        <p>
          Vamos conversar, me mande um e-mail em{' '}
          <a
            href="mailto:celso.fabri@gmail.com"
            title="E-mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            celso.fabri@gmail.com
          </a>
          .{' '}
        </p>
      </StyledContent>
    </StyledPage>
  );
};

export default Contact;
