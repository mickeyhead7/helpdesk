import React from 'react';
import propTypes from 'prop-types';
import Link from 'gatsby-link';
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
  location: propTypes.shape({
    search: propTypes.string.isRequired,
  }).isRequired,
};

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

export default IndexPage
