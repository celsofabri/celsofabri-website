import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';
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
          abouts {
            resume {
              html
              markdown
            }
          }
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

  const { companies, abouts } = celsofabri;

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
          <ReactMarkdown>{abouts[0]?.resume?.markdown}</ReactMarkdown>
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
