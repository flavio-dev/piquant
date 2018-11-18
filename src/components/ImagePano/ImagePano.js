import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './ImagePano.css'

export const ImagePano = ({urlSmall, urlLarge, title}) => {
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: 'url(' + urlLarge || '' + ')'
        }}
        className='ImagePano ImagePanoLarge'
      >
        <h2><span>{title}</span></h2>
      </div>
      <div
        style={{
          backgroundImage: 'url(' + urlSmall || '' + ')'
        }}
        className='ImagePano ImagePanoSmall'
      >
        <h2><span>{title}</span></h2>
      </div>
    </Fragment>
  )
}

ImagePano.propTypes = {
  urlSmall: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ImagePano
