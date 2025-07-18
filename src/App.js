import React, { useEffect, useState } from 'react';
import { Layout, Typography, Row, Col, Button, Input } from 'antd';
import { MenuOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined, StarOutlined, LikeOutlined } from '@ant-design/icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

import { Avatar, List, Space } from 'antd';

import Img1 from './pics/1.png';
import Img2 from './pics/2.png';
import Img3 from './pics/3.png';
import Img4 from './pics/4.png';
import Img5 from './pics/5.png';
import Img6 from './pics/6.png';
import Img7 from './pics/7.png';
import Img8 from './pics/8.png';
import Img9 from './pics/9.png';
import Img10 from './pics/10.png';
import Img11 from './pics/11.png';
import Img12 from './pics/12.png';
import 'antd/dist/reset.css';
import './App.css';

const data = Array.from({ length: 23 }).map((_, i) => ({
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


const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const handleMenuClick = () => {alert('handleMenuClick')};
const handleUserClick = () => {alert('handleUserClick')};
const handleLikeClick = () => {alert('handleLikeClick')};

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12
];

function App() {

  // Image visibility state
  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(true));

  useEffect(() => {
    // Helper to randomly toggle a state
    function randomToggle(setter) {
      setter(v => Math.random() > 0.5 ? !v : v);
    }
    // Set up interval for images
    const imageInterval = setInterval(() => {
      setVisibleImages(prev => prev.map(v => (Math.random() > 0.7 ? !v : v)));
    }, 2000);
    return () => {
      clearInterval(imageInterval);
    };
  }, []);

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
      <Content style={{ padding: '30px 16px 50px 16px', display: 'flex', flexDirection: 'column'}}>
        <Title level={4} style={{ marginBottom: 20, color:'rgb(130, 132, 137)' }}>
          Настроение: Lana Del Ray - Gods & Monsters
        </Title>
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
              padding: '8px',
              fontSize: '1.3rem',
              fontWeight: 300,
            }}
          >
            <SwiperSlide
              style={{
                border: '1px solid #bec2cd',
                borderRadius: 20,
                backgroundColor: 'white',
                boxShadow: '0 2px 8px #bec2cd',
                padding: '24px',
              }}
            >
              Образ "Королева декаданса" <br/><br/>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={data}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
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
                border: '1px solid #bec2cd',
                borderRadius: 20,
                backgroundColor: 'white',
                boxShadow: '0 2px 8px #bec2cd',
                padding: '24px',
              }}
            >
              Образ "Готическая принцесса"  <br/><br/>
              <div>
                <img src={Img2}/>
              </div>  
            </SwiperSlide>
            <SwiperSlide
              style={{
                border: '1px solid #bec2cd',
                borderRadius: 20,
                backgroundColor: 'white',
                boxShadow: '0 2px 8px #bec2cd',
                padding: '24px',
              }}
            >
              Вариант образа № 3 <br/><br/>
              <div>
                <img src={Img3}/>
              </div>  
            </SwiperSlide>
          </Swiper>
        </div>
        
        {/*<div style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
          <Row gutter={[4, 4]} justify="center">
            {images.map((img, idx) => (
              <Col key={idx} xs={24} sm={12} md={8} lg={8} xl={8} style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={img}
                  alt={`pic${idx+1}`}
                  className={`fade-image${visibleImages[idx] ? ' visible' : ''}`}
                  style={{ width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', opacity: visibleImages[idx] ? 0.7 : 0.2, pointerEvents: visibleImages[idx] ? 'auto' : 'none' }}
                />
              </Col>
            ))}
          </Row>
        </div>*/}
      </Content>
      {/*<div style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 160,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 201,
        background: 'rgba(255,255,255,0.95)',
        padding: '16px 0',
      }}>
        <div style={{ width: '100%', maxWidth: 500 }}>
          <Input
            size="large"
            placeholder="Напишите сообщение..."
            style={{ borderRadius: 24, fontSize: '1.2rem', paddingRight: 8, width: '100%' }}
          />
        </div>
      </div>*/}
      {/*<div className="fixed-bottom-btn">
        <Button type="primary" size="large" icon={<MessageOutlined style={{ fontSize: 36 }} />}>Давай начнём!</Button>
      </div>*/}
      <Footer style={{ background: 'white', borderTop: '1px solid #bec2cd', color: 'black', textAlign: 'center', padding: 10 }}>
        <Row align="middle" justify="space-between" style={{ height: '64px' }}>
          <div>
            <Button type="text" onClick={handleLikeClick} icon={<UserOutlined style={{ fontSize: 24 }} />} /> Эстетический профиль
          </div>
          <div>
            <Button type="text" onClick={handleUserClick} icon={<HeartOutlined style={{ fontSize: 24 }} />} />
          </div>
          <div>
          <Button type="text" onClick={handleLikeClick} icon={<ShoppingCartOutlined style={{ fontSize: 24 }} />} />
          </div>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
