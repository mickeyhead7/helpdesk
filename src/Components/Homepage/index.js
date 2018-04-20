import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BodyHeader from '@Components/BodyHeader';
import ArticleList from '@Components/ArticleList';
import ConnectedTagList from '@Components/TagList';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import enGB from './languages/en-GB';

const phrases = {
  'en-GB': enGB,
};

export const Homepage = ({ articles, locale, tags }) => (
  <I18nProvider locale={locale} phrases={phrases}>
    <BodyHeader>
      <h1>
        <Translate locale={locale} phrase="messages.welcome" />
      </h1>
    </BodyHeader>
    <section>
      <header>
        <h2>
          <Translate locale={locale} phrase="messages.latestArticles" />
        </h2>
      </header>
      <ArticleList articles={articles} />
    </section>
    <section>
      <ConnectedTagList tags={tags} />
    </section>
  </I18nProvider>
);

Homepage.propTypes = {
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
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

export default connect(mapStateToProps)(Homepage);
