import React from 'react'

import EventCard from '../../EventCard'
import { Typography } from 'antd'

import { pastEvents } from '../../../data'

const { Title } = Typography

function HistoryPage() {
    return (
        <>
            <Title level={3} style={{ margin: 0, color: 'black', lineHeight: '72px' }}>История мероприятий</Title>
            {
                pastEvents.map((event) => (<EventCard event={event} />))
            }
        </>
    )
    
}

export default HistoryPage