import { Dispatch } from 'redux'
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { name, IState, ILoginDto, IAuthResponseData } from './const'
import slice from './slice'
import { isSuccessResponse, Response } from 'src/types/response'
import { AppState } from 'src/store'

export const action = {
    // add: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
    //     dispatch(slice.actions.added(cid))
    // },
    // delete: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
    //     dispatch(slice.actions.deleted(cid))
    // },
    // clear: () => (dispatch: Dispatch) => {
    //     dispatch(slice.actions.cleared())
    // },
    login: createAsyncThunk(
        `${name}/login`,
        async (payload: ILoginDto, thunkAPI) => {
            return auth(payload)
        },
    ),
    check: createAsyncThunk(
        `${name}/check`,
        async (_, thunkAPI) => {
            const state = (thunkAPI.getState() as AppState)[name]
            const {accessToken} = state
            return check(accessToken)
        },
    ),
    logout: createAsyncThunk(
        `${name}/logout`,
        async (_, thunkAPI) => {
            const state = (thunkAPI.getState() as AppState)[name]
            const {accessToken} = state
            return logout(accessToken)
        },
    ),
}

export default action

export function extraReducers(builder: ActionReducerMapBuilder<IState>) {
    builder.addMatcher(
        action.login.pending.match,
        (state) => {
            return {...state, isLoading: true}
        },
    )
    builder.addMatcher(
        action.login.fulfilled.match,
        (state, action) => {
            if (isSuccessResponse(action.payload)) {
                const {accessToken, refreshToken} = action.payload.data
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken)
                return {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    error: '',
                    isAuthenticated: true,
                    isLoading: false,
                }
            }
            return {
                accessToken: '',
                refreshToken: '',
                error: action.payload.message,
                isAuthenticated: false,
                isLoading: false,
            }
        },
    )
    builder.addMatcher(
        action.login.rejected.match,
        (state, action) => {
            return {
                ...state,
                error: action.error.message,
                isLoading: false,
            }
        },
    )

    builder.addMatcher(
        action.check.pending.match,
        (state, action) => ({...state, isLoading: true}),
    )
    builder.addMatcher(
        action.check.fulfilled.match,
        (state, action) => ({...state, isAuthenticated: action.payload, isLoading: false}),
    )
    builder.addMatcher(
        action.check.rejected.match,
        (state, action) => ({...state, isAuthenticated: false, isLoading: false}),
    )

    builder.addMatcher(
        action.logout.pending.match,
        (state, action) => ({...state, isLoading: true}),
    )
    builder.addMatcher(
        action.logout.fulfilled.match,
        (state) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {...state, accessToken: '', refreshToken: '', isAuthenticated: false, isLoading: false}
        },
    )
    builder.addMatcher(
        action.logout.rejected.match,
        (state, action) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {...state, accessToken: '', refreshToken: '', isAuthenticated: false, isLoading: false}
        },
    )
}

function auth(dto: ILoginDto): Promise<Response<IAuthResponseData>> {
    const isSuccess = dto.login === 'login' && dto.password === '1234'
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('auth', isSuccess)
            isSuccess
                ? res({success: true, data: {accessToken: '1234', refreshToken: '5678'}})
                : rej({success: false, message: '403 Forbidden'})
        }, 500)
    })
}

function check(token: string): Promise<boolean> | boolean {
    const isSuccess = token === '1234'
    if (!token) {
        console.log('check', false, 'no token')
        return false
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('check', isSuccess)
            isSuccess ? res(isSuccess) : rej(isSuccess)
        }, 500)
    })
}

function logout(token: string): Promise<boolean> | boolean {
    const isSuccess = true

    if (!token) {
        console.log('logout', false, 'no token')
        return false
    }

    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('logout', isSuccess)
            isSuccess ? res(isSuccess) : rej(isSuccess)
        }, 500)
    })
}
