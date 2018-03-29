import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Link, { navigateTo } from 'gatsby-link';

import './styles.scss';

class Header extends Component {
  state = {
    searchValue: '',
  };

  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);

    this.setState({
      searchValue: parsed.search,
    });
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    navigateTo(`/search?search=${this.state.searchValue}`);
  }

  render() {
    return (
      <div className="header">
        <div className="headerContainer">
          <header>
            <Link
              to="/"
              className="headerLink"
            >
              Helpdesk
            </Link>
          </header>
          <form
            className="search"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="search">
              <input
                defaultValue={this.state.searchValue}
                id="search"
                onChange={this.handleChange}
                placeholder="Search"
                type="text"
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
