import React from 'react'

import { Card } from 'antd'
import WineShortInfoList from '../../WineShortInfoList'
import { allWines } from '../../../data'


function AllWinesPage() {

    return (
        <Card>
            <WineShortInfoList wineList={allWines} readOnly={false}/>
        </Card>
    )
}

export default AllWinesPage