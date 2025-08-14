import React from 'react'

import EventCard from '../../EventCard'

import { pastEvents } from '../../../data'


function HistoryPage() {
    return pastEvents.map((event) => (<EventCard event={event} />))
}

export default HistoryPage