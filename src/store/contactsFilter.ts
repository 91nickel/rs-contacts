import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import { AppState } from 'src/store/index'
import { FilterFormValues } from 'src/components/FilterForm'
import { ReducersList } from "src/store/reducers.list"

const SLICE_NAME = ReducersList.contactsFilter
const initialState: Partial<FilterFormValues> = {}

export const slice = createSlice({
    name: SLICE_NAME,
    reducers: {
        updated: (state, action: PayloadAction<Partial<FilterFormValues>>) => {
            state = {...state, ...action.payload}
        },
        cleared: (state) => {
            state = {...initialState}
        },
    },
    initialState,
})

const {updated, cleared} = slice.actions

export const reducer = slice.reducer

export const action = {
    update: (fv: Partial<FilterFormValues>) => (dispatch: Dispatch) => {
        dispatch(updated(fv))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
}

export const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
}
