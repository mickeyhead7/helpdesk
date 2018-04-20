import React from 'react';
import PropTypes from 'prop-types';
import { extractTagsFromMarkdown } from '@packages/helpers/content';
import Homepage from '@Components/Homepage';
import Store from '@packages/Components/Store';

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMarkdownRemark;
  const tags = extractTagsFromMarkdown(articles);

  return (
    <Store>
      <Homepage
        articles={articles}
        tags={tags}
      />
    </Store>
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
    allMarkdownRemark(
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      },
      limit: 6
    ) {
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
