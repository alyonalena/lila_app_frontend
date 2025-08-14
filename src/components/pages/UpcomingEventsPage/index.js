import React from 'react'

import EventCard from '../../EventCard'

import { upcomingEvents } from '../../../data'


function UpcomingEventsPage(){

    return upcomingEvents.map((event) => (<EventCard event={{...event, inFuture: true}}/>))
}

export default UpcomingEventsPage