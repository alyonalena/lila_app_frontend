import React from 'react'

import { Typography, Button, Card, Descriptions, Tabs, Flex, Space, Badge, Avatar, Divider, Tag } from 'antd'

import WineShortInfoList from '../WineShortInfoList'
import { allWines } from '../../data'


const { Title, Text } = Typography


function EventCard({ event }) {

    const wineList = event.wineList.map(id => allWines.find(i => i.id === id))

    const getEventCard = () => (
        <Card            
            style={{ width: '100%', border: 'none' }}
        >
            <Flex style={{ width: '100%' }} align={'flex-start'} gap={16}>
                <Avatar alt="SX" shape="square" src={event.img} style={{ width: "62px", height: "62px" }} />
                <div>
                    <Title level={5}>{event.name}</Title>
                    { event.inFuture && (<Button type="primary" color="pink">{'Хочу участвовать!'}</Button>) }
                </div>                
            </Flex>
            <br />
            
            <Tabs
                tabPosition={'top'}
                items={[
                    {
                        label: 'Общая информация',
                        key: 1,
                        children: (
                            <Descriptions>
                                {event.available && (<Descriptions.Item label="Осталось мест">{event.available}</Descriptions.Item>)}
                                {event.price && (<Descriptions.Item label="Стоимость">{event.price}</Descriptions.Item>)}
                                {event.place && (<Descriptions.Item label="Место">{event.place}</Descriptions.Item>)}
                                {event.date && (<Descriptions.Item label="Дата">{event.date}</Descriptions.Item>)}
                                {event.city && <Descriptions.Item label="Город">{event.city}</Descriptions.Item>}                                
                                {/*
                                    <Descriptions.Item label="Участники">
                                    <Avatar.Group>
                                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                        <Avatar style={{ backgroundColor: '#87d068' }}>I</Avatar>
                                        <Avatar style={{ backgroundColor: '#1677ff' }}>G</Avatar>
                                    </Avatar.Group>
                                </Descriptions.Item>
                                */}
                            </Descriptions>
                        ),
                    },
                    {
                        label: `Винный сет`,
                        key: 2,
                        children: (
                            <div>
                                <WineShortInfoList wineList={wineList} readOnly={true}/>
                            </div>
                        ),
                    }
                ]}
            />
        </Card>
    )

    const data = []
    if (event.city) data.push(event.city)
    if (event.date) data.push(event.date)
    if (event.week_day) data.push(event.week_day)

    return (
        <>
            <Divider orientation="right">
                    <Text>
                        <Tag color="error">
                            {data.length > 0 && data.join(', ')}
                        </Tag>
                    </Text>
                </Divider>
            {
                event.hint ? (
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <Badge.Ribbon text={event.hint} color="#E2044C">
                            {getEventCard()}
                        </Badge.Ribbon>
                    </Space>
                ) : (
                    getEventCard()
                )
            }
            <Divider />
        </>
    )
}

export default EventCard