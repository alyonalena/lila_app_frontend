import React from 'react'
import { Card, Avatar, Divider, Typography } from 'antd'
import { FR, IT, ES } from 'country-flag-icons/react/3x2'

import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'

const { Text } = Typography

function AllWinesPage() {

    return (
        <Card>
            <Divider>
                <Avatar shape="square" src={<FR title="France" className="..."/>} />
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