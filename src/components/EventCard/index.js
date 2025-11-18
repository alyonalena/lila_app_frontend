import React from 'react'

import { Typography, Button, Card, Flex, Space, Avatar, Divider, Tag, Collapse  } from 'antd'

import WineShortInfoList from '../WineShortInfoList'
import { useAllWines, useProducers } from '../../services/catalog'
import { EnvironmentOutlined, WalletOutlined } from '@ant-design/icons'

const { Title, Text } = Typography
const { Panel } = Collapse

function EventCard({ event }) {

    const allWines = useAllWines()
    const producers = useProducers()

    const wineList = event.wineList.map(id => allWines.find(i => i.id === id))

    const producerInfo = producers.find(({ id }) => id === event.producerId)?.shortInfo || ["Информация уточняется..."]

    const sendRequest = () => {

        fetch(`http://localhost:8000/web-data-deg-request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: /*launchParams.tgWebAppData?.user?.username*/ "elena_flikema",
                degInfo: event.name
            })
        }).then(() => {
            alert('Спасибо, Ваш запрос принят! Администратор свяжется с Вами в ближайшее время')
        }) 
    } 

    const getEventCard = () => (
        <Card     
        
            style={{ 
                width: '100%', 
                margin: "0 0 16px 0", 
                padding: '16px 8px',
                backgroundColor: 'rgba(255,255,255, 0.9)',
                boxShadow: '0px 0px 14px -2px rgba(34, 60, 80, 0.24)'
            }}
        >
            <Flex style={{ width: '100%' }} vertical align={'center'}>
                <div>
                    <Typography.Title level={3}>{event.name}</Typography.Title>
                </div><br/>
            </Flex>
            <Flex style={{ width: '100%' }} align={'flex-start'} gap={16}>
                <Avatar 
                    alt="SX" shape="square" 
                    src={event.img} 
                    style={{ width: "130px", height: "170px", 
                    boxShadow: 'inset -16px 0 24px -12px rgba(0, 0, 0, 0.45)' }} 
                />
                <Flex 
                    vertical
                    style={{ height: '100%', width: '70%', textAlign: 'left' }}
                >
                    <div>
                        <div style={{ lineHeight: 0}}>
                            <Title style={{color: '#E7014C'}} level={4}>{event.city}</Title>
                            { event.place && (<Space gap={8}><EnvironmentOutlined style={{ color: '#B8B8B8'}}/><Text italic>{ event.place }</Text></Space>)}
                        </div>
                        <br/>
                        <Title style={{color: '#E7014C'}} level={4}>{event.date} ({event.week_day})</Title>

                        {/* event.price && (<Space><WalletOutlined style={{ color: '#B8B8B8'}}/><Text italic>{ event.price }</Text></Space>)*/}
                        <br />  
                    </div>
                </Flex> 
            </Flex>
            <Flex style={{ width: '100%' }} vertical align={'center'}>
                <div>
                <br />  
                { event.inFuture && (<Button size="large" type="primary" color="pink" onClick={sendRequest}>{` Хочу на дегустацию`}</Button>) }
                </div>
            </Flex><br/>
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

    return (
        <>
        { getEventCard() }
            <br />
        </>
    )
}

export default EventCard