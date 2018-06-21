import React from 'react'
import PropTypes from 'prop-types'

import './Event.css'

export const EventPiquant = ({
  url,
  dateLongOfEvent,
  dateShortOfEvent,
  desc,
  timeOfEvent
}) => {
  const EventLine = (
    <div>
      <span className='EventLong'>{dateLongOfEvent} from {timeOfEvent}</span>
      <span className='EventShort'>{dateShortOfEvent} - {timeOfEvent}</span>
      <span className='EventDesc'>// {desc}</span>
    </div>
  )

  const EventLineLink = (
    <a href={url} target='_blank'>
      <div className='Event'>
        <span className='EventLong'>{dateLongOfEvent} from {timeOfEvent}</span>
        <span className='EventShort'>{dateShortOfEvent} - {timeOfEvent}</span>
        <span className='EventDesc'>// {desc}</span>
      </div>
    </a>
  )

  return (
    <div className='EventWrapper'>
      {url && url.length && EventLineLink}
      {(!url || !url.length) && EventLine}
    </div>
  )
}

EventPiquant.propTypes = {
  url: PropTypes.string.isRequired,
  dateLongOfEvent: PropTypes.string.isRequired,
  dateShortOfEvent: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  timeOfEvent: PropTypes.string.isRequired
}

export default EventPiquant
