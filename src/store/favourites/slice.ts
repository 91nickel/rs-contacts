import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name, IState, ContactDto } from './const'
import { extraReducers } from './action'

const initialState: IState = {
    data: [],
    isLoading: false,
}

const slice = createSlice({
    name,
    initialState,
    reducers: {
        added: (state, action: PayloadAction<ContactDto['id']>) => {
            state.data = Array.from(new Set([...state.data, action.payload]))
        },
        deleted: (state, action: PayloadAction<ContactDto['id']>) => {
            state.data = state.data.filter(id => id !== action.payload)
        },
        cleared: (state) => {
            state.data = []
        },
        loadingChanged: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    },
    extraReducers,
})

export default slice
