import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const TagsTemplate = ({ pathContext }) => {
  const { tags } = pathContext

  return tags ? (
    <div>
      <header>
        <h1>All tags</h1>
      </header>
      <section>
        <ul>
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  ) : null;
};

TagsTemplate.PropTypes = {
  pathContext: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired
};

export default TagsTemplate
