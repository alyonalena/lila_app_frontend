import React from 'react'

import { Tabs, Card, Avatar, Descriptions, List, Typography, Space, Divider } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { useLaunchParams } from '@telegram-apps/sdk-react'

import WineShortInfoList from '../../WineShortInfoList'
import { upcomingEvents, pastEvents, allWines } from '../../../data'

const { Meta } = Card
const { Title, Text } = Typography

function UserAccountPage() {

    const myWines = allWines.filter(item => item.saved)
    const launchParams = /*useLaunchParams()*/ {}

    return (
        <>
                <Card
                    style={{ width: '100%', border: 'none' }}
                    /*actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />
                    ]}*/
                >
                    <Text>ЛИЧНЫЙ КАБИНЕТ</Text>
                    <Divider orientation="right">
                        <Space>
                            <Avatar size="large" src={launchParams.tgWebAppData?.user?.photo_url}/>
                        </Space>
                    </Divider>

                    <Descriptions>
                        <Descriptions.Item label="Пользователь">`${launchParams.tgWebAppData?.user?.first_name} ${launchParams.tgWebAppData?.user?.last_name} (${launchParams.tgWebAppData?.user?.username})`</Descriptions.Item>
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
                </Card>


        </>
    )
}

export default UserAccountPage