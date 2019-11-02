import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './ImagePano.css'

export const ImagePano = ({urlSmall, urlLarge, title}) => {
  return (
    <Fragment>
      <div className='ImagePanoLarge'>
        <div
          style={{
            backgroundImage: 'url(' + urlLarge || '' + ')'
          }}
          className='ImagePano'
        >
          <h2>{title && !!title.length && <span>{title}</span>}</h2>
        </div>
      </div>
      <div className='ImagePanoSmall'>
        <div
          style={{
            backgroundImage: 'url(' + urlSmall || '' + ')'
          }}
          className='ImagePano'
        >
          <h2>{title && !!title.length && <span>{title}</span>}</h2>
        </div>
      </div>
    </Fragment>
  )
}

ImagePano.propTypes = {
  urlSmall: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default ImagePano
