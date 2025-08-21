import React from 'react'

import { Tabs, Avatar, Descriptions, List, Typography, Space, Divider } from 'antd'
import { useLaunchParams } from '@telegram-apps/sdk-react'

import WineShortInfoList from '../../WineShortInfoList'
import { upcomingEvents, pastEvents, allWines } from '../../../data'

const { Text } = Typography

function UserAccountPage() {

    const myWines = allWines.filter(item => item.saved)
    const launchParams = useLaunchParams()

    const name = `${launchParams.tgWebAppData?.user?.first_name} ${launchParams.tgWebAppData?.user?.last_name} (${launchParams.tgWebAppData?.user?.username})`

    return (
        <>
            <Typography.Title level={3}>Личный кабинет</Typography.Title>
            <div>                    
                <Divider orientation="right">
                    <Space>
                        <Avatar size="large" src={launchParams.tgWebAppData?.user?.photo_url}/>
                    </Space>
                </Divider>

                <Descriptions>
                    <Descriptions.Item label="Пользователь">{name}</Descriptions.Item>
                    <Descriptions.Item label="Статус">Настоящий ценитель</Descriptions.Item>
                    <Descriptions.Item label="Посещенные мероприятия">10</Descriptions.Item>
                    <Descriptions.Item label="Предстоящие мероприятия">2</Descriptions.Item>
                </Descriptions>
                <Divider orientation="right" />
                <Tabs
                    tabPosition={'top'}
                    items={[
                        {
                            label: 'Ваши мероприятия',
                            key: 1,
                            children: (
                                <div>
                                    Вы зарегистрированы на следующие мероприятия<br/><br/>
                                    <List
                                        dataSource={upcomingEvents}
                                        renderItem={(item, index) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar size="large" src={item.img} />}
                                                    title={item.name}
                                                    description={`${item.city}, ${item.date}`}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            ),
                        },
                        {
                            label: `Избранное`,
                            key: 2,
                            children: (
                                <div>
                                    Недавно вы обратили внимание на следующие вина<br/><br/>
                                    <WineShortInfoList wineList={myWines}/>
                                </div>
                            ),
                        },
                        {
                            label: `Ваша история`,
                            key: 3,
                            children: (
                                <div>
                                    Вы посетили следующие мероприятия<br/><br/>
                                    <List
                                        dataSource={pastEvents}
                                        renderItem={(item, index) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<Avatar size="large" src={item.img} />}
                                                    title={item.name}
                                                    description={`${item.city}, ${item.date}`}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            ),
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default UserAccountPage