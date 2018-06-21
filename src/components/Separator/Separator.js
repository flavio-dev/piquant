import React from 'react'
import PropTypes from 'prop-types'

import './Separator.css'

export const Separator = ({children}) => {
  return (
    <div className='Separator'>
      <hr />
      {children}
      <hr />
      {children}
      <hr />
      {children}
      <hr />
    </div>
  )
}

Separator.propTypes = {
  children: PropTypes.node.isRequired
}

export default Separator
