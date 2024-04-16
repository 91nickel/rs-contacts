import { AppActions } from './actions'
import { UPDATE_PRODUCTS_FILTER_ACTION } from './actions'

export function contactsFilterReducer(state = {}, action: AppActions) {
    switch (action.type) {
        case UPDATE_PRODUCTS_FILTER_ACTION:
            return {...state, ...action.payload}
        default:
            break
    }
    return state
}