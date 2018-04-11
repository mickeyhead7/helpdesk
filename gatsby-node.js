const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

const createTagPages = (createPage, articles) => {
  const tagsTemplate = path.resolve('src/templates/tags.js');
  const articlesByTags = {};

  articles.forEach((article) => {
    if (article.node.frontmatter.tags) {
      article.node.frontmatter.tags.forEach((tag) => {
        if (!articlesByTags[tag]) {
          articlesByTags[tag] = [];
        }

        articlesByTags[tag].push(article);
      });
    }
  });

  const tags = Object.keys(articlesByTags);

  createPage({
    path: '/tags',
    component: tagsTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach((tagName) => {
    const tagArticles = articlesByTags[tagName];

    createPaginatedPages({
      context: {
        tagName,
      },
      edges: tagArticles,
      createPage,
      pageTemplate: 'src/templates/tag.js',
      pageLength: 2,
      pathPrefix: `tags/${tagName}`,
    });
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const articleTemplate = path.resolve('src/templates/article.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: {
          order: ASC,
          fields: [frontmatter___date]
        }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
              excerpt
              tags
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const articles = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, articles);

    articles.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: articleTemplate,
        context: {
          prev: index === 0 ? null : articles[index - 1].node,
          next: index === (articles.length - 1) ? null : articles[index + 1].node,
        },
      });
    });

    return Promise.resolve();
  });
};
