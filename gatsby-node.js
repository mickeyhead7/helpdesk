const path = require('path');

const createTagPages = (createPage, articles) => {
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  const tagsTemplate = path.resolve(`src/templates/tags.js`)

  const articlesByTags = {}

  articles.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!articlesByTags[tag]) {
          articlesByTags[tag] = []
        }

        articlesByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(articlesByTags)

  createPage({
    path: `/tags`,
    component: tagsTemplate,
    context: {
      tags: tags.sort()
    }
  })

  tags.forEach(tagName => {
    const articles = articlesByTags[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: tagTemplate,
      context: {
        articles,
        tagName
      }
    })
  })
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const articleTemplate = path.resolve('src/templates/article.js');

  return graphql(`
    {
      allMarkdownRemark {
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
  `).then(result => {
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
          next: index === (articles.length - 1) ? null : articles[index + 1].node
        }
      });
    });
  });
};
