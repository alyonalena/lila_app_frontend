import React, {
  useEffect,
  useRef,
} from 'react'


import { Layout, Typography, Row, Col, Button, ConfigProvider, Card, Descriptions } from 'antd'
import { UserOutlined, HeartOutlined, ShoppingCartOutlined, WechatWorkOutlined } from '@ant-design/icons'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

import { List, Space, Segmented } from 'antd'

import * as d3 from 'd3'


import 'antd/dist/reset.css'
import './App.css'
import champMap from './pics/champMap.png'

import Img1 from './pics/image1.png'
import Img2 from './pics/image2.png'

const { Header, Footer, Content } = Layout
const { Text, Title } = Typography



const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
	<ConfigProvider
		theme={{
			token: {
				colorPrimary: '#3F2F2C'
			}
		}}
	>
      <Header style={{ background: '#F7EBD5', borderBottom: '1px solidrgb(180, 158, 145)', color: '#3F2F2C', textAlign: 'center', padding: '0 16px' }}>
        <Row align="middle" justify="space-between" style={{ height: '64px' }}>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <Title level={1} style={{ margin: 0, color: '#3F2F2C', lineHeight: '64px' }}>SX Wine</Title>
          </Col>
        </Row>
      </Header>
      <Content style={{ 
        padding: '86px 16px 150px 16px', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(247,235,213,0.7), rgba(247,235,213,0.7)), url(${champMap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
		<Card title="Дегустация Marie-Courtin" extra={<Button type='primary'>Иду!</Button>}>
			<img src={Img1}/>
			<Descriptions >
				<Descriptions.Item label="Дата">22 августа 2025</Descriptions.Item>
				<Descriptions.Item label="Город">Москва</Descriptions.Item>
				<Descriptions.Item label="Место">The Nappe Bistro (Скатерный пер., 13)</Descriptions.Item>
				<Descriptions.Item label="Стоимость">25 000 руб.</Descriptions.Item>
				<Descriptions.Item label="Осталось мест">2</Descriptions.Item>
			</Descriptions>			
		</Card><br/>
		<Card title="Дегустация Marie-Courtin" extra={<Button type='primary'>Иду!</Button>}>
			<img src={Img2}/>
			<Descriptions>
				<Descriptions.Item label="Дата">22 августа 2025</Descriptions.Item>
				<Descriptions.Item label="Город">Москва</Descriptions.Item>
				<Descriptions.Item label="Место">Уточняется...</Descriptions.Item>
				<Descriptions.Item label="Стоимость">45 000 руб.</Descriptions.Item>
				<Descriptions.Item label="Осталось мест">7</Descriptions.Item>
			</Descriptions>
		</Card><br/>
      </Content>
	  <Footer style={{
		display: 'flex', 
		flexDirection: 'column',
	  }}>
		<Button size='large' type='primary'>Прошедшие дегустации (32)</Button><br/>
		<Button size='large' type='primary'>Доступные вина</Button><br/>
	  </Footer>	
	  </ConfigProvider>
    </Layout>
  );
}



export default App

