import React from 'react';
import SEO from 'components/SEO';
import Social from 'components/Social';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledContact } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Contact = () => {
  return (
    <StyledPage>
      <SEO title="Contato | Celso Fabri Junior" />
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcset={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Contato</StyledTitle>

        <StyledContact>
          <h3>Vamos conversar :)</h3>
          <p>
            Me mande um e-mail no{' '}
            <a
              href="mailto:celso.fabri@gmail.com"
              title="E-mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              celso.fabri@gmail.com
            </a>{' '}
            ou entre em contato através de minhas redes sociais.
          </p>
          <Social />
        </StyledContact>
      </StyledContent>
    </StyledPage>
  );
};

export default Contact;
