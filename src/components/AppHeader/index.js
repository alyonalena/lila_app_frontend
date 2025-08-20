import React from 'react'

import { Row, Col, Typography, Layout, Button } from 'antd'

const { Title } = Typography
const { Header } = Layout

function AppHeader() {
    return (
        <Header style={{ background: '#040404', borderBottom: '1px solid rgb(3, 47, 23)', color: '#F2EFEA', textAlign: 'center', padding: '0 16px' }}>
            <Row align="middle" justify="space-between" style={{ height: '72px' }}>
                <Col flex="auto" style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ margin: 0, color: '#F5F5F5', lineHeight: '72px' }}>SX Wine</Title>
                </Col>
                <Col flex="auto" style={{ textAlign: 'right' }}>
                    <Button level={1} >Личный кабинет</Button>
                </Col>
            </Row>
        </Header>
    )
}

export default AppHeader
