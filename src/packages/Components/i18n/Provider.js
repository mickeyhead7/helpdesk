import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPhrases, setLocale } from '@store/actions/i18n';

class Provider extends React.Component {
  componentWillMount() {
    const {
      addI18nPhrases,
      locale,
      phrases,
      setI18nLocale,
    } = this.props;

    setI18nLocale(locale);
    addI18nPhrases(locale, phrases);
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

Provider.propTypes = {
  addI18nPhrases: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
  phrases: PropTypes.shape({}).isRequired,
  setI18nLocale: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addI18nPhrases: (locale, phrases) => dispatch(addPhrases(locale, phrases)),
  setI18nLocale: locale => dispatch(setLocale(locale)),
});

export default connect(null, mapDispatchToProps)(Provider);
