import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const BodyHeader = ({ children }) => (
  <header className="bodyHeader">
    {children}
  </header>
);

BodyHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BodyHeader;
