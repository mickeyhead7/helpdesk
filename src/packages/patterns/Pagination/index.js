import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import language from './languages/en-GB';
import { createInstance, pluraliser, translator } from '../../../packages/helpers/i18n/translate';

import './styles.scss';

const translate = translator(createInstance(language));
const pluralise = pluraliser(createInstance(language));
const createUrl = (prefix = '', url) => (prefix ? `${prefix}/${url}` : url);

const Pagination = ({
  index,
  first,
  last,
  pageCount,
  urlPrefix,
}) => {
  const prevUrl = createUrl(urlPrefix, index - 1 === 1 ? '' : index - 1);
  const nextUrl = createUrl(urlPrefix, last ? '' : index + 1);

  return (
    <div className="pagination">
      <ul>
        <li>
          {!first ? (
            <Link to={prevUrl}>{translate('labels.prev')}</Link>
          ) : (
            <span>{translate('labels.prev')}</span>
          )}
        </li>
        <li>
          {!last ? (
            <Link to={nextUrl}>{translate('labels.next')}</Link>
          ) : (
            <span>{translate('labels.next')}</span>
          )}
        </li>
        <li className="pageCount">
          <span>{pluralise('labels.pageCount', pageCount)}</span>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  index: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  urlPrefix: PropTypes.string,
};

Pagination.defaultProps = {
  urlPrefix: null,
};

export default Pagination;
