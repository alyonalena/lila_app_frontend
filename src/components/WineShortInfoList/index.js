import React, { useState, useEffect } from 'react'
import { FR } from 'country-flag-icons/react/3x2'

import WineImg from '../../pics/pink.png'
import Expert from '../../pics/Expert.png'

import { Typography, Flex, Space, Avatar, List, Drawer, Button, Descriptions, Tag, Divider, Alert, Card } from 'antd'
import { RightOutlined } from '@ant-design/icons'

import { useProducers } from '../../services/catalog'

const { Text, Title } = Typography

function WineShortInfoList({ wineList }) {

    const [openId, setOpenId] = useState(-1)
    const [selectedWine, setSelectedWine] = useState(null)
    const producers = useProducers()

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
                placement={"right"} 
                width={"100vw"} 
                onClose={onClose} 
                closable={false}
                header={null}
                open={openId >= 0} 
                footer={
                    <Flex style={{ width: "100%" }} justify={"space-between"} align={"flex-start"}>
                        <div></div>
                        <Space gap={8}>
                            <Button size="large" type="primary" color="pink">{'Хочу'}</Button>
                            <Button type="default" size="large" onClick={onClose}>Закрыть</Button>
                        </Space>
                    </Flex>
                }
            >
                <Flex style={{ width: "100%" }} gap={8} align={"flex-start"}>
                    <Avatar size="large" src={WineImg} />
                    <div>
                        <Title level={3}>{selectedWine?.name}, {selectedWine && producers.find(({id}) => id === selectedWine.producerId)?.name}</Title>
                        <Text >{selectedWine?.sugar}, {selectedWine?.wine_aging}</Text>
                    </div>
                </Flex>
                <Divider orientation="right">
                    <Text>
                        <Tag color="error">
                            Цена по запросу
                        </Tag>
                    </Text>
                </Divider>

                {selectedWine?.description && (
                    <>               
                        <Alert 
                            message="Мнение эксперта"
                            type="danger"
                            description={
                                <>
                                    <Divider orientation='left'>
                                        <Flex align='center' gap={8}>                                            
                                            <Avatar size="large" src={Expert} />
                                            <Flex align='flex-start' vertical>
                                                <Text strong>Данил</Text>
                                                <Text type='secondary'>Организатор клуба</Text>
                                            </Flex></Flex>
                                    </Divider><br />
                                    {selectedWine.description.map(item => <p>{item}</p>)}
                                </>

                            }
                        />
                        <br/>
                    </>
                )}                
                <br />
                <Descriptions bordered>
                    <Descriptions.Item label="Категория">{selectedWine?.category || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Страна"><Avatar shape="square" src={<FR title="France" className="..."/>} />&nbsp;{selectedWine?.country || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Регион производства">{selectedWine?.region || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Выдержка">{selectedWine?.wine_aging || '-'} год</Descriptions.Item>
                    <Descriptions.Item label="Сорт винограда"><div>{selectedWine?.grape_variety?.map(({ name, pers }) => (<div>{`${pers}% ${name}`}</div>))}</div></Descriptions.Item>
                    <Descriptions.Item label="Объём">{selectedWine?.volume || '-'} л.</Descriptions.Item>
                </Descriptions>
                <br />
                <Alert 
                    message="О производителе"
                    type="danger"
                    description={selectedWine && producers.find(({id}) => id == selectedWine.producerId)?.shortInfo.map(item => <div>{item}</div>)}
                />
                <br />
            </Drawer>
            <List
                style={{ background: 'white', textAlign: 'left', borderRadius: '0.2rem', border: '1px solid rgba(244, 244, 244, 0.96)'}}
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
                                    <Avatar size="large" src={WineImg} />
                            }
                            title={(
                                <div style={{ lineHeight: 0}}>
                                    <Title level={3}>{item.name}</Title> 
                                    <br/><em>{item.sugar}, {item.wine_aging}</em><br/><br/>
                                </div>
                            )}                            
                            description={
                                <>
                                    <div>{producers.find(({id}) => id == item.producerId)?.name},{` ${item.country}, ${item.region}`}</div>
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

    return getWineShortCardList()
}

export default WineShortInfoList