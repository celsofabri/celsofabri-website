module.exports = {
  siteMetadata: {
    title: `Celso Fabri Junior | Front-End Developer & UX/UI Designer`,
    description: `Come create the revolution!`,
    author: `@celsofabri`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/public/favicon-96x96.png`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'celsofabri',
        url:
          'https://api-us-west-2.graphcms.com/v2/ckghbv4rpfvan01xr7zj027bb/master'
      }
    }
  ],
  pathPrefix: '/'
};
