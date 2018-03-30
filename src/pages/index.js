import React from 'react';
import PropTypes from 'prop-types';
import { extractTagsFromMarkdown } from '../packages/helpers/content';
import BodyHeader from '../components/BodyHeader';
import ArticleList from '../components/ArticleList';
import TagList from '../components/TagList';

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMarkdownRemark;
  const tags = extractTagsFromMarkdown(articles);

  return (
    <div>
      <BodyHeader>
        <h1>Welcome to the helpdesk</h1>
      </BodyHeader>
      <section>
        <header>
          <h2>Top articles</h2>
        </header>
        <ArticleList articles={articles} />
      </section>
      <section>
        <TagList tags={tags} />
      </section>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

/* eslint-disable no-undef */
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`;

export default IndexPage;
