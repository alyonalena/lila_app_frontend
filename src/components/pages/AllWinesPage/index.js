import React, { useState } from 'react'
import { Avatar, Divider, Typography, Space, Button, Select, Drawer, Flex } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'
import { LeftOutlined } from '@ant-design/icons'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text } = Typography

function AllWinesPage() {

    const [filter, setFilter] = useState(false)

    const onClose = () => setFilter(false)
    const onOpen = () => setFilter(true)

    const [ country, setCountry ] = useState('all')

    return (
        <>
            <Typography.Title level={3}>Каталог вин</Typography.Title>
            <Divider orientation="left">
                <Space>
                    <Select
                        value={country}
                        style={{ width: '200px' }}
                        onChange={setCountry}
                        options={[
                            { value: 'all', label: 'Все страны' },
                            { value: 'fr', label: 'Франция' },
                            /*{ value: 'sp', label: 'Испания' },
                            { value: 'pr', label: 'Португалия' }*/
                        ]}
                    />
                    <Button type='primary' onClick={onOpen}>Поиск</Button>
                </Space>
            </Divider>
            <div>
                <WineShortInfoList wineList={allWines} readOnly={false}/>
                <Divider orientation="right">
                    <Avatar shape="square" src={<IT title="Italy"/>} />
                </Divider>
                <Text>Данные не загружены</Text>
                <Divider orientation="right">
                    <Avatar shape="square" src={<ES title="Spane"/>} />
                </Divider>
                <Text>Данные не загружены</Text>
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