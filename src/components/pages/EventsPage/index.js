import React, {useState} from 'react'

import EventCard from '../../EventCard'
import { Typography, Divider, Radio } from 'antd'

import { pastEvents, upcomingEvents, inWorkEvents } from '../../../data'


function EventsPage() {
    
    const [ mode, setMode ] = useState('upcoming')

    const onChange = e => {
        setMode(e.target.value)
    }

    const getContent = () => {
        switch(mode) {
            case 'upcoming':
                return <>
                    { upcomingEvents.map((event) => (<EventCard event={event} />)) }
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
            <Typography.Title level={3}>События</Typography.Title>
            <Divider/>
            <div>
                <Radio.Group
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                    }}
                    onChange={onChange}
                    value={mode}
                    options={[
                        { value: 'upcoming', label: 'ПРЕДСТОЯЩИЕ СОБЫТИЯ' },
                        { value: 'history', label: 'ИСТОРИЯ СОБЫТИЙ' },
                        { value: 'in_work', label: 'СОБЫТИЯ В РАЗРАБОТКЕ' }
                    ]}
                />            
            </div>
            {getContent()}
        </>
    )
    
}

export default EventsPage