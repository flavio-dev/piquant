import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

class Button extends Component {
  render() {
    const {url, text, clicked} = this.props

    if (url) {
      return (
        <a href={url}>
          <div className='Button'>
            {text}
          </div>
        </a>
      )
    } else {
      return (
        <div
          className={clicked ? 'Button ButtonClicked' : 'Button'}
        >
          {text}
        </div>
      )
    }
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  clicked: PropTypes.bool
}

export default Button
