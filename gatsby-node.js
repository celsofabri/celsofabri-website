/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const {
    data: {
      celsofabri: { posts }
    }
  } = await graphql(
    `
      {
        celsofabri {
          posts {
            id
            slug
          }
        }
      }
    `
  );

  posts.forEach(({ id, slug }) => {
    console.log('posts:', 'id', id, 'slug', slug);
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/Blog/single.js`),
      context: {
        id
      }
    });
  });
};
