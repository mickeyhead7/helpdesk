import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const TagTemplate = ({ pathContext }) => {
  const { articles, tagName } = pathContext;

  return articles ? (
    <div>
      <header>
        <h1>Articles about {tagName}</h1>
      </header>
      <section>
        <ul>
          {articles.map((article, index) => {
            const { frontmatter } = article;
            const { path, title } = frontmatter;

            return (
              <li key={index}>
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
        title: PropTypes.string.isRequired
      }).isRequired
    })),
    tagName: PropTypes.string.isRequired
  }).isRequired
};

export default TagTemplate;
