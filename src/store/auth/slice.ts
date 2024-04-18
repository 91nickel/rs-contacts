import { IState } from './const'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { name } from './const'
import { extraReducers } from './action'

const initialState: IState = {
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
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
