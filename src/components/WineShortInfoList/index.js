import React, { useState, useEffect } from 'react'

import { Typography, Space, Avatar, List, Drawer, Button, Descriptions } from 'antd'
import { HeartFilled, HeartOutlined, EllipsisOutlined , QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons'

const { Text } = Typography


function WineShortInfoList({wineList, readOnly}) {

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
                title={selectedWine?.name}
                placement={"right"} 
                width={'100vw'} 
                onClose={onClose} 
                open={openId >= 0} 
                extra={ 
                    <Space> 
                        <Button type="primary" onClick={onClose}> В Избранное </Button>
                    </Space>
                }
            >
                {
                /*
                {
                    id: 0,
                    name: 'RESONANCE EXTRA BRUT 2016',
                    description: 'Дополнительная информация о данном вине',
                    img: Wine1,
                    saved: true,
                    category: "Игристое",
                    sugar: "Сухое",
                    country: "Франция",
                    region: "Шампань",
                    grape_variety: "Шардоне",
                    volume: "0,75",
                    available_number: 3,
                    producer: "Marie-Courtin",
                    price: "По запросу",
                    ground_type: "известняк, глина",
                    process: "9 месяцев в дубовой бочке", 
                    vinification: "",
                    wine_aging: "",
                    vineyard: "",
                    sulfites: "",
                    production_area: "",
                    description: "",
                }
                */
                }
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
                                onClick={(event) => {
                                    // If you don't want click extra trigger collapse, you can prevent this:
                                    event.stopPropagation()
                                }}
                            />,
                            <EllipsisOutlined 
                                onClick={(event) => {
                                    // If you don't want click extra trigger collapse, you can prevent this:
                                    event.stopPropagation()
                                    setOpenId(item.id)
                                }}
                            />,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar size="large" style={{ backgroundColor: '#E0DDD4' }} icon={<QuestionCircleOutlined />} src={item.img} />}
                            title={<Text>{item.name}</Text>}
                            description={item.description}
                        />                    
                    </List.Item>
                )}
            />
        </>
    )

    const onChange = (key) => {
        console.log(key);
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