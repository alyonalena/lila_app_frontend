import React, { useState } from 'react'

import EventCard from '../../EventCard'
import { Typography, Radio, Flex, Divider } from 'antd'

import { pastEvents, upcomingEvents } from '../../../data'

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
            default:
                return <></>
        }
    }

    return (
        <>
            <Flex style={{ width: '100%' }} vertical align={'flex-start'}>
                <div>
                    <Typography.Title level={3}>События клуба</Typography.Title>
                </div>
                <Divider orientation='center'>
                    <Radio.Group 
                        value={mode}                        
                        onChange={onChange}
                        options={[
                            { value: 'upcoming', label: 'Предстоящие' },
                            { value: 'history', label: 'История' },
                        ]}
                    />
                </Divider>
            </Flex>
            <br/><br/>
            { getContent() }
        </>
    )
}

export default EventsPage