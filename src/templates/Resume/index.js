import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import {
  StyledResume,
  StyledExperience,
  StyledExperienceItem,
  StyledExperienceHead,
  StyledExperienceLink,
  StyledExperienceInfo,
  StyledExperienceRole,
  StyledExperienceContent
} from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';
import LogoDeliveryCenter from 'assets/images/resume/logo-deliverycenter.svg';
import LogoAteliware from 'assets/images/resume/logo-ateliware.svg';
import LogoBcredi from 'assets/images/resume/logo-bcredi.svg';
import LogoMadeiraMadeira from 'assets/images/resume/logo-madeiramadeira.svg';
import LogoEbanx from 'assets/images/resume/logo-ebanx.svg';
import LogoSnowmanLabs from 'assets/images/resume/logo-snowmanlabs.svg';
import LogoImam from 'assets/images/resume/logo-imam.svg';
import LogoWx from 'assets/images/resume/logo-wx.svg';
import LogoAndaraki from 'assets/images/resume/logo-andaraki.svg';

const Resume = () => {
  const { celsofabri } = useStaticQuery(
    graphql`
      {
        celsofabri {
          companies(orderBy: startDate_DESC) {
            id
            name
            url
            logo {
              url
            }
            startDate
            endDate
            role
            resume {
              markdown
              html
            }
          }
        }
      }
    `
  );

  const { companies } = celsofabri;

  return (
    <StyledPage>
      <SEO title="Sobre | Celso Fabri Junior" />
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcSet={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Sobre</StyledTitle>
        <StyledResume>
          <h3>Celso Fabri Junior</h3>
          <p>
            Atualmente eu trabalho na{' '}
            <a
              href="https://deliverymuch.com.br"
              title="Delivery Much"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delivery Much
            </a>{' '}
            como <strong>desenvolvedor front-end</strong>, mas eu já
            trabalhei em outras empresas como{' '}
            <a
              href="https://deliverycenter.com"
              title="Delivery Center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delivery Center
            </a>
            ,{' '}
            <a
              href="https://ateliware.com"
              title="ateliware"
              target="_blank"
              rel="noopener noreferrer"
            >
              ateliware
            </a>
            ,{' '}
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
            e{' '}
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
            Eu sou graduado no curso de Tecnologia em Produçõa
            Multimídia (Web Design) pela Universidade Opet. Eu possuo
            habilidades visuais como <strong>UX/UI designer</strong>,
            mas meu foco atual é{' '}
            <strong>desenvolvimento front-end</strong>. Atualmente, eu
            estou trabalhando com ReactJS e aprendendo um pouco sobre
            VueJS e Elixir.
          </p>
        </StyledResume>
        {companies.length > 0 && (
          <StyledExperience>
            {companies.map((company, index) => {
              return <Experience key={index} company={company} />;
            })}
          </StyledExperience>
        )}
      </StyledContent>
    </StyledPage>
  );
};

export default Resume;
