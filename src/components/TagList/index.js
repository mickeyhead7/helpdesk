import React from 'react';
import Link from 'gatsby-link';
import propTypes from 'prop-types';

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
      {tags.map((tag, index) =>
        <li className="tag" key={index}>
          <Link to={`/tags/${tag}`}>{tag}</Link>
        </li>
      )}
    </ul>
  </section>
);

TagList.propTypes = {
  tags: propTypes.array.isRequired,
};

export default TagList;
