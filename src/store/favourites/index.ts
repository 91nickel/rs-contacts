import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'src/store'
import { Dispatch } from 'redux'
import { ContactDto } from 'src/types/dto/ContactDto'
import ReducersList from "src/store/reducers.list"

const SLICE_NAME =  ReducersList.favouriteContacts
const initialState: Array<ContactDto['id']> = []

export const slice = createSlice({
    name: SLICE_NAME,
    reducers: {
        added: (state, action: PayloadAction<ContactDto['id']>) => {
            return [...state, action.payload]
        },
        deleted: (state, action: PayloadAction<ContactDto['id']>) => {
            return state.filter(id => id !== action.payload)
        },
        cleared: (state) => {
            return []
        },
    },
    initialState,
})

const {added, deleted, cleared} = slice.actions

const reducer = slice.reducer

const action = {
    add: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(added(cid))
    },
    delete: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(deleted(cid))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
}

const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
}

export default {reducer, action, selector}
