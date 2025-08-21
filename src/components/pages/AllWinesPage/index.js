import React from 'react'
import { Avatar, Divider, Typography, Space } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text } = Typography

function AllWinesPage() {

    return (
        <>
            <Text>КАТАЛОГ ВИН</Text>
            <div>
                
                <Divider orientation="right">
                    <Space>
                        <Avatar shape="square" src={<FR title="France"/>} />
                        <Text>CÔTE DES BAR</Text>
                    </Space>
                </Divider>
            
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