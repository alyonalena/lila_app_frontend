import React, { useState } from 'react'

import EventCard from '../../EventCard'
import { Typography, Divider, Row, Select, Col, Space, Radio, Flex } from 'antd'

import { pastEvents, upcomingEvents, inWorkEvents } from '../../../data'

function EventsPage() {
    
    const [ mode, setMode ] = useState('upcoming')

    const onChange = (e) => {
        setMode(e.target.value)
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
            <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                <div>
                    <Typography.Title level={3}>События клуба</Typography.Title>
                </div>
                <div>
                    <Radio.Group 
                        value={mode}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}
                        onChange={onChange}
                        options={[
                            { value: 'upcoming', label: 'Предстоящие' },
                            { value: 'history', label: 'История' },
                            { value: 'in_work', label: 'В разработке' }
                        ]}
                    />
                </div>
            </Flex>
            {getContent()}
        </>
    )
}

export default EventsPage