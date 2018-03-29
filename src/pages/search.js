import React from 'react';
import Link from 'gatsby-link';
import propTypes from 'prop-types';
import queryString from 'query-string';
import BodyHeader from '../components/BodyHeader';
import ArticleList from '../components/ArticleList';

const articles = [];

const SearchPage = props => {
  const parsed = queryString.parse(props.location.search);
  
  return (
    <section>
      <BodyHeader>
        <h1>Search results for "{parsed.search}"</h1>
      </BodyHeader>
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
