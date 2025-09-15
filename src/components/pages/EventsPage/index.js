import React, { useState } from 'react'

import EventCard from '../../EventCard'
import { Typography, Flex, Button, Carousel } from 'antd'

import { pastEvents, upcomingEvents } from '../../../data'

function EventsPage() {
    
    const [ mode, setMode ] = useState('upcoming')

    const onChange = (value) => {
        setMode(value)
    }

    const onChangeC = currentSlide => {
		console.log(currentSlide);
	}
    const contentStyle = {
		margin: '30px 0',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
	}

    const getContent = () => {
        switch(mode) {
            case 'upcoming':
                return <>
                    <Carousel dotPosition="top" arrows infinite={false} afterChange={()=>{}} style={{color: 'black'}}>
                    {
                            upcomingEvents.map((event) => (
                                <div key={event.date}>
                                    <div style={contentStyle}>
                                        <EventCard event={{ ...event, inFuture: true}} />
                                    </div>                                    
                                </div>
                            ))
                        }
                    </Carousel>
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
                    top: '60px',
                    width: '100%',
                    background: "#0C2121",
                    color: 'rgba(255, 255, 255, 0.5)',
                    zIndex: '99',
                    padding: '24px 0'
                }}
            >
                <Flex style={{ width: '100%' }} vertical align={'center'}>
                    <div>
                        <Typography.Title level={4} style={{ color: 'rgba(255, 255, 255, 0.6)'}}>События клуба</Typography.Title>
                    </div>
                    <div>
                        <Button type='link' onClick={() => onChange('upcoming')} style={ mode === 'history' ? { color: 'rgba(255, 255, 255, 0.2)' } : { color: 'rgba(255, 255, 255, 0.5)' } }>Предстоящие</Button>
                            |
                        <Button type='link' onClick={() => onChange('history')} style={ mode === 'upcoming' ? { color: 'rgba(255, 255, 255, 0.2' } : { color: 'rgba(255, 255, 255, 0.5)' } }>Прошедшие</Button>

                    </div>
                </Flex>
            </div>
            <br/><br/>
            { getContent() }
        </>
    )
}

export default EventsPage