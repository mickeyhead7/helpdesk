import React from 'react';
import PropTypes from 'prop-types';
import { extractTagsFromMarkdown } from '../packages/helpers/content';
import BodyHeader from '../components/BodyHeader';
import ArticleList from '../components/ArticleList';
import TagList from '../components/TagList';
import language from '../languages/en-GB';
import { createInstance, translator } from '../packages/helpers/i18n/translate';

const translate = translator(createInstance(language));

const IndexPage = ({ data }) => {
  const { edges: articles } = data.allMarkdownRemark;
  const tags = extractTagsFromMarkdown(articles);

  return (
    <div>
      <BodyHeader>
        <h1>{translate('messages.welcome')}</h1>
      </BodyHeader>
      <section>
        <header>
          <h2>{translate('messages.latestArticles')}</h2>
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
