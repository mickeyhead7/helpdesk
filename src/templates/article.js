import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import BodyHeader from '../components/BodyHeader';

const ArticleTemplate = ({ data, location, pathContext }) => {
  const { markdownRemark: article } = data;
  const { frontmatter, html } = article;
  const { date, title} = frontmatter;
  const { prev, next } = pathContext;

  return (
    <article>
      <Helmet title={title} />
      <BodyHeader>
        <h1>{title}</h1>
        <small>{date}</small>
      </BodyHeader>
      <section>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <section>
        {(prev || next) && (
          <ul>
            {prev && (
              <li>
                <Link to={prev.frontmatter.path}>
                  Previous: {prev.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.frontmatter.path}>
                  Next: {next.frontmatter.title}
                </Link>
              </li>
            )}
          </ul>
        )}
      </section>
    </article>
  );
};

ArticleTemplate.PropTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired,
      html: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  location: PropTypes.object.isRequired,
  pathContext: PropTypes.shape({
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    }),
    prev: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    })
  }).isRequired
};

export const query = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
