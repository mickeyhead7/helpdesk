import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createInstance, translator } from './helpers';
import { defaultLocale } from './constants';

const Translate = ({
  locale,
  params,
  phrase,
  phrases,
}) => {
  const instance = createInstance(phrases[locale], locale);
  const translate = translator(instance);

  return <Fragment>{translate(phrase, params)}</Fragment>;
};

Translate.propTypes = {
  locale: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
  phrase: PropTypes.string.isRequired,
  phrases: PropTypes.shape({}),
};

Translate.defaultProps = {
  params: {},
  phrases: {},
};

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale || defaultLocale,
  phrases: i18n.phrases,
});

export default connect(mapStateToProps)(Translate);
