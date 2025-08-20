import React from 'react'

import EventCard from '../../EventCard'
import { Typography } from 'antd'

import { upcomingEvents } from '../../../data'

const { Text } = Typography

function UpcomingEventsPage(){

    return (
        <>
            <Text>ПРЕДСТОЯЩИЕ МЕРОПРИЯТИЯ</Text>
            {
                upcomingEvents.map((event) => (<EventCard event={{...event, inFuture: true}}/>))
            }
        </>
    )
}

export default UpcomingEventsPage