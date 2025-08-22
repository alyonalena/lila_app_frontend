import React, { useState } from 'react'
import { Avatar, Divider, Typography, Space, Button, Select } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'
import { FilterFilled } from '@ant-design/icons'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text } = Typography

function AllWinesPage() {

    const [ country, setCountry ] = useState('fr')
    const [ region, setRegion ] = useState(null)
    const [ price, setPrice ] = useState('fr')

    return (
        <>
            <Typography.Title level={3}>Каталог вин</Typography.Title>
            <Divider orientation="left">
                <Space>
                    <Avatar shape="square" src={<FR title="France"/>} />
                    <Select
                        value={country}
                        style={{ width: '150px' }}
                        onChange={setCountry}
                        options={[
                            { value: 'fr', label: 'Франция' },
                            /*{ value: 'sp', label: 'Испания' },
                            { value: 'pr', label: 'Португалия' }*/
                        ]}
                    />
                    <Button type='primary'>Поиск</Button>
                </Space>
            </Divider>
            <div>                
    
                <WineShortInfoList wineList={allWines} readOnly={false}/>
                <Divider orientation="right">
                    <Avatar shape="square"  src={<IT title="Italy"/>} />
                </Divider>
                <Text>Данные не загружены</Text>
                <Divider orientation="right">
                    <Avatar shape="square" src={<ES title="Spane"/>} />
                </Divider>
                <Text>Данные не загружены</Text>
            </div>
        </>
    )
}

export default AllWinesPage