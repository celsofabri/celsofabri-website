import React from 'react';
import { graphql } from 'gatsby';
import Post from 'components/Post';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Single = ({
  data: {
    celsofabri: { post }
  }
}) => {
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
        <StyledTitle>Blog</StyledTitle>
        <p>Interna do Post</p>
      </StyledContent>
    </StyledPage>
  );
};

export const BlogQuery = graphql`
  query BlogQuery($id: ID!) {
    celsofabri {
      post(where: { id: $id }) {
        id
        slug
        title
        content {
          html
        }
        image {
          url
        }
      }
    }
  }
`;

export default Single;
