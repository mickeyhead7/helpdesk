import propTypes from 'prop-types';
import queryString from 'query-string';
import React, { Component } from 'react';
import Link, { navigateTo } from 'gatsby-link';

import './styles.scss';

class Header extends Component {
  static propTypes = {
    location: propTypes.shape({
      search: propTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    searchValue: '',
  };

  componentDidMount () {
    const parsed = queryString.parse(this.props.location.search);

    this.setState({
      searchValue: parsed.search
    });
  }

  render () {
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
            <label>
              <input
                defaultValue={this.state.searchValue}
                onChange={this.handleChange}
                placeholder="Search"
                type="text"
              />
            </label>
          </form>
        </div>
      </div>
    )
  }

  handleChange = event => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    navigateTo(`/search?search=${this.state.searchValue}`);
  }
}

export default Header;
