import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterFormValues } from 'src/components/FilterForm'
import ReducersList from 'src/store/reducers.list'

const SLICE_NAME = ReducersList.contactsFilter
const initialState: Partial<FilterFormValues> = {}

export default createSlice({
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
