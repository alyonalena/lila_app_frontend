import React from 'react'

import { Typography, Space, Avatar, List } from 'antd'
import { HeartFilled, HeartOutlined, QuestionCircleOutlined } from '@ant-design/icons'

const { Text } = Typography


function WineShortInfoList({wineList, readOnly}) {

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    )

    const getWineShortCardList = () => (
        <List
            dataSource={wineList}
            renderItem={(item, index) => (
                <List.Item
                    actions={!readOnly && [
                        <IconText icon={item.saved ? HeartFilled : HeartOutlined } text={''} key="list-vertical-star-o" />,
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar size="large" style={{ backgroundColor: '#F7EBD5' }} icon={<QuestionCircleOutlined />} src={item.img} />}
                        title={<Text italic>{item.name}</Text>}
                        description={item.description}
                    />
                    
                </List.Item>
            )}
        />
    )

    return getWineShortCardList()
}

export default WineShortInfoList