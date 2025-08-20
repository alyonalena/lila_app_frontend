import React from 'react'

import { Row, Col, Avatar, Typography, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useLaunchParams } from '@telegram-apps/sdk-react'

const { Title } = Typography
const { Header } = Layout

function AppHeader() {
    const launchParams = useLaunchParams()

    return (
        <Header style={{ background: '#040404', borderBottom: '1px solid rgb(3, 47, 23)', color: '#F2EFEA', textAlign: 'top', padding: '0 16px' }}>
            <Row align="top" justify="space-between" style={{ height: '72px' }}>
                <Col flex="auto" style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ margin: 0, color: '#F5F5F5', lineHeight: '72px' }}>SX Wine</Title>
                </Col>
                <Col flex="auto" style={{ textAlign: 'right' }}>
                    <Avatar size="large" style={{ color: 'F5F5F5' }} icon={<UserOutlined />} />
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
