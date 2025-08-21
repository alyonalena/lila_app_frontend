import React from 'react'
import { useLaunchParams } from '@telegram-apps/sdk-react'

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
						colorPrimary: '#032F17',
						borderRadius: 0,
					}
				}}
			>
				<AppHeader />
				<Content 
					style={{ 
						padding: '72px 8px 220px 8px', 
						display: 'flex', 
						flexDirection: 'column',
						//backgroundImage: `linear-gradient(rgba(247,235,213,0.7), rgba(247,235,213,0.7)), url(${champMap})`,
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
					gap: '8px',
					borderTop: '1px solid #032F17',
				}}>
					{/* activeTabKey !== 0 && (
						<>
							<Button 
								visible={activeTabKey !== 0} 
								size='large' 
								type='primary'
								onClick={() => onMenuButtonClick(0)}
							>
								Предстоящие мероприятия
							</Button>
						</>
					)*/}
					<Button
						size='large' 
						type={ activeTab === 1 ? 'default' : 'primary' }
						onClick={() => onMenuButtonClick(1)}
					>
						МЕРОПРИЯТИЯ
					</Button>
					<Button
						size='large' 
						type={ activeTab === 2 ? 'default' : 'primary' }
						onClick={() => onMenuButtonClick(2)}
					>
						КАТАЛОГ ВИН
					</Button>
				</Footer>
			</ConfigProvider>
		</Layout>
	)
}



export default App

