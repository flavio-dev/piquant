import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './About.css'

class About extends Component {
  render() {
    console.log('this.props.data = ', this.props.data)
    return (
      <div>
        LOL
      </div>
    )
  }
}

About.propTypes = {
  data: PropTypes.object
}

export default About
