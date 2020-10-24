import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ lang, title, description, meta, keywords }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { siteMetadata } = site;

  const metaTitle = title || siteMetadata?.title;
  const metaDescription = description || siteMetadata?.description;

  const metaTags = [
    { name: `description`, content: metaDescription },
    {
      property: `og:title`,
      content: metaTitle
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author
    },
    {
      name: `twitter:title`,
      content: metaTitle
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ]
    .concat(
      keywords.length > 0
        ? {
            name: `keywords`,
            content: keywords.join(`, `)
          }
        : []
    )
    .concat(meta);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={metaTags}
    />
  );
};

SEO.defaultProps = {
  lang: 'pt-BR',
  meta: [],
  keywords: []
};

export default SEO;
