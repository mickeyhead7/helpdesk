import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Provider } from 'react-redux';
import SearchResultsConnected from '@Components/SearchResults';
import store from '@store';

const articles = [];

const SearchPage = ({ location }) => {
  const parsed = queryString.parse(location.search);

  return (
    <Provider store={store}>
      <SearchResultsConnected
        articles={articles}
        search={parsed.search}
      />
    </Provider>
  );
};

SearchPage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchPage;
