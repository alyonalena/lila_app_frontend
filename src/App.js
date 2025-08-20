import React, { useState } from 'react'

import { Layout, Button, ConfigProvider } from 'antd'

import AppHeader from './components/AppHeader'
import UpcomingEventsPage from './components/pages/UpcomingEventsPage'
import HistoryPage from './components/pages/HistoryPage'
import AllWinesPage from './components/pages/AllWinesPage'
import UserAccountPage from './components/pages/UserAccountPage'

import 'antd/dist/reset.css'
import './App.css'

import champMap from './pics/champMap.png'

const { Footer, Content } = Layout


function App() {

	const [activeTabKey, setActiveTabKey] = useState(0)

	const onMenuButtonClick = (key) => {
		setActiveTabKey(key)
	}

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#3F2F2C'
					}
				}}
			>
				<AppHeader />
				<Content style={{ 
					padding: '72px 8px 220px 8px', 
					display: 'flex', 
					flexDirection: 'column',
					//backgroundImage: `linear-gradient(rgba(247,235,213,0.7), rgba(247,235,213,0.7)), url(${champMap})`,
					backgroundSize: 'cover',
					backgroundColor:'rgb(247,235,213)',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}>
					{activeTabKey === 0 && (<UpcomingEventsPage />)}
					{activeTabKey === 1 && (<HistoryPage />)}
					{activeTabKey === 2 && (<AllWinesPage />)}
					{activeTabKey === 3 && (<UserAccountPage />)}
				</Content>
				<Footer style={{
					display: 'flex', 
					flexDirection: 'column',
					gap: '8px'
				}}>
					{ activeTabKey !== 0 && (
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
					)}
					{ activeTabKey !== 1 && (
						<>
							<Button 
								visible={activeTabKey !== 1} 
								size='large' 
								type='primary'
								onClick={() => onMenuButtonClick(1)}
							>
								История мероприятий
							</Button>
						</>
					)}
					{ activeTabKey !== 2 && (
						<>
							<Button 
								visible={activeTabKey !== 2} 
								size='large' 
								type='primary'
								onClick={() => onMenuButtonClick(2)}
							>
								Доступные вина
							</Button>
						</>
					)}				
					{ activeTabKey !== 3 && (
						<>
							<Button 
								visible={activeTabKey !== 3} 
								size='large' 
								type='primary'
								onClick={() => onMenuButtonClick(3)}
							>
								Личный кабинет
							</Button>
						</>
					)}		
				</Footer>
			</ConfigProvider>
		</Layout>
	)
}



export default App

