import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Header from 'components/Header';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledHeader } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Single = ({
  data: {
    celsofabri: { project }
  }
}) => {
  const { title, content, image } = project;

  return (
    <React.Fragment>
      <Header />
      <StyledPage>
        <StyledSidebar>
          <img
            src={ImageCelsoFabri}
            srcset={ImageCelsoFabri2x}
            alt="Celso Fabri Junior"
          />
        </StyledSidebar>
        <StyledContent>
          <StyledTitle>Portfólio</StyledTitle>
          <StyledHeader>
            <img src={image?.url} alt={title} />
            <h3>{title}</h3>
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
