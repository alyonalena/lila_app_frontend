import React from 'react'

import { Row, Col, Avatar, Typography, Layout, Flex } from 'antd'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import { useAppContext } from '../../context'
import Logo from '../../pics/logo.png'

const { Text, Title } = Typography
const { Header } = Layout

function AppHeader() {

	const { activeTab, toggleTab } = useAppContext()

    const launchParams = useLaunchParams()

	const onMenuButtonClick = (key) => {
		toggleTab(3)
	}

    return (
        <Header style={{ textAlign: "center", padding: "4px 8px" }}>
            <Row align="center" justify="space-between">
                <Flex align={"center"} gap={8}>
                    <Avatar alt="SX" shape="square" src={Logo} style={{ width: "52px", height: "52px" }} />
                    <Col flex="auto" style={{ textAlign: "left" }}>
                        <Title level={2} style={{ margin: 0, color: "black"}}>SX Wine</Title>
                        <Text>Champagne Lovers Club</Text>
                    </Col>
                </Flex>
                <Flex align={"center"} gap={8}
                    onClick={/*onMenuButtonClick*/ () => {}}
                >
                    <Avatar.Group>
                        <Avatar size="large" src={launchParams.tgWebAppData?.user?.photo_url}/>
                    </Avatar.Group>
                </Flex>
            </Row>
        </Header>
    )
}

export default AppHeader
