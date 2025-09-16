import React, { useState, useEffect } from 'react'
import { FR } from 'country-flag-icons/react/3x2'

import WineImg from '../../pics/pink.png'
import Expert from '../../pics/Expert.png'

import { Typography, Flex, Space, Avatar, List, Drawer, Button, Descriptions, Tag, Divider, Alert, Card } from 'antd'
import { RightOutlined } from '@ant-design/icons'

import { producers } from '../../data'

const { Text, Title } = Typography

function ProducersShortInfoList() {

    const [openId, setOpenId] = useState(-1)
    const [selectedWine, setSelectedWine] = useState(null)


    const onClose = () => setOpenId(-1)

    const getWineShortCardList = () => (
        <>
            {producers.map(item => (
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
                            <Typography.Title level={3}>{item.name}</Typography.Title>
                        </div><br/>
                        <Button size="large" type="primary" color="pink">Голосовать за дегустацию</Button>
                    </Flex>
                </Card>
            ))}
        </>
    )
    return getWineShortCardList()
}

export default ProducersShortInfoList