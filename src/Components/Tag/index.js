import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyHeader from '@Components/BodyHeader';
import Pagination from '@packages/patterns/Pagination';
import ArticleList from '@Components/ArticleList';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import enGB from './languages/en-GB';

const phrases = {
  'en-GB': enGB,
};

export const Tag = ({
  locale,
  articles,
  index,
  first,
  last,
  pageCount,
  tagName,
}) => (
  <I18nProvider locale={locale} phrases={phrases}>
    <BodyHeader>
      <h1>
        <Translate locale={locale} phrase="messages.tagArticles" params={{ tagName }} />
      </h1>
    </BodyHeader>
    <ArticleList articles={articles} />
    <Pagination
      index={index}
      first={first}
      last={last}
      pageCount={pageCount}
      urlPrefix={`/tags/${tagName}`}
    />
  </I18nProvider>
);

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

Tag.propTypes = {
  locale: PropTypes.string.isRequired,
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
  tagName: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Tag);
