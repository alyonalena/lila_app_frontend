import React from 'react'

import { Typography, Button, Card, Descriptions, Tabs, Flex, Space, Badge, Avatar, Divider } from 'antd'

import WineShortInfoList from '../WineShortInfoList'
import { allWines } from '../../data'


const { Title } = Typography


function EventCard({ event }) {

    const wineList = event.wineList.map(id => allWines.find(i => i.id === id))

    const getEventCard = () => (
        <Card            
            style={{ width: '100%', border: 'none' }}
        >
            <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                <Avatar alt="SX" shape="square" src={event.img} style={{ width: "62px", height: "62px" }} />
                { event.inFuture && (<Button type="primary" danger color="pink">{'Хочу участвовать!'}</Button>) }
            </Flex>
            <br />
            <Title level={3}>{event.name}</Title>
            <Tabs
                tabPosition={'top'}
                items={[
                    {
                        label: 'Общая информация',
                        key: 1,
                        children: (
                            <Descriptions>
                                <Descriptions.Item label="Осталось мест">{event.available}</Descriptions.Item>
                                <Descriptions.Item label="Стоимость">{event.price}</Descriptions.Item>
                                <Descriptions.Item label="Место">{event.place}</Descriptions.Item>
                                <Descriptions.Item label="Дата">{event.date}</Descriptions.Item>
                                <Descriptions.Item label="Город">{event.city}</Descriptions.Item>
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

    return (
        <>
            <Divider orientation="right">
                <Space>
                    <Title level={5}>{`${event.city}, ${event.date} (${event.week_day})`}</Title>
                </Space>
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