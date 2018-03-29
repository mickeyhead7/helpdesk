import React from 'react';
import Link from 'gatsby-link';
import propTypes from 'prop-types';
import queryString from 'query-string';
import ArticleList from '../components/ArticleList';

import './styles.scss';

const articles = [];

const SearchPage = props => {
  const parsed = queryString.parse(props.location.search);
  
  return (
    <section>
      <header className="bodyHeader">
        <h1>Search results for "{parsed.search}"</h1>
      </header>
      <ArticleList articles={articles} />
    </section>
  );
}

SearchPage.propTypes = {
  location: propTypes.shape({
    search: propTypes.string.isRequired,
  }).isRequired,
};

export default SearchPage;
