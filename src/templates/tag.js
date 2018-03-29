import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import BodyHeader from '../components/BodyHeader';

const TagTemplate = ({ pathContext }) => {
  const { articles, tagName } = pathContext;

  return articles ? (
    <div>
      <BodyHeader>
        <h1>Articles about {tagName}</h1>
      </BodyHeader>
      <section>
        <ul>
          {articles.map((article) => {
            const { frontmatter } = article;
            const { path, title } = frontmatter;

            return (
              <li key={path}>
                <Link to={path}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  ) : null;
};

TagTemplate.propTypes = {
  pathContext: PropTypes.shape({
    articles: PropTypes.arrayOf(PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    })),
    tagName: PropTypes.string.isRequired,
  }).isRequired,
};

export default TagTemplate;
