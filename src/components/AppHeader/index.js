import React from 'react'

import { Row, Col, Avatar, Typography, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useAppContext } from '../../context'

const { Title } = Typography
const { Header } = Layout

function AppHeader() {

	const { activeTab, toggleTab } = useAppContext()


	const onMenuButtonClick = (key) => {
		toggleTab(3)
	}

    return (
        <Header style={{ textAlign: 'top', padding: '0 16px' }}>
            <Row align="top" justify="space-between">
                <Col flex="auto" style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ margin: 0, color: '#E2044C', lineHeight: '72px' }}>SX Wine</Title>
                </Col>
                <Col flex="auto" style={{ textAlign: 'right' }}>
                <div                
                    onClick={onMenuButtonClick}
                    >
                    <Avatar
                        size="large" 
                        style={{ backgroundColor: 'white', color: 'black' }} 
                        icon={<UserOutlined />}                   
                    />
                </div>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
