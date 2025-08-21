import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/mulish'
import './index.css'
import App from './App'

import { init, miniApp } from '@telegram-apps/sdk'
import { AppContextProvider } from './context'
/*
const initializeTelegramSDK = async () => {
  try {
    await init()

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready()
      console.log('Mini App готово')
    }

  } catch (error) {
    console.error('Ошибка инициализации:', error)
  }
}

initializeTelegramSDK()
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
)