import React from 'react'

import { Layout, Button, ConfigProvider, Space } from 'antd'

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
						colorPrimary: '#212121',
						colorError: '#E7014C',
						borderRadius: 5,
					}
				}}
			>
				<AppHeader />
				<Content 
					style={{ 
						padding: '90px 8px 220px 8px', 
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
					flexDirection: 'column',
					gap: '8px'
				}}>
					<Button
						size='large' 
						type={ activeTab === 1 ? 'default' : 'primary' }
						onClick={() => onMenuButtonClick(1)}
					>
						События клуба
					</Button>
					<Button
						size='large' 
						type={ activeTab === 2 ? 'default' : 'primary' }
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

