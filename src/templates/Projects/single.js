import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import SEO from 'components/SEO';
import Header from 'components/Header';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledHeader, StyledInfo } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Single = ({
  data: {
    celsofabri: { project }
  }
}) => {
  const { title, company, content, image } = project;

  return (
    <React.Fragment>
      <SEO
        title={`Portfólio - ${title} - ${company?.name} | Celso Fabri Junior`}
      />
      <Header />
      <StyledPage>
        <StyledSidebar>
          <img
            src={ImageCelsoFabri}
            srcSet={ImageCelsoFabri2x}
            alt="Celso Fabri Junior"
          />
        </StyledSidebar>
        <StyledContent>
          <StyledTitle>Portfólio</StyledTitle>
          <StyledHeader>
            <img src={image?.url} alt={title} />
            <StyledInfo>
              {company?.name && (
                <h6>
                  <a
                    href={company?.url}
                    title={company?.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company?.name}
                  </a>
                </h6>
              )}
              <h3>{title}</h3>
            </StyledInfo>
          </StyledHeader>
          <ReactMarkdown>{content?.markdown}</ReactMarkdown>
        </StyledContent>
      </StyledPage>
    </React.Fragment>
  );
};

export const ProjectQuery = graphql`
  query ProjectQuery($id: ID!) {
    celsofabri {
      project(where: { id: $id }) {
        id
        slug
        title
        company {
          name
          url
        }
        content {
          html
          markdown
        }
        image {
          url
        }
      }
    }
  }
`;

export default Single;
