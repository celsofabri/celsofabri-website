import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from 'components/SEO';
import Post from 'components/Post';
import {
  StyledPage,
  StyledSidebar,
  StyledContent,
  StyledTitle
} from 'assets/global/styled';
import { StyledPosts } from './styled';
import ImageCelsoFabri from 'assets/images/home/img-celsofabri.jpg';
import ImageCelsoFabri2x from 'assets/images/home/img-celsofabri@2x.jpg';

const Blog = () => {
  const { celsofabri } = useStaticQuery(graphql`
    {
      celsofabri {
        posts(orderBy: id_DESC) {
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
  `);

  const { posts } = celsofabri;

  return (
    <StyledPage>
      <SEO title="Blog | Celso Fabri Junior" />
      <StyledSidebar>
        <img
          src={ImageCelsoFabri}
          srcset={ImageCelsoFabri2x}
          alt="Celso Fabri Junior"
        />
      </StyledSidebar>
      <StyledContent>
        <StyledTitle>Blog</StyledTitle>
        <StyledPosts>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </StyledPosts>
      </StyledContent>
    </StyledPage>
  );
};

export default Blog;
