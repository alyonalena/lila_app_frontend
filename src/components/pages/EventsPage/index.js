import React, { useState } from 'react'

import EventCard from '../../EventCard'
import { Typography, Flex, Button } from 'antd'

import { pastEvents, upcomingEvents } from '../../../data'

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
            default:
                return <></>
        }
    }

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '67px',
                    width: '100%',
                    background: 'white',
                    zIndex: '99',
                    paddingTop: '16px'
                }}
            >
                <Flex style={{ width: '100%' }} vertical align={'center'}>
                    <div>
                        <Typography.Title level={3}>События клуба</Typography.Title>
                    </div>
                    <div>
                        <Button type='link' onClick={() => onChange('upcoming')} style={ mode === 'history' ? { color: 'rgba(0,0,0,0.3)' } : { color: 'black' } }>Предстоящие</Button>
                            |
                        <Button type='link' onClick={() => onChange('history')} style={ mode === 'upcoming' ? { color: 'rgba(0,0,0,0.3)' } : { color: 'black' } }>Прошедшие</Button>

                    </div>
                </Flex>
            </div>
            <br/><br/>
            { getContent() }
        </>
    )
}

export default EventsPage