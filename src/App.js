import React from 'react'

import { Layout, Button, ConfigProvider, Space, Divider, Tabs, Segmented } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'

import { useAppContext } from './context'
import AppHeader from './components/AppHeader'
import EventsPage from './components/pages/EventsPage'
import AllWinesPage from './components/pages/AllWinesPage'
import UserAccountPage from './components/pages/UserAccountPage'

import 'antd/dist/reset.css'
import './App.css'

const { Footer, Content } = Layout

function App() {

	const { activeTab, toggleTab } = useAppContext()

	const onMenuButtonClick = (key) => {
		toggleTab(key)
	}

	return (
		<Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: 'black',
						colorError: '#F1C6D7',
						borderRadius: '2px',
					}
				}}
			>
				<AppHeader />
				<Content 
					style={{ 
						padding: '140px 8px 220px 8px',
						display: 'flex',
						flexDirection: 'column',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
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
						Каталог вин
					</Button>
				</Footer>
			</ConfigProvider>
		</Layout>
	)
}



export default App

