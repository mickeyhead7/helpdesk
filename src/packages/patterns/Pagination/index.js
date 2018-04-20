import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { connect } from 'react-redux';
import I18nProvider from '@packages/Components/i18n/Provider';
import Translate from '@packages/Components/i18n/Translate';
import Pluralise from '@packages/Components/i18n/Pluralise';
import enGB from './languages/en-GB';

import './styles.scss';

const phrases = {
  'en-GB': enGB,
};

const createUrl = (prefix = '', url) => (prefix ? `${prefix}/${url}` : url);

const Pagination = ({
  index,
  first,
  last,
  locale,
  pageCount,
  urlPrefix,
}) => {
  const prevUrl = createUrl(urlPrefix, index - 1 === 1 ? '' : index - 1);
  const nextUrl = createUrl(urlPrefix, last ? '' : index + 1);

  return (
    pageCount > 1 ? (
      <I18nProvider locale={locale} phrases={phrases}>
        <div className="pagination">
          <ul>
            <li>
              {!first ? (
                <Link to={prevUrl}>
                  <Translate locale={locale} phrase="labels.prev" />
                </Link>
              ) : (
                <span>
                  <Translate locale={locale} phrase="labels.prev" />
                </span>
              )}
            </li>
            <li>
              {!last ? (
                <Link to={nextUrl}>
                  <Translate locale={locale} phrase="labels.next" />
                </Link>
              ) : (
                <span>
                  <Translate locale={locale} phrase="labels.next" />
                </span>
              )}
            </li>
            <li className="pageCount">
              <span>
                <Pluralise count={pageCount} locale={locale} phrase="labels.pageCount" />
              </span>
            </li>
          </ul>
        </div>
      </I18nProvider>
    ) : null
  );
};

Pagination.propTypes = {
  index: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  urlPrefix: PropTypes.string,
};

Pagination.defaultProps = {
  urlPrefix: null,
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
});

export default connect(mapStateToProps)(Pagination);
