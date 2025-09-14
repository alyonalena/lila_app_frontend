import React from 'react'

import { Typography, Button, Card, Tabs, Flex, Space, Avatar, Divider, Tag, Collapse  } from 'antd'

import WineShortInfoList from '../WineShortInfoList'
import { allWines, producers } from '../../data'
import { EnvironmentOutlined, WalletOutlined } from '@ant-design/icons'

const { Title, Text } = Typography
const { Panel } = Collapse

function EventCard({ event }) {

    const wineList = event.wineList.map(id => allWines.find(i => i.id === id))

    const producerInfo = producers.find(({ id }) => id === event.producerId)?.shortInfo || ["Информация уточняется..."]


    const getEventCard = () => (
        <Card
            hoverable        
            style={{ width: '100%', margin: "0 0 16px 0", padding: '16px', borderRadius: "10px", boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}}
        >
            <Title level={4}>{event.name}</Title><br />
            <Flex style={{ width: '100%' }} align={'flex-start'} gap={16}>
                <Avatar alt="SX" shape="square" src={event.img} style={{ width: "110px", height: "140px" }} />
                <Flex 
                    vertical
                    style={{ height: '100%', width: '70%' }}
                >
                    <div>                         
                        <Flex style={{ width: '100%' }} justify={'flex-end'}>
                            { event.inFuture && (<Button size="large" type="primary" color="pink">{'Хочу!'}</Button>) }
                        </Flex><br/><br/>     
                        { event.place && (<Space gap={8}><EnvironmentOutlined style={{ color: '#B8B8B8'}}/>{ event.place }</Space>)}
                        <br/>
                        { event.price && (<Space><WalletOutlined style={{ color: '#B8B8B8'}}/>{ event.price }</Space>)}
                    </div>
                </Flex> 
            </Flex><br/>
            <Collapse ghost>
                <Panel header="О производителе" key="1">
                    <div>{producerInfo.map(item => <div>{item}</div>)}</div>
                </Panel>
                </Collapse>
                <Collapse ghost>
                <Panel header="Винный сет" key="2">
                    <div>
                        <WineShortInfoList wineList={wineList} readOnly={true}/>
                    </div>
                </Panel>
            </Collapse>
        </Card>
    )

    const data = []
    if (event.city) data.push(event.city)
    if (event.date) data.push(event.date)
    if (event.week_day) data.push(event.week_day)

    return (
        <>
            <Divider orientation="right">
                {
                    data.length > 0 && (
                        <Text>
                            <Tag color="error">
                                {data.join(', ')}
                            </Tag>
                        </Text>
                    )
                }
            </Divider><br />
            { getEventCard() }
            <br />
        </>
    )
}

export default EventCard