import React, { useState, useEffect } from 'react'
import { FR } from 'country-flag-icons/react/3x2'

import WineImg from '../../pics/bottle.png'

import { Typography, Flex, Space, Avatar, List, Drawer, Button, Descriptions, Tag, Divider, Alert } from 'antd'
import { RightOutlined, LeftOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

function WineShortInfoList({ wineList }) {

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
                placement={"right"} 
                width={"100vw"} 
                onClose={onClose} 
                closable={false}
                header={null}
                open={openId >= 0} 
                footer={
                    <Flex style={{ width: "100%" }} justify={"space-between"} align={"flex-start"}>
                        <div></div>
                        <Button type="default" size="large" onClick={onClose}>Закрыть</Button>
                    </Flex>
                }
            >
                {/*<Flex style={{ width: "100%" }} gap={8} align={"flex-start"} justify={"flex-end"}>
                    <Avatar shape="square" src={<FR title="France" className="..."/>} />
                </Flex>*/}
                <Flex style={{ width: "100%" }} gap={8} align={"flex-start"}>
                    <Avatar size="large" src={WineImg} />
                    <div>
                        <Title level={3}>{selectedWine?.name}, {selectedWine?.producer}</Title>
                        <Text >{selectedWine?.sugar}, {selectedWine?.wine_aging}</Text>
                    </div>
                </Flex>
                <Divider orientation="right">
                    <Title level={3}>
                        <Tag color="error">
                            Цена по запросу
                        </Tag>
                    </Title>
                </Divider>
                {selectedWine?.description && (
                    <>
                        <Flex><Avatar src={UserOutlined}/><Typography.Text>Мнение эксперта:</Typography.Text></Flex>
                        <Typography.Text italic>
                            {selectedWine.description}
                        </Typography.Text>
                        <Divider />
                    </>
                )}
                <Alert 
                    message="О производителе"
                    type="danger"
                    description={'Marie Courtin — это история о том, как один человек с огромной преданностью своему делу создает невероятно честные, аутентичные и глубокие вина, которые являются эталоном натурального шампанского. '}
                />
                <Descriptions bordered>
                    <Descriptions.Item label="Категория">{selectedWine?.category || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Страна"><Avatar shape="square" src={<FR title="France" className="..."/>} />&nbsp;{selectedWine?.country || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Регион производства">{selectedWine?.region || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Выдержка">{selectedWine?.wine_aging || '-'} год</Descriptions.Item>
                    <Descriptions.Item label="Сорт винограда"><div>{selectedWine?.grape_variety?.map(({ name, pers }) => (<div>{`${pers}% ${name}`}</div>))}</div></Descriptions.Item>
                    <Descriptions.Item label="Объём">{selectedWine?.volume || '-'} л.</Descriptions.Item>
                    {/*<Descriptions.Item label="Винификация">{selectedWine?.process || '-'}</Descriptions.Item>
                    <Descriptions.Item label="Виноградник">{selectedWine?.vineyard || '-'}</Descriptions.Item>*/}
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
                            title={<Text>{item.name}, {item.producer}, {item.sugar}</Text>}                            
                            description={
                                <>
                                    <div>{`${item.country}, ${item.region}, ${item.wine_aging}`}</div>
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