import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyHeader from '@Components/BodyHeader';
import ArticleList from '@Components/ArticleList';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import enGB from './languages/en-GB';

const phrases = {
  'en-GB': enGB,
};

export const SearchResults = ({
  articles,
  locale,
  search,
}) => (
  <I18nProvider locale={locale} phrases={phrases}>
    <BodyHeader>
      <h1>
        <Translate locale={locale} phrase="messages.searchResultsFor" params={{ search }} />
      </h1>
    </BodyHeader>
    <ArticleList articles={articles} />
  </I18nProvider>
);

SearchResults.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        excerpt: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  locale: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

export default connect(mapStateToProps)(SearchResults);
