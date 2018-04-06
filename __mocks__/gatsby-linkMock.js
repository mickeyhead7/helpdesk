import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ children, to }) => <a href={to}>{children}</a>;

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;

export const navigateTo = jest.fn();
