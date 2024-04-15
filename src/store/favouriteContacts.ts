import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DATA_CONTACT } from 'src/__data__'
import { AppState } from 'src/store/index'
import { Dispatch } from 'redux'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ReducersList } from "src/store/reducers.list"

const SLICE_NAME =  ReducersList.favouriteContacts
const initialState: Array<ContactDto['id']> = DATA_CONTACT.slice(0, 4).map(c => c.id)

export const slice = createSlice({
    name: SLICE_NAME,
    reducers: {
        added: (state, action: PayloadAction<ContactDto['id']>) => {
            state = [...state, action.payload]
        },
        deleted: (state, action: PayloadAction<ContactDto['id']>) => {
            state = state.filter(id => id !== action.payload)
        },
        cleared: (state) => {
            state = []
        },
    },
    initialState,
})

const {added, deleted, cleared} = slice.actions

export const reducer = slice.reducer

export const action = {
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

export const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
}
