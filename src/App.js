import React, {
  useEffect,
  useState,
} from 'react'


import { Layout, Typography, Row, Col, Button, ConfigProvider, Card, Descriptions, Tabs, Flex, Badge } from 'antd'
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


const { Meta } = Card;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

function App() {

	const tabList = [
		{
		  key: 'tab1',
		  tab: 'tab1',
		},
		{
		  key: 'tab2',
		  tab: 'tab2',
		},
	  ];
	  
	  const contentList = {
		tab1: <p>content1</p>,
		tab2: <p>content2</p>,
	  };

	const [activeTabKey1, setActiveTabKey1] = useState('tab1');

	const onTab1Change = (key) => {
		setActiveTabKey1(key);
	};

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
		<Space direction="vertical" size="middle" style={{ width: '100%' }}>
			<Badge.Ribbon text="СКОРО!" color="red">
				<Card
					hoverable
					style={{ width: '100%' }}
					cover={<img alt="example" src={Img1} />}
				>
					<Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
						<Title level={3}>Дегустация Marie-Courtin</Title>
						<Button type="primary">Иду!</Button>
					</Flex><br /><br />
					<Tabs
						tabPosition={'top'}
						items={[
							{
								label: 'Информация',
								key: 1,
								children: <Descriptions >
									<Descriptions.Item label="Дата">22 августа 2025</Descriptions.Item>
									<Descriptions.Item label="Город">Москва</Descriptions.Item>
									<Descriptions.Item label="Место">The Nappe Bistro (Скатерный пер., 13)</Descriptions.Item>
									<Descriptions.Item label="Стоимость">25 000 руб.</Descriptions.Item>
									<Descriptions.Item label="Осталось мест">2</Descriptions.Item>
								</Descriptions>,
							},
							{
								label: `Винный сет`,
								key: 2,
								children: <div >
									<Text italic>RESONANCE EXTRA BRUT 2016</Text><br/>
									<Text italic>EFFLORESCENCE EXTRA 2016</Text><br/>
									<Text italic>PRESENCE BLANC DE BLANCS EXTRA BRUT 2015</Text><br/>
									<Text italic>INDULGENCE ROSE EXTRA BRUT 2015</Text><br/>
									<Text italic>COTEAUX CHAMPENOIS LE BLANC DU TREMBLE 2016</Text><br/>
									<Text italic>MARIE-COURTIN CONCORDANCE 2018</Text><br/>
									<Text italic>MARIE-COURTIN BLANC DE BLANCS AMPHORA 2020</Text><br/>
									<Text italic>MARIE-COURTIN CHAMPANGE BLANC DE NOIRS AMPHORES EXTRA BRUT 2020</Text><br/>
								</div>,
							}
						]}
					/>
				</Card>
			</Badge.Ribbon>
		</Space>
		<br />
		<Card
			hoverable
			style={{ width: '100%' }}
			cover={<img alt="example" src={Img2} />}
		>
			<Flex style={{ width: '100%' }} justify={'space-between'} align={'flex-start'}>
				<Title level={3}>Дегустация "Сет Мечты!"</Title>
				<Button type='primary'>Иду!</Button>
			</Flex>
			
			<Tabs
				tabPosition={'top'}
				items={[
					{
						label: 'Информация',
						key: 1,
						children: <Descriptions>
						<Descriptions.Item label="Дата">12 сентября 2025</Descriptions.Item>
						<Descriptions.Item label="Город">Москва</Descriptions.Item>
						<Descriptions.Item label="Место">Уточняется...</Descriptions.Item>
						<Descriptions.Item label="Стоимость">45 000 руб.</Descriptions.Item>
						<Descriptions.Item label="Осталось мест">7</Descriptions.Item>
					</Descriptions>,
					},
					{
						label: `Винный сет`,
						key: 2,
						children: <div >
							<Text italic>Cuvee № 747</Text><br/>
							<Text italic>Cuvee № 743</Text><br/>
							<Text italic>Dizy Terres Rouges 2015</Text><br/>
							<Text italic>Avize Champ Terme 2009</Text><br/>
							<Text italic>"Ay" Vauzelle Terme 2009</Text><br/>
							<Text italic>Dizy Corne Bautray 2004</Text><br/>
							<Text italic>Millesime Degorgement Tardif 2002</Text><br/>
						</div>,
					}
				]}
			/>
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

