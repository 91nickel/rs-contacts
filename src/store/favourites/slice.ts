import { Dispatch } from 'redux'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import ReducersList from 'src/store/reducers.list'
import { ContactDto } from 'src/types/dto/ContactDto'
import action from './action'

const SLICE_NAME = ReducersList.favouriteContacts

interface IState {
    data: ContactDto['id'][]
    isLoading: boolean,
}

const initialState: IState = {
    data: [],
    isLoading: false,
}

const slice = createSlice({
    name: SLICE_NAME,
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
    extraReducers(builder) {
        builder.addMatcher(action.addAsync.pending.match,
            (state) => {
                return {...state, isLoading: true}
            },
        )
        builder.addMatcher(action.addAsync.fulfilled.match,
            (state, action) => {
                return {...state, isLoading: false}
            },
        )
        builder.addMatcher(action.addAsync.rejected.match,
            (state) => {
                return {...state, isLoading: false}
            },
        )
    },
    initialState,
})

export default slice