import React from 'react'

import { Row, Col, Avatar, Typography, Layout, Flex } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useAppContext } from '../../context'
import Logo from '../../pics/logo2.jpg'

const { Text, Title } = Typography
const { Header } = Layout

function AppHeader() {

	const { activeTab, toggleTab } = useAppContext()

	const onMenuButtonClick = (key) => {
		toggleTab(3)
	}

    return (
        <Header style={{ textAlign: "center", padding: "4px 16px" }}>
            <Row align="center" justify="space-between">
                <div>
                    <Flex style={{ width: '100%' }} align={'center'} gap={8}>
                    <img alt="example" src={Logo} style={{ width: '52px', height: '52px' }} />
                    <Col flex="auto" style={{ textAlign: 'left' }}>
                        <Title level={2} style={{ margin: 0, color: 'black'}}>SX Wine</Title>
                        <Text>Wine Lovers Community</Text>
                    </Col>
                    </Flex>
                </div>
                <Col flex="auto" style={{ textAlign: 'right' }}>
                    <div
                        onClick={onMenuButtonClick}
                    >
                        <Avatar
                            size="large" 
                            style={{ backgroundColor: 'white', color: '#E7014C' }} 
                            icon={<UserOutlined />}
                        />
                    </div>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
