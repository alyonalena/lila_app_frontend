import React, {useState} from 'react'

import EventCard from '../../EventCard'
import { Typography, Row, Col, Segmented } from 'antd'

import { pastEvents, upcomingEvents } from '../../../data'

const { Text } = Typography

function EventsPage() {
    
    const [ mode, setMode ] = useState('upcoming')

    console.info(mode)
    return (
        <>
            <Row align="center" justify="space-between">
                <Col flex="auto" style={{ textAlign: 'center' }}>
                    <Segmented
                        options={[
                            { value: 'upcoming', label: 'ПРЕДСТОЯЩИЕ МЕРОПРИЯТИЙ'},
                            { value: 'history', label: 'ИСТОРИЯ МЕРОПРИЯТИЙ' },                            
                        ]}
                        value={mode}
                        onChange={(value) => setMode(value)}
                    />                
                </Col>
            </Row>
            {
                mode === 'upcoming' ?
                    (<>
                        { upcomingEvents.map((event) => (<EventCard event={event} />)) }
                    </>) : (<>
                        { pastEvents.map((event) => (<EventCard event={event} />)) }
                    </>)
            }
        </>
    )
    
}

export default EventsPage