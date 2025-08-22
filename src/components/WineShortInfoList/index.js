import React, { useState, useEffect } from 'react'
import { FR } from 'country-flag-icons/react/3x2'

import WineImg from '../../pics/bottle.png'

import { Typography, Flex, Space, Avatar, List, Drawer, Button, Descriptions, Image, Divider } from 'antd'
import { RightOutlined, LeftOutlined, EllipsisOutlined , QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

function WineShortInfoList({ wineList, readOnly }) {

    const [openId, setOpenId] = useState(-1)
    const [selectedWine, setSelectedWine] = useState(null)

    useEffect(() => {
        if (openId >= 0) {
            const wine = wineList.find(({id}) => openId === id)
            setSelectedWine(wine)
        } else {
            setSelectedWine(null)
        }
    }, [ openId ])

    const onClose = () => setOpenId(-1)

    const getWineShortCardList = () => (
        <>
            <Drawer 
                title={''}
                placement={'right'} 
                width={'100vw'} 
                onClose={onClose} 
                open={openId >= 0} 
                extra={
                    <Space>
                        <Avatar shape="square" src={<FR title="France" className="..."/>} />
                        <Text>CÔTE DES BAR</Text>
                    </Space>
                }
                footer={
                    <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                        <Button type='text' icon={<LeftOutlined />} onClick={onClose}>Назад</Button>
                        <Button type='primary'>Добавить в избранное</Button>
                    </Flex>
                }
            >
                <Title level={3}>{selectedWine?.name}</Title>
                <Space>
                    <Avatar size="large" src={WineImg} />
                    <Title level={3}>{selectedWine?.name}</Title>
                </Space>
                <Divider orientation='right'>
                    <Tag color="#55acee">
                        Цена по запросу
                    </Tag>
                </Divider>
                    Мнение эксперта:
                    
                <Divider />
                <Descriptions>
                    <Descriptions.Item label="Категория">{selectedWine?.category || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Страна">{selectedWine?.country || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Регион производства">{selectedWine?.country || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Сорт винограда">{selectedWine?.grape_variety || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Объём">{selectedWine?.volume || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Количество в наличии">{selectedWine?.available_number || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Тип почвы">{selectedWine?.ground_type || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Винификация">{selectedWine?.process || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Выдержка">{selectedWine?.wine_aging || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Виноградник">{selectedWine?.vineyard || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Сульфиты">{selectedWine?.sulfites || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Зона производства">{selectedWine?.production_area || '-'}</Descriptions.Item>
                </Descriptions>
            </Drawer>
            <List
                dataSource={wineList}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <RightOutlined 
                                color='black'
                            />
                        ]}  
                        onClick={(event) => {
                            // If you don't want click extra trigger collapse, you can prevent this:
                            event.stopPropagation()
                            setOpenId(item.id)
                        }}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar.Group>
                                    <Avatar size="large" src={WineImg} />
                                </Avatar.Group>
                            }
                            title={<Text>{item.name}</Text>}
                            description={
                                <>
                                    <div>{`${item.country}, ${item.region}, ${item.sugar}`}</div>
                                    <div>{`${item.volume} л.`}</div>
                                </>
                            }
                        />                  
                    </List.Item>
                )}
            />
        </>
    )

    const onChange = (key) => {
        console.log(key)
    }

    const genExtra = () => (
        <SettingOutlined
            onClick={(event) => {
                // If you don't want click extra trigger collapse, you can prevent this:
                event.stopPropagation()
            }}
        />
    )

    return getWineShortCardList()
}

export default WineShortInfoList