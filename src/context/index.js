import React, { useState, useCallback, createContext } from 'react'

const AppContext = createContext(null)

export const useCreateAppContext = function() {
    const [ activeTab, setActiveTab ] = useState(1)
   
    const toggleTab = useCallback((value) => {
        setActiveTab(value)
    }, []);
  
    return {
        activeTab, 
        toggleTab, 
    }
}

export function useAppContext() {
    const context = React.useContext(AppContext)
    if (!context) throw new Error('Use app context within provider!')

    return context
}

export const AppContextProvider = ({ children, ...props }) => {
    const context = useCreateAppContext(props)

    return (
        <AppContext.Provider 
            value={context}
        >
            {children}
        </AppContext.Provider>
    )
}
