import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import BodyHeader from '../components/BodyHeader';

const TagsTemplate = ({ pathContext }) => {
  const { tags } = pathContext

  return tags ? (
    <div>
      <BodyHeader>
        <h1>All tags</h1>
      </BodyHeader>
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
