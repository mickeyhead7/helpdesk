import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Store from '@packages/Components/Store';
import ArticleConnected from '@Components/Article';

const ArticleTemplate = ({ data, pathContext }) => {
  const { markdownRemark: article } = data;
  const { frontmatter } = article;
  const { title } = frontmatter;
  const { prev, next } = pathContext;

  return (
    <Store>
      <Fragment>
        <Helmet title={title} />
        <ArticleConnected
          {...article}
          prev={prev}
          next={next}
        />
      </Fragment>
    </Store>
  );
};

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    prev: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

/* eslint-disable no-undef */
export const query = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: {
      path: { 
        eq: $path
      } 
    }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
        tags
        excerpt
      }
    }
  }
`;

export default ArticleTemplate;
