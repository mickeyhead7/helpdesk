import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '@store';

const Store = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
