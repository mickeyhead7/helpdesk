module.exports = {
  siteMetadata: {
    title: 'Helpdesk',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src/articles',
        path: `${__dirname}/src/articles`,
      },
    },
  ],
};
