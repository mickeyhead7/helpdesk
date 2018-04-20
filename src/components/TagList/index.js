import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import { connect } from 'react-redux';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import enGB from './languages/en-GB';

import './styles.scss';

const phrases = {
  'en-GB': enGB,
};

export const TagList = ({ locale, tags }) => (
  <I18nProvider locale={locale} phrases={phrases}>
    <section className="tagsList">
      <header className="tagsHeader">
        <h2>
          <Translate locale={locale} phrase="messages.popularTags" />
        </h2>
        <Link className="allTagsLink" to="/tags">
          <Translate locale={locale} phrase="links.allTags" />
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
  </I18nProvider>
);

TagList.propTypes = {
  locale: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

export default connect(mapStateToProps)(TagList);
