import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterFormValues } from 'src/components/FilterForm'
import { Dispatch } from 'redux'
import { AppState, ReducersList } from 'src/store/index'

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

type CurrentState = AppState[typeof SLICE_NAME]

export const selector = {
    get: () => (state: CurrentState) => state,
}
