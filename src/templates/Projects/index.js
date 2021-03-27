import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from 'components/SEO';
import Project from 'components/Project';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledProjects } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Projects = () => {
  const { celsofabri } = useStaticQuery(graphql`
    {
      celsofabri {
        projects(orderBy: id_DESC) {
          id
          slug
          title
          company {
            name
            url
          }
          content {
            html
          }
          image {
            url
          }
        }
      }
    }
  `);

  const { projects } = celsofabri;

  return (
    <StyledPage>
      <SEO title="Portfólio | Celso Fabri Junior" />
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcSet={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Portfólio</StyledTitle>
        <StyledProjects>
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </StyledProjects>
      </StyledContent>
    </StyledPage>
  );
};

export default Projects;
