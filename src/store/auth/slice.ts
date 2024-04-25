import { name, INITIAL_TOKEN_VALUE, IState } from './const'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { extraReducers } from './action'

const initialState: IState = {
    accessToken: localStorage.getItem('accessToken') || INITIAL_TOKEN_VALUE,
    refreshToken: localStorage.getItem('refreshToken') || INITIAL_TOKEN_VALUE,
    error: '',
    isAuthenticated: false,
    isLoading: true,
}

const slice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers,
})

export default slice
