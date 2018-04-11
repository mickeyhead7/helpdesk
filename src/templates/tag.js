import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import slugify from 'slugify';
import BodyHeader from '../components/BodyHeader';
import Pagination from '../packages/patterns/Pagination';

const TagTemplate = ({ pathContext }) => {
  const {
    additionalContext,
    group: articles,
    index,
    first,
    last,
    pageCount,
  } = pathContext;
  const { tagName } = additionalContext;

  return (
    <div>
      <BodyHeader>
        <h1>Articles about {tagName}</h1>
      </BodyHeader>
      <section>
        <ul>
          {articles.map((article) => {
            const { node } = article;
            const { frontmatter } = node;
            const { path, title } = frontmatter;

            return (
              <li key={slugify(path)}>
                <Link to={path}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <Pagination
        index={index}
        first={first}
        last={last}
        pageCount={pageCount}
        urlPrefix={`/tags/${tagName}`}
      />
    </div>
  );
};

TagTemplate.propTypes = {
  pathContext: PropTypes.shape({
    additionalContext: PropTypes.shape({
      tagName: PropTypes.string.isRequired,
    }),
    articles: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
      }),
    })),
    index: PropTypes.number.isRequired,
    first: PropTypes.bool.isRequired,
    last: PropTypes.bool.isRequired,
    pageCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default TagTemplate;
