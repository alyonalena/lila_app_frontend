import React, { useState, useEffect } from 'react'
import { FR } from 'country-flag-icons/react/3x2'

import { Typography, Flex, Space, Avatar, List, Drawer, Button, Descriptions, Image } from 'antd'
import { HeartFilled, HeartOutlined, EllipsisOutlined , QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons'

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
                        <Button type='text' onClick={onClose}>В каталог</Button>
                        <Button type='primary'>Добавить в избранное</Button>
                    </Flex>
                }
            >
                <Image preview={false} width={'100%'} src={selectedWine?.img}/>
                <Title level={3}>{selectedWine?.name}</Title>
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
                        actions={!readOnly && [
                            //<IconText icon={item.saved ? HeartFilled : HeartOutlined } text={''} key="list-vertical-star-o" />,
                            <HeartFilled
                                color='#E2044C'
                                onClick={(event) => {
                                    // If you don't want click extra trigger collapse, you can prevent this:
                                    event.stopPropagation()
                                }}
                            />,
                            <EllipsisOutlined 
                            color='#E2044C'
                                onClick={(event) => {
                                    // If you don't want click extra trigger collapse, you can prevent this:
                                    event.stopPropagation()
                                    setOpenId(item.id)
                                }}
                            />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar shape="square" size="large" style={{ backgroundColor: '#F7EBD5' }} icon={<QuestionCircleOutlined />} src={item.img} />}
                            title={<Text>{item.name}</Text>}
                            description={item.description}
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