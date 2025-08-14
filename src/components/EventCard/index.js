import React from 'react'

import { Typography, Button, Card, Descriptions, Tabs, Flex, Space, Badge} from 'antd'

const { Text, Title } = Typography


function EventCard({event}) {
console.info(event.wineList)
    const getEventCard = () => (
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={event.img} />}
        >
            <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                <Title level={3}>{event.name}</Title>
                <Button type="primary">Иду!</Button>
            </Flex><br /><br />
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
                        </Descriptions>,
                    },
                    {
                        label: `Винный сет`,
                        key: 2,
                        children: (
                            <div>
                                {event.wineList.map((item) => (<><Text italic>{item.name}</Text><hr/></>))}
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
            <br/>
        </>
    )
}

export default EventCard