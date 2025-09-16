import React, { useState } from 'react'
import { Divider, Typography, Space, Button, Select, Drawer, Flex } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text } = Typography

function AllWinesPage() {

    const [filter, setFilter] = useState(false)

    const onClose = () => setFilter(false)
    const onOpen = () => setFilter(true)

    const [ country, setCountry ] = useState('fr')
    const [ mode, setMode ] = useState('upcoming')

    const onChange = (value) => {
        setMode(value)
    }

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: '0',
                    top: '60px',
                    width: '100%',
                    zIndex: '99',                    
                    padding: '24px 0',
                }}
            >
                <Flex style={{ width: '100%', color: 'white'}} vertical align={'center'}>
                    <div>
                        <Typography.Title level={4} style={{ color: 'rgba(255, 255, 255, 0.8)'}}>Каталог</Typography.Title>
                    </div>
                    {/*<div>
                        <Button type='link' 
                            onClick={() => onChange('upcoming')} 
                            style={ mode === 'history' ? {color: 'rgba(255, 255, 255, 0.6)'} : { color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'underline' }}
                        >
                            Вина
                        </Button>
                            |
                        <Button type='link' 
                            onClick={() => onChange('history')} 
                            style={ mode === 'upcoming' ? {color: 'rgba(255, 255, 255, 0.6)'} : { color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'underline' }}
                        >
                            Производители
                        </Button>
                    </div>*/}
                </Flex>
            </div>
            <br/><br/>
            <div>
                <WineShortInfoList wineList={allWines} readOnly={false}/>
            </div>
            <Drawer 
                title={''}
                placement={'right'} 
                width={'100vw'} 
                onClose={onClose} 
                open={filter} 
                extra={
                    <Space>
                        <Text>Параметры для поиска</Text>
                    </Space>
                }
                footer={
                    <Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
                        <Button type='text' icon={<LeftOutlined />} onClick={onClose}>Назад</Button>
                        <Button type='primary'>Найти вино</Button>
                    </Flex>
                }
            />
        </>
    )
}

export default AllWinesPage