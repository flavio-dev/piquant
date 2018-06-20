import moment from 'moment'

export const sortEvents = (listOfEvents) => {
  const now = moment().format('YYYY-MM-DD')
  const futureEvents = []
  const pastEvents = []
  for (let i = 0; i < listOfEvents.length; i++) {
    const momentObj = moment(listOfEvents[i].date)
    const dateOfEventToCompare = momentObj.format('YYYY-MM-DD')
    const dateLongOfEvent = momentObj.format('ddd DD MMM YY')
    const dateShortOfEvent = momentObj.format('DD-MMM-YY')
    const timeOfEvent = momentObj.format('HH:mm')

    const event = Object.assign({}, listOfEvents[i], {
      dateLongOfEvent,
      dateShortOfEvent,
      timeOfEvent
    })
    if (dateOfEventToCompare < now) {
      pastEvents.push(event)
    } else {
      futureEvents.push(event)
    }
  }
  return {sortedEvents: {
    pastEvents,
    futureEvents
  }}
}

export default sortEvents
