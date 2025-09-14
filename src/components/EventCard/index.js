import React from 'react'

import { Typography, Button, Card, Flex, Space, Avatar, Divider, Tag, Collapse  } from 'antd'

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
            style={{ 
                width: '100%', 
                margin: "0 0 16px 0", 
                padding: '16px',
                boxShadow: '0px 0px 14px -2px rgba(34, 60, 80, 0.24)'
            }}
        >
            <Flex style={{ width: '100%' }} vertical align={'center'}>
                <div>
                    <Typography.Title level={4}>{event.name}</Typography.Title>
                </div>
            </Flex><br/>
            <Flex style={{ width: '100%' }} align={'flex-start'} gap={16}>
                <Avatar alt="SX" shape="square" src={event.img} style={{ width: "130px", height: "170px" }} />
                <Flex 
                    vertical
                    style={{ height: '100%', width: '70%' }}
                >
                    <div>
                        {
                            data.length > 0 && (
                                <Title level={4}>
                                    <Tag color="error">
                                        {data.join(', ')}
                                    </Tag>
                                </Title>
                            )
                        }<br />
                        { event.place && (<Space gap={8}><EnvironmentOutlined style={{ color: '#B8B8B8'}}/>{ event.place }</Space>)}
                        <br/>
                        { event.price && (<Space><WalletOutlined style={{ color: '#B8B8B8'}}/>{ event.price }</Space>)}
                        <br />
                        
                        <Flex style={{ width: '100%' }} justify={'flex-end'}>
                            { event.inFuture && (<Button size="large" type="primary" color="pink">{'Хочу!'}</Button>) }
                        </Flex><br/><br/>     
                    </div>
                </Flex> 
            </Flex>
            <Divider />
            <Collapse expandIconPosition='end' ghost>
                <Panel header={<Text>О производителе</Text>} key="1">
                    <div>{producerInfo.map(item => <div>{item}</div>)}</div>
                </Panel>
            </Collapse>
            <Divider />
            <Collapse expandIconPosition='end' ghost>
                <Panel header={<Text>Винный сет</Text>} key="2">
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
        { getEventCard() }
            <br />
        </>
    )
}

export default EventCard