import React, { useState } from 'react'
import { MainButton, useLaunchParams } from '@telegram-apps/sdk-react'

import { Layout, Button, ConfigProvider } from 'antd'

import AppHeader from './components/AppHeader'
import UpcomingEventsPage from './components/pages/UpcomingEventsPage'
import HistoryPage from './components/pages/HistoryPage'
import AllWinesPage from './components/pages/AllWinesPage'
import UserAccountPage from './components/pages/UserAccountPage'

import 'antd/dist/reset.css'
import './App.css'

const { Footer, Content } = Layout

function App() {

	///const user = window.Telegram.WebApp.initDataUnsafe.user
	const launchParams = useLaunchParams()
	const [count, setCount] = useState(0)
  
	const handleButtonClick = () => {
	  setCount(count + 1)
	  // Example: Show an alert using Telegram's WebApp API
	  if (window.Telegram?.WebApp) {
		window.Telegram.WebApp.showAlert(`Count is now: ${count + 1}`)
	  }
	}

	console.info(window.Telegram)
	console.info(window.Telegram.WebApp)
	console.info(window.Telegram.WebApp.initDataUnsafe)
	// /console.info(user)
	const [activeTabKey, setActiveTabKey] = useState(0)

	const onMenuButtonClick = (key) => {
		setActiveTabKey(key)
	}

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#032F17',
						fontFamily: "Mulish",
						borderRadius: 0,
					}
				}}
			>
				<AppHeader />
				<Content style={{ 
					padding: '72px 16px 220px 16px', 
					display: 'flex', 
					flexDirection: 'column',
					//backgroundImage: `linear-gradient(rgba(247,235,213,0.7), rgba(247,235,213,0.7)), url(${champMap})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
					<div>
						<h1>Telegram Mini App with React</h1>
						<p>Start Parameter: {launchParams.startParam}</p>
						<p>Count: {count}</p>
						<MainButton text="Increment Count" onClick={handleButtonClick} />
					</div>
					{activeTabKey === 0 && (<UpcomingEventsPage />)}
					{activeTabKey === 1 && (<HistoryPage />)}
					{activeTabKey === 2 && (<AllWinesPage />)}
					{/*activeTabKey === 3 && (<UserAccountPage />)*/}
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
								Каталог вин
							</Button>
						</>
					)}				
				</Footer>
			</ConfigProvider>
		</Layout>
	)
}



export default App

