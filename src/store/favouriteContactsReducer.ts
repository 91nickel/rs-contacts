import { DATA_CONTACT } from 'src/__data__'
import { AppActions, ADD_FAVORITE_CONTACT_ACTION, REMOVE_FAVORITE_CONTACT_ACTION } from 'src/store/actions'

const initialState = DATA_CONTACT.slice(0, 4).map(c => c.id)

export function favouriteContactsReducer(state = initialState, action: AppActions) {
    switch (action.type) {
        case ADD_FAVORITE_CONTACT_ACTION:
            return [...state, action.payload]
        case REMOVE_FAVORITE_CONTACT_ACTION:
            return state.filter(id => id !== action.payload)
        default:
            break
    }

    return state
}
