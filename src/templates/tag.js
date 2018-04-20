import React from 'react';
import PropTypes from 'prop-types';
import Store from '@packages/Components/Store';
import Tag from '@Components/Tag';

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
    <Store>
      <Tag
        articles={articles}
        index={index}
        first={first}
        last={last}
        pageCount={pageCount}
        tagName={tagName}
      />
    </Store>
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
