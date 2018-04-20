import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'gatsby-link';
import BodyHeader from '@Components/BodyHeader';
import Card from '@packages/patterns/Card';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import enGB from './languages/en-GB';

import './styles.scss';

const phrases = {
  'en-GB': enGB,
};

export const Article = ({
  locale,
  frontmatter,
  html,
  prev,
  next,
}) => {
  const { date, title } = frontmatter;

  return (
    <I18nProvider locale={locale} phrases={phrases}>
      <article className="articleFull">
        <BodyHeader>
          <div className="articleHeader">
            <h1>{title}</h1>
            <small className="articleDate">
              <Translate locale={locale} phrase="messages.postedDate" params={{ date }} />
            </small>
          </div>
        </BodyHeader>
        <section
          className="articleContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <section>
          {(prev || next) && (
            <Fragment>
              <h2>
                <Translate locale={locale} phrase="messages.moreArticles" />
              </h2>
              <ul className="articleLinks">
                {prev && (
                  <li>
                    <Card>
                      <h3>
                        <Translate locale={locale} phrase="messages.previousArticle" />
                      </h3>
                      <h4>
                        <Link to={prev.frontmatter.path}>
                          {prev.frontmatter.title}
                        </Link>
                      </h4>
                      <p>
                        {prev.frontmatter.excerpt}
                      </p>
                    </Card>
                  </li>
                )}
                {next && (
                  <li>
                    <Card>
                      <h3>
                        <Translate locale={locale} phrase="messages.nextArticle" />
                      </h3>
                      <h4>
                        <Link to={next.frontmatter.path}>
                          {next.frontmatter.title}
                        </Link>
                      </h4>
                      <p>
                        {next.frontmatter.excerpt}
                      </p>
                    </Card>
                  </li>
                )}
              </ul>
            </Fragment>
          )}
        </section>
      </article>
    </I18nProvider>
  );
};

Article.propTypes = {
  locale: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  html: PropTypes.node.isRequired,
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
  prev: PropTypes.shape({
    frontmatter: PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

Article.defaultProps = {
  next: null,
  prev: null,
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

export default connect(mapStateToProps)(Article);
