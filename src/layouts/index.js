import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Header from '../components/Header'

import './styles.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Helpdesk"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header location={location} />
    <main className="mainContent">
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
