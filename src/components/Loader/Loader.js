import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Loader.css'

class Loader extends Component {
  render() {
    return (
      <div>
        <div className='Loader'>
          {this.props.children}
        </div>
        <p>Loading...</p>
      </div>
    )
  }
}

Loader.propTypes = {
  children: PropTypes.node
}

export default Loader
