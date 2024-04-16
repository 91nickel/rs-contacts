import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

import ReducersList from './reducers.list'

import Contacts from './contact'
import GroupContacts from './group'
import ContactsFilter from './filter'
import FavouriteContacts from './favourites'

import { logActionMiddleware } from './logActionMiddleware'

const reducers = {
    [Contacts.slice.reducerPath]: Contacts.slice.reducer,
    [GroupContacts.slice.reducerPath]: GroupContacts.slice.reducer,

    [ReducersList.contactsFilter]: ContactsFilter.reducer,
    [ReducersList.favouriteContacts]: FavouriteContacts.reducer,
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
            Contacts.slice.middleware,
            GroupContacts.slice.middleware,
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
    [ReducersList.contactsFilter]: ContactsFilter.selector,
    [ReducersList.favouriteContacts]: FavouriteContacts.selector,
}

export const Action = {
    // [ReducersList.contacts]: Contacts.action,
    // [ReducersList.groupContacts]: GroupContacts.action,
    [ReducersList.contactsFilter]: ContactsFilter.action,
    [ReducersList.favouriteContacts]: FavouriteContacts.action,
}

export type AppState = ReturnType<typeof reducer>

export { ReducersList }
