import React, { useEffect, useState } from 'react'
import { Layout, Typography, Row, Col, Tag, Input } from 'antd'
import { UserOutlined, HeartOutlined, ShoppingCartOutlined, WechatWorkOutlined, SketchOutlined, MessageOutlined } from '@ant-design/icons'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

import { List, Space, Segmented } from 'antd'

import Img1 from './pics/1.jpg'
import Img2 from './pics/2.jpg'
import Img3 from './pics/3.jpg'

import 'antd/dist/reset.css'
import './App.css'

const { Text, Title } = Typography

const data = Array.from({ length: 5 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `Солнцезащитные очки Miu Miu`,
  avatar: `Img${i+1}`,
  description:
    'Описание товара от AI',
  content:
    'Конструктивное описание товара',
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const { Header, Footer, Content } = Layout

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'white', borderBottom: '1px solid #bec2cd', color: 'black', textAlign: 'center', padding: '0 16px' }}>
        <Row align="middle" justify="space-between" style={{ height: '64px' }}>
          <Col flex="auto" style={{ textAlign: 'center' }}>
            <Title level={1} style={{ margin: 0, color: 'black', lineHeight: '64px' }}>L ī l ā</Title>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '16px 16px 70px 16px', display: 'flex', flexDirection: 'column'}}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><Title level={4}>Настроение дня</Title></div>
        <div
          style={{
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            backgroundColor: 'white',
            marginTop: '8px',
            padding: '16px 16px',
          }}
        >
          <Text type="secondary"> ... свидание в платье с атмосферой песни Gods and Monsters Lana del Rey</Text>
        </div><br/>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><Title level={4}>Деконструкция образа </Title></div>
        <div>
          <Title level={4}>
            {
              "Святость / Грех / Икона / Разрушение / Бархат / Золото / Тьма / Слезы / Вино / Голливудские холмы / Отчаянная красота / Увядание / Эротика / Меланхолия / Театральность"
              .split("/")
              .map(str => <Tag>{str}</Tag>)
            }
          </Title>
        </div><br/>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><Title level={4}>Эмоция</Title></div>
        <div
          style={{
            border: '1px solid #f0f0f0',
            borderRadius: '8px',
            backgroundColor: 'white',
            marginTop: '8px',
            padding: '16px 16px',
          }}
        >
          <Text type="secondary">Опасное очарование, уязвимая сила, трагический гламур, осознанная потерянность...</Text>
        </div><br/>        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><Title level={4}>Подборки для вашего настроения </Title></div>
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
                  <Title level={5}>Вариант 1: "Грешная Мадонна"<br/></Title> - контраст святости и греха                 
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
                      <div><img style={{maxWidth: '100%'}} src={Img1}/></div>
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
                borderRadius: '8px',
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
                  <Title level={5}>Вариант 2: "Готическая принцесса"</Title>
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
                      <img style={{maxWidth: '100%'}} src={Img2}/>
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
                  <Title level={5}>Вариант 3 "Ещё один образ"</Title>
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
                      <img style={{maxWidth: '100%'}} src={Img3}/>
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
        {/*<Segmented
          options={[
            { value: '1', icon: <UserOutlined />},
            { value: '2', icon: <HeartOutlined /> },
            { value: '3', icon: <ShoppingCartOutlined /> },
          ]}
        />*/}
        <Segmented
          size={'large'}
          shape="round"
          options={[
            { value: '1', icon:<WechatWorkOutlined />, label: 'Подборки' },
            { value: '2', icon: <UserOutlined /> },
            { value: '3', icon: <HeartOutlined /> },
            { value: '4', icon: <ShoppingCartOutlined /> },
          ]}
        />
      </Footer>
    </Layout>
  );
}

export default App
