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
        <Header style={{ borderBottom: '1px solid #032F17', textAlign: 'top', padding: '0 16px' }}>
            <Row align="top" justify="space-between" style={{ height: '72px' }}>
                <Col flex="auto" style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ margin: 0, color: '#032F17', lineHeight: '72px' }}>SX Wine</Title>
                </Col>
                <Col flex="auto" style={{ textAlign: 'right' }}>
                <div                
                    onClick={onMenuButtonClick}
                    >
                    <Avatar
                        size="large" 
                        style={{ backgroundColor: '#032F17' }} 
                        icon={<UserOutlined />}                   
                    />
                </div>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
