import React, { useReducer } from 'react'
import { AppContextState } from '../context';
import { useRootReducer } from './useRootReducer';
export const ProviderStore = ({ children }) => {

    const [appReducer, initialState] = useRootReducer();

    const [state, dispatch] = useReducer(appReducer, initialState)

    const values = { state, dispatch };
    return (
        <AppContextState.Provider value={values}>
            {children}
        </AppContextState.Provider>
    )
}
