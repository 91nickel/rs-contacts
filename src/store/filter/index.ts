import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import { AppState } from 'src/store'
import { FilterFormValues } from 'src/components/FilterForm'
import ReducersList from "src/store/reducers.list"

const SLICE_NAME = ReducersList.contactsFilter
const initialState: Partial<FilterFormValues> = {}

export const slice = createSlice({
    name: SLICE_NAME,
    reducers: {
        updated: (state, action: PayloadAction<Partial<FilterFormValues>>) => {
            return {...state, ...action.payload}
        },
        cleared: () => {
            return {...initialState}
        },
    },
    initialState,
})

const {updated, cleared} = slice.actions

const reducer = slice.reducer

const action = {
    update: (filterValues: Partial<FilterFormValues>) => (dispatch: Dispatch) => {
        dispatch(updated(filterValues))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
}

const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
}

export default {reducer, action, selector}