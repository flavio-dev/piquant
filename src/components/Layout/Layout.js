import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'

import './Layout.css'

export const Layout = ({ children }) => (
  <div>
    <Header />
    <div className='LayoutContent'>
      {children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
