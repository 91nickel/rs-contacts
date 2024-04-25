import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

import ReducersList from './reducers.list'

import ContactsReducer, * as Contacts from './contact'
import GroupContactsReducer, * as GroupContacts from './group'
import FavouriteContactsReducer, * as FavouriteContacts from './favourites'
import ContactsFilterReducer, * as ContactsFilter from './filter'
import AuthReducer, * as Auth from './auth'

import { logActionMiddleware } from './logActionMiddleware'

const reducers = {
    [Contacts.reducerPath]: ContactsReducer,
    [GroupContacts.reducerPath]: GroupContactsReducer,

    [Auth.name]: AuthReducer,
    [ContactsFilter.name]: ContactsFilterReducer,
    [FavouriteContacts.name]: FavouriteContactsReducer,
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
            Contacts.middleware,
            GroupContacts.middleware,
            thunkMiddleware,
            logActionMiddleware,
        ]
    },
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export const Selector = {
    // [ReducersList.contacts]: Contacts.selector,
    // [ReducersList.groupContacts]: GroupContacts.selector,
    [ContactsFilter.name]: ContactsFilter.selector,
    [FavouriteContacts.name]: FavouriteContacts.selector,
}

export const Action = {
    // [ReducersList.contacts]: Contacts.action,
    // [ReducersList.groupContacts]: GroupContacts.action,
    [ContactsFilter.name]: ContactsFilter.action,
    [FavouriteContacts.name]: FavouriteContacts.action,
}

export type AppState = ReturnType<typeof reducer>

export { ReducersList }
