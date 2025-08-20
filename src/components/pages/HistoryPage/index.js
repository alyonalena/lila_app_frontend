import React from 'react'

import EventCard from '../../EventCard'
import { Typography } from 'antd'

import { pastEvents } from '../../../data'

const { Text } = Typography

function HistoryPage() {
    return (
        <>
            <Text>ИСТОРИЯ МЕРОПРИЯТИЙ</Text>
            {
                pastEvents.map((event) => (<EventCard event={event} />))
            }
        </>
    )
    
}

export default HistoryPage