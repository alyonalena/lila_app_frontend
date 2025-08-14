import React from 'react'

import { Typography, Card } from 'antd'

import { allWines } from '../../../data'

const { Text } = Typography


function AllWinesPage() {
    return (
        <Card>
            {allWines.map((item) => (<><Text italic>{item.name}</Text><hr/></>))}
        </Card>
    )
}

export default AllWinesPage