import React, { useState } from 'react'

import EventCard from '../../EventCard'
import { Typography, Divider, Row, Select, Col, Space } from 'antd'

import { pastEvents, upcomingEvents, inWorkEvents } from '../../../data'

function EventsPage() {
    
    const [ mode, setMode ] = useState('upcoming')

    const onChange = (value) => {
        setMode(value)
    }

    const getContent = () => {
        switch(mode) {
            case 'upcoming':
                return <>
                    { upcomingEvents.map((event) => (<EventCard event={{ ...event, inFuture: true}} />)) }
                </>
            case 'history':
                return <>
                    { pastEvents.map((event) => (<EventCard event={event} />)) }
                </>
            case 'in_work':
                return <>
                    { inWorkEvents.map((event) => (<EventCard event={event} />)) }
                </>
            default:
                return <></>
        }
    }

    return (
        <>
            <Row width={'100%'} align="center" justify="space-between">
                <Col>
                    <Typography.Title level={3}>События клуба</Typography.Title>
                </Col>
            </Row>
            <Divider orientation="left">
                <Select
                    value={mode}
                    style={{ width: '200px' }}
                    onChange={onChange}
                    options={[
                        { value: 'upcoming', label: 'Предстоящие' },
                        { value: 'history', label: 'История' },
                        { value: 'in_work', label: 'В разработке' }
                    ]}
                />
            </Divider>
            {getContent()}
        </>
    )
}

export default EventsPage