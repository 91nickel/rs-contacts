import { createStore, combineReducers, applyMiddleware } from 'redux'
import { contactsReducer } from 'src/store/contactsReducer'
import { groupContactsReducer } from 'src/store/groupContactsReducer'
import { contactsFilterReducer } from 'src/store/contactsFilterReducer'
import { favouriteContactsReducer } from 'src/store/favouriteContactsReducer'
import { logActionMiddleware } from 'src/store/logActionMiddleware'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from '@redux-devtools/extension'
import localStorage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'

// const reducers = combineReducers({
//     contacts: contactsReducer,
//     groupContacts: groupContactsReducer,
//     contactsFilter: contactsFilterReducer,
//     favouriteContacts: favouriteContactsReducer,
// })

const reducers = persistReducer(
    {
        key: 'redux',
        storage: localStorage,
        // throttle: 100000,
    },
    combineReducers({
        contacts: contactsReducer,
        groupContacts: groupContactsReducer,
        contactsFilter: contactsFilterReducer,
        favouriteContacts: favouriteContactsReducer,
    })
)

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware, logActionMiddleware))
)

export const persistor = persistStore(store)

// @ts-ignore
window.persistor = persistor

export type AppState = ReturnType<typeof reducers>
