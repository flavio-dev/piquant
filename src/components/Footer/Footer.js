import React from 'react'

import './Footer.css'

import InstaIcon from 'components/InstaIcon'
import FacebookIcon from 'components/FacebookIcon'
import HeartIcon from 'components/HeartIcon'

export const Footer = () => (
  <div className='Footer'>
    <div className='FooterInner'>
      <div className='FooterSocial'>
        <a href='https://www.instagram.com/eatatpiquant/' target='_blank'>
          <InstaIcon />
        </a>
        <a href='https://www.facebook.com/eatatpiquant/' target='_blank'>
          <FacebookIcon />
        </a>
      </div>
      <div className='FooterInfo'>
        <div className='FooterInfoMadeBy'>
          made with <HeartIcon /> by <a href='https://github.com/flavio-dev' target='_blank'>flaviø</a>
        </div>
        <div>copyrights 2018</div>
      </div>
    </div>
  </div>
)

export default Footer
