import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createInstance, pluraliser } from './helpers';
import { defaultLocale } from './constants';

const Pluralise = ({
  count,
  locale,
  phrase,
  phrases,
}) => {
  const instance = createInstance(phrases[locale], locale);
  const pluralise = pluraliser(instance);

  return <Fragment>{pluralise(phrase, count)}</Fragment>;
};

Pluralise.propTypes = {
  count: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  phrases: PropTypes.shape({}),
};

Pluralise.defaultProps = {
  phrases: {},
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale || defaultLocale,
  phrases: i18n.phrases,
});

export default connect(mapStateToProps)(Pluralise);
