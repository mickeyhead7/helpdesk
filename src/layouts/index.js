import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Header from '@Components/Header';

import './styles.scss';

const TemplateWrapper = ({ children, search }) => {
  const parsed = queryString.parse(search);

  return (
    <div>
      <Helmet
        title="Helpdesk"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header search={parsed.search} />
      <main className="mainContent">
        {children()}
      </main>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  search: PropTypes.string,
};

TemplateWrapper.defaultProps = {
  children: () => {},
  search: '',
};

export default TemplateWrapper;
