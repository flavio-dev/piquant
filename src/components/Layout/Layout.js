import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'

import './Layout.css'

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div className='LayoutContent'>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
