import React from 'react'

import { Typography, Card, Avatar, List } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { allWines } from '../../../data'

const { Text } = Typography


function AllWinesPage() {
    return (
        <Card>   
            <List
                dataSource={allWines}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar size="large" style={{ backgroundColor: '#F7EBD5' }} icon={<QuestionCircleOutlined />} src={item.img} />}
                            title={<Text italic>{item.name}</Text>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default AllWinesPage