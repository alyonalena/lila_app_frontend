import React from 'react'

import { Typography, Button, Card, Descriptions, Tabs, Flex, Space, Badge, Avatar } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import WineShortInfoList from '../WineShortInfoList'
import { allWines } from '../../data'


const { Title } = Typography


function EventCard({event}) {

    const wineList = event.wineList.map(id => allWines.find(i => i.id === id))

    const getEventCard = () => (
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={event.img} />}
        >
            <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                <Title level={5}>{event.name}</Title>
                { event.inFuture && (<Button type="primary">Иду!</Button>) }
            </Flex><br />            
            <Tabs
                tabPosition={'top'}
                items={[
                    {
                        label: 'Общая информация',
                        key: 1,
                        children: <Descriptions >
                            <Descriptions.Item label="Дата">{event.date}</Descriptions.Item>
                            <Descriptions.Item label="Город">{event.city}</Descriptions.Item>
                            <Descriptions.Item label="Место">{event.place}</Descriptions.Item>
                            <Descriptions.Item label="Стоимость">{event.price}</Descriptions.Item>
                            <Descriptions.Item label="Осталось мест">{event.available}</Descriptions.Item>
                            <Descriptions.Item label="Участники">
                                <Avatar.Group>
                                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                                </Avatar.Group>
                            </Descriptions.Item>
                        </Descriptions>,
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
            {
                event.hint ? (
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                        <Badge.Ribbon text={event.hint} color="red">
                            {getEventCard()}
                        </Badge.Ribbon>
                    </Space>
                ) : (
                    getEventCard()
                )
            }
            <br/><br/><br/>
        </>
    )
}

export default EventCard