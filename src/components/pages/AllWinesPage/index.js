import React from 'react'
import { Card, Avatar, Divider, Typography, Space } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text, Title } = Typography

function AllWinesPage() {

    return (
        <Card>
            <Text>КАТАЛОГ</Text>
            <Divider orientation="right">
                <Space>
                    <Avatar shape="square" src={<FR title="France" className="..."/>} />
                    <Text>CÔTE DES BAR</Text>
                </Space>
            </Divider>
           
            <WineShortInfoList wineList={allWines} readOnly={false}/>
            <Divider>
                <Avatar shape="square" src={<IT title="Italy" className="..."/>} />
            </Divider>
            <Text>Данные не загружены</Text>
            <Divider>
                <Avatar shape="square" src={<ES title="Spane" className="..."/>} />
            </Divider>
            <Text>Данные не загружены</Text>
        </Card>
    )
}

export default AllWinesPage