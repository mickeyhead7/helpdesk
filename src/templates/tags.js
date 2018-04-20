import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import slugify from 'slugify';
import BodyHeader from '@Components/BodyHeader';
import Store from '@packages/Components/Store';

const TagsTemplate = ({ pathContext }) => {
  const { tags } = pathContext;

  return tags ? (
    <Store>
      <Fragment>
        <BodyHeader>
          <h1>All tags</h1>
        </BodyHeader>
        <section>
          <ul>
            {tags.map(tag => (
              <li key={slugify(tag)}>
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Fragment>
    </Store>
  ) : null;
};

TagsTemplate.propTypes = {
  pathContext: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default TagsTemplate;
