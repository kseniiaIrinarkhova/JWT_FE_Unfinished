import {useState, createContext} from 'react'

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}