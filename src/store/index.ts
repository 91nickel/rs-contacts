import { combineReducers, Reducer } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import localStorage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import { logActionMiddleware } from 'src/store/logActionMiddleware'

import { reducer as contactsFilterReducer } from './contactsFilter'
import { reducer as contactsReducer } from './contacts'
import { reducer as groupContactsReducer } from './groupContacts'
import { reducer as favouriteContactsReducer } from './favouriteContacts'
import { ReducersList } from "src/store/reducers.list"

const reducers = {
    [ReducersList.contacts] : contactsReducer,
    [ReducersList.groupContacts]: groupContactsReducer,
    [ReducersList.contactsFilter]: contactsFilterReducer,
    [ReducersList.favouriteContacts]: favouriteContactsReducer,
}

const reducer = persistReducer(
    {
        key: 'redux',
        storage: localStorage,
        // throttle: 100000,
    },
    combineReducers(reducers)
)

export const store = configureStore(
    {
        reducer,
        devTools: true,
        middleware: [
            thunkMiddleware,
            logActionMiddleware,
        ]
    },
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type AppState = ReturnType<typeof reducer>
