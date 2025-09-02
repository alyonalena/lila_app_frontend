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

    return (
        <>
            <Flex style={{ width: '100%' }} vertical align={'center'}>
                <div>
                    <Typography.Title level={3}>Каталог вин</Typography.Title>
                </div>
                <Divider orientation="center">
                    <Space>
                        <Select
                            value={country}
                            style={{ width: '200px' }}
                            onChange={setCountry}
                            options={[
                                { value: 'all', label: 'Все страны' },
                                { value: 'fr', label: 'Франция' },
                            ]}
                        />
                    </Space>
                </Divider>
            </Flex>
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