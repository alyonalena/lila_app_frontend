import React from 'react'

import { Row, Col, Typography, Layout } from 'antd'

const { Title } = Typography
const { Header } = Layout

function AppHeader() {
    return (
        <Header style={{ background: '#F7EBD5', borderBottom: '1px solidrgb(180, 158, 145)', color: '#3F2F2C', textAlign: 'center', padding: '0 16px' }}>
            <Row align="middle" justify="space-between" style={{ height: '64px' }}>
                <Col flex="auto" style={{ textAlign: 'center' }}>
                    <Title level={1} style={{ margin: 0, color: '#3F2F2C', lineHeight: '64px' }}>SX Wine</Title>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
