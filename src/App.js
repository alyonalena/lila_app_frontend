import React, { useEffect, useState } from 'react'
import { Layout, Typography, Row, Col, Button, Input } from 'antd'
import { MenuOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined, StarOutlined, LikeOutlined } from '@ant-design/icons'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

import { Avatar, List, Space, Card, Segmented } from 'antd'

import Img1 from './pics/1.png'
import Img2 from './pics/2.png'
import Img3 from './pics/3.png'
import Img4 from './pics/4.png'
import Img5 from './pics/5.png'
import Img6 from './pics/6.png'
import Img7 from './pics/7.png'
import Img8 from './pics/8.png'
import Img9 from './pics/9.png'
import Img10 from './pics/10.png'
import Img11 from './pics/11.png'
import Img12 from './pics/12.png'
import 'antd/dist/reset.css'
import './App.css'

const { Text, Link } = Typography

const data = Array.from({ length: 5 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `Солнцезащитные очки Miu Miu`,
  avatar: `Img${i+1}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const { Header, Footer, Content } = Layout
const { Title } = Typography;

const handleMenuClick = () => {alert('handleMenuClick')}
const handleUserClick = () => {alert('handleUserClick')}
const handleLikeClick = () => {alert('handleLikeClick')}

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12
];

function App() {

  // Image visibility state
  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(true))

  useEffect(() => {
    // Helper to randomly toggle a state
    function randomToggle(setter) {
      setter(v => Math.random() > 0.5 ? !v : v)
    }
    // Set up interval for images
    const imageInterval = setInterval(() => {
      setVisibleImages(prev => prev.map(v => (Math.random() > 0.7 ? !v : v)))
    }, 2000);
    return () => {
      clearInterval(imageInterval)
    };
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'white', borderBottom: '1px solid #bec2cd', color: 'black', textAlign: 'center', padding: '0 16px' }}>
        <Row align="middle" justify="space-between" style={{ height: '64px' }}>
          <Col style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/*<Button type="text" onClick={handleMenuClick} icon={<MenuOutlined style={{ fontSize: 24 }} />} />*/}
          </Col>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <Title level={1} style={{ margin: 0, color: 'black', lineHeight: '64px' }}>L ī l ā</Title>
          </Col>
          <Col style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'flex-end' }}>
            {/*<Button type="text" onClick={handleUserClick} icon={<HeartOutlined style={{ fontSize: 24 }} />} />
            <Button type="text" onClick={handleLikeClick} icon={<ShoppingCartOutlined style={{ fontSize: 24 }} />} />
            */}
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '16px 16px 70px 16px', display: 'flex', flexDirection: 'column'}}>
        <Text type="secondary">Настроение дня: </Text>
        <div 
          style={{
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            backgroundColor: 'white',
            padding: '16px 16px 0',
          }}
        >
          <Title level={4}>песня Lana Del Ray - Gods & Monsters</Title>
        </div><br/>
        <Text type="secondary">Подборки для вашего настроения: </Text>
        <div >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
              display: 'flex',
              alignItems: 'top',         
              justifyContent: 'top',
              color: 'black',
              padding: '8px 0',
              fontSize: '1.3rem',
              fontWeight: 300,
            }}
          >
            <SwiperSlide
              style={{
                border: '1px solid #f0f0f0',
                borderRadius: '8px 8px 0 0',
                backgroundColor: 'white',
                padding: '0',
              }}
            >
              <List
                itemLayout="vertical"
                size="large"
                header={<div
                  style={{
                    padding: '8px 16px 0',
                  }}
                >
                  <Title level={4}>1. Королева декаданса</Title>
                </div>}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={HeartOutlined} text="Сохранить" key="list-vertical-star-o" />,
                      <IconText icon={ShoppingCartOutlined} text="Добавить в корзину" key="list-vertical-like-o" />,
                    ]}
                    extra={
                      <img src={Img2}/>
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                border: '1px solid #f0f0f0',
                borderRadius: '8px 8px 0 0',
                backgroundColor: 'white',
                padding: '0',
              }}
            >
              <List
                itemLayout="vertical"
                size="large"
                header={<div
                  style={{
                    padding: '8px 16px 0',
                  }}
                >
                  <Title level={4}>2. Готическая принцесса</Title>
                </div>}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={HeartOutlined} text="Сохранить" key="list-vertical-star-o" />,
                      <IconText icon={ShoppingCartOutlined} text="Добавить в корзину" key="list-vertical-like-o" />,
                    ]}
                    extra={
                      <img src={Img2}/>
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                border: '1px solid #f0f0f0',
                borderRadius: '8px 8px 0 0',
                backgroundColor: 'white',
                padding: '0',
              }}
            >
              <List
                itemLayout="vertical"
                size="large"
                header={<div
                  style={{
                    padding: '8px 16px 0',
                  }}
                >
                  <Title level={4}>3. Ещё один образ</Title>
                </div>}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={HeartOutlined} text="Сохранить" key="list-vertical-star-o" />,
                      <IconText icon={ShoppingCartOutlined} text="Добавить в корзину" key="list-vertical-like-o" />,
                    ]}
                    extra={
                      <img src={Img4}/>
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Content>
      <Footer>
        <Segmented
          options={[
            { value: '1', icon: <UserOutlined />},
            { value: '2', icon: <HeartOutlined /> },
            { value: '3', icon: <ShoppingCartOutlined /> },
          ]}
        />
      </Footer>
    </Layout>
  );
}

export default App
