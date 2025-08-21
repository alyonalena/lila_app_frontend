import React from 'react'

import { Row, Col, Avatar, Typography, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { useCreateAppContext } from '../../context'

const { Title } = Typography
const { Header } = Layout

function AppHeader() {

    const { toggleTab } = useCreateAppContext()

	const onMenuButtonClick = () => {
		toggleTab(3)
	}

    return (
        <Header style={{ background: '#040404', borderBottom: '1px solid #032f17', color: '#F2EFEA', textAlign: 'top', padding: '0 16px' }}>
            <Row align="top" justify="space-between" style={{ height: '72px' }}>
                <Col flex="auto" style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ margin: 0, color: '#032F17', lineHeight: '72px' }}>SX Wine</Title>
                </Col>
                <Col onClick={onMenuButtonClick} flex="auto" style={{ textAlign: 'right' }}>
                    <Avatar
                        size="large" 
                        style={{ color: '#F5F5F5', backgroundColor: '#032f17' }} 
                        icon={<UserOutlined />}                        
                    />
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
