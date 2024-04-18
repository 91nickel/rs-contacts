import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterFormValues } from 'src/components/FilterForm'
import { name, IState } from './const'

const initialState: IState = {}

export default createSlice({
    name,
    initialState,
    reducers: {
        updated: (state, action: PayloadAction<Partial<FilterFormValues>>) => {
            return {...state, ...action.payload}
        },
        cleared: () => {
            return {...initialState}
        },
    },
})
