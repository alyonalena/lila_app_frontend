import React from 'react'

import { Tabs, Card, Avatar, Descriptions, List } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

import WineShortInfoList from '../../WineShortInfoList'
import { upcomingEvents, pastEvents, allWines } from '../../../data'

const { Meta } = Card

function UserAccountPage() {

    const myWines = allWines.filter(item => item.saved)

    return (
        <>
            <Card
                style={{ width: '100%' }}
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    title="Данил"
                    description="Настоящий ценитель"
                />
                <br />
                <Descriptions>
                    <Descriptions.Item label="Посещенные мероприятия">10</Descriptions.Item>
                    <Descriptions.Item label="Предстоящие мероприятия">2</Descriptions.Item>
                </Descriptions>
            </Card>
            <br />
            <Card>
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