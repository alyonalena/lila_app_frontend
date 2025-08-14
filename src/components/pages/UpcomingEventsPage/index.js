import React from 'react'

import EventCard from '../../EventCard'

import { events } from '../../../data'


function UpcomingEventsPage(){

    return events.map((event) => (<EventCard event={event} />))
}

export default UpcomingEventsPage