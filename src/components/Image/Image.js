import React from 'react'
import PropTypes from 'prop-types'

import './Image.css'

export const Image = ({url, blurb}) => {
  console.log('blurb = ', blurb)
  return (
    <div
      style={{
        backgroundImage: 'url(' + url || '' + ')',
        backgroundSize: 'cover'
      }}
      className='Image'
    >
      {blurb && blurb.length &&
        <div className='ImageInfo'>
          {blurb}
        </div>
      }
    </div>
  )
}

Image.propTypes = {
  url: PropTypes.string,
  blurb: PropTypes.string
}

export default Image
