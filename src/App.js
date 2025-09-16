import React from 'react'

import { Layout, Button, ConfigProvider, Carousel , Divider, Tabs, Segmented } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

import { useAppContext } from './context'
import AppHeader from './components/AppHeader'
import EventsPage from './components/pages/EventsPage'
import AllWinesPage from './components/pages/AllWinesPage'
import UserAccountPage from './components/pages/UserAccountPage'
import Back from './pics/back.jpg'

import 'antd/dist/reset.css'
import './App.css'

const { Footer, Content } = Layout

function App() {

	const { activeTab, toggleTab } = useAppContext()

	const contentStyle = {
		margin: 0,
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	}

	const onMenuButtonClick = (key) => {
		toggleTab(key)
	}

	const onChange = currentSlide => {
		console.log(currentSlide);
	}

	return (
		<Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#E7014C',
						colorError: '#F1C6D7',
						borderRadius: '2px',
					}
				}}
			>
				<AppHeader />
				<Content 
					style={{ 
						padding: '160px 8px 220px 8px',
						display: 'flex',
						flexDirection: 'column',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundColor: 'black',
						backgroundImage: `url(${Back})`
					}}
				>			
					{activeTab === 1 && (<EventsPage />)}
					{activeTab === 2 && (<AllWinesPage />)}
					{activeTab === 3 && (<UserAccountPage />)}
				</Content>
				<Footer style={{
					display: 'flex', 
					flexDirection: 'row',
					gap: '8px'
				}}>
					<Button
						style={{ flex: 1 }}
						size='large' 
						disabled={activeTab === 1}
						onClick={() => onMenuButtonClick(1)}
					>
						События клуба
					</Button>
					<Button
						style={{ flex: 1 }}
						size='large' 
						disabled={activeTab === 2}
						onClick={() => onMenuButtonClick(2)}
					>
						Каталог
					</Button>
				</Footer>
			</ConfigProvider>
		</Layout>
	)
}



export default App

