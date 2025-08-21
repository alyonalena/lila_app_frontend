import React, {useState} from 'react'

import EventCard from '../../EventCard'
import { Typography, Divider, Radio } from 'antd'

import { pastEvents, upcomingEvents, inWorkEvents } from '../../../data'

const { Text } = Typography

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
            <Text>МЕРОПРИЯТИЯ</Text>
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
                        { value: 'upcoming', label: 'ПРЕДСТОЯЩИЕ МЕРОПРИЯТИЙ' },
                        { value: 'history', label: 'ИСТОРИЯ МЕРОПРИЯТИЙ' },
                        { value: 'in_work', label: 'МЕРОПРИЯТИЯ В РАЗРАБОТКЕ' }
                    ]}
                />            
            </div>
            {getContent()}
        </>
    )
    
}

export default EventsPage