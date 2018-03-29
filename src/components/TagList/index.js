import React from 'react';
import Link from 'gatsby-link';
import propTypes from 'prop-types';
import slugify from 'slugify';

import './styles.scss';

const TagList = ({ tags }) => (
  <section className="tagsList">
    <header className="tagsHeader">
      <h2>Popular tags</h2>
      <Link className="allTagsLink" to="/tags">
        View all tags
      </Link>
    </header>
    <ul className="tagLinks">
      {tags.map(tag => (
        <li className="tag" key={slugify(tag)}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </section>
);

TagList.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
};

export default TagList;
