import React from 'react'
import { Card, Avatar, Divider, Typography } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text, Title } = Typography

function AllWinesPage() {

    return (
        <>
        <Title level={3} style={{ margin: 0, color: 'black', lineHeight: '72px' }}>Каталог </Title>
        <Card>
            <Divider>
                <Avatar shape="square" src={<FR title="France" className="..."/>} />
            </Divider>
            <Divider orientation="left">
                <Title level={5}>CÔTE DES BAR</Title>
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
        </>
    )
}

export default AllWinesPage