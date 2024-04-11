import { FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from 'src/store/index'

export const UPDATE_PRODUCTS_FILTER_ACTION = 'UPDATE_PRODUCTS_FILTER_ACTION'
export const ADD_FAVORITE_CONTACT_ACTION = 'ADD_FAVORITE_CONTACT_ACTION'
export const REMOVE_FAVORITE_CONTACT_ACTION = 'REMOVE_FAVORITE_CONTACT_ACTION'

export const START_ASYNC_FUNCTION_ACTION = 'START_ASYNC_FUNCTION_ACTION'
export const SUCCESS_ASYNC_FUNCTION_ACTION = 'SUCCESS_ASYNC_FUNCTION_ACTION'
export const RESET_ASYNC_FUNCTION_ACTION = 'RESET_ASYNC_FUNCTION_ACTION'

interface UpdateContactsFilterAction {
    type: typeof UPDATE_PRODUCTS_FILTER_ACTION;
    payload: Partial<FilterFormValues>
}

interface AddFavouriteContactAction {
    type: typeof ADD_FAVORITE_CONTACT_ACTION;
    payload: ContactDto['id']
}

interface RemoveFavouriteContactAction {
    type: typeof REMOVE_FAVORITE_CONTACT_ACTION;
    payload: ContactDto['id']
}

interface StartAsyncFunctionAction {
    type: typeof START_ASYNC_FUNCTION_ACTION;
    payload: any,
}

interface SuccessAsyncFunctionAction {
    type: typeof SUCCESS_ASYNC_FUNCTION_ACTION;
    payload: any,
}

interface ResetAsyncFunctionAction {
    type: typeof RESET_ASYNC_FUNCTION_ACTION;
    payload: any,
}

export function updateContactsFilterActionCreator(fv: Partial<FilterFormValues>): UpdateContactsFilterAction {
    return {
        type: UPDATE_PRODUCTS_FILTER_ACTION,
        payload: fv,
    }
}

export function addFavouriteContactAction(id: ContactDto['id']): AddFavouriteContactAction {
    return {
        type: ADD_FAVORITE_CONTACT_ACTION,
        payload: id,
    }
}

export function removeFavouriteContactAction(id: ContactDto['id']): RemoveFavouriteContactAction {
    return {
        type: REMOVE_FAVORITE_CONTACT_ACTION,
        payload: id,
    }
}

export function asyncFunctionActionCreator(): ThunkAction<void, AppState, void, AppActions> {
    return async (dispatch: Dispatch) => {
        dispatch({type: START_ASYNC_FUNCTION_ACTION})
        const res: string = await new Promise(function (res, rej) {
            setTimeout(() => res('{"success": true}'), 1000)
        })
        console.log(JSON.parse(res))
        // const data = await res.json()
        if (res) {
            dispatch({type: SUCCESS_ASYNC_FUNCTION_ACTION, payload: res})
        }
    }
}

export type AppActions = UpdateContactsFilterAction | AddFavouriteContactAction | RemoveFavouriteContactAction
