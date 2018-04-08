import React from 'react';
import Link from 'gatsby-link';
import propTypes from 'prop-types';
import slugify from 'slugify';
import language from './languages/en-GB';
import { createInstance, translator } from '../../packages/helpers/i18n/translate';

import './styles.scss';

const translate = translator(createInstance(language));

const TagList = ({ tags }) => (
  <section className="tagsList">
    <header className="tagsHeader">
      <h2>{translate('messages.popularTags')}</h2>
      <Link className="allTagsLink" to="/tags">
        {translate('links.allTags')}
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
