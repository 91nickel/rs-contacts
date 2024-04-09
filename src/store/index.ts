import { createStore, combineReducers } from 'redux'
import { contactsReducer } from 'src/store/contactsReducer'
import { groupContactsReducer } from 'src/store/groupContactsReducer'

export const store = createStore(
    combineReducers({
        contacts: contactsReducer,
        groupContacts: groupContactsReducer,
    })
)