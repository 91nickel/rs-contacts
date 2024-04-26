import { Dispatch } from 'redux'
import { ActionReducerMapBuilder, AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit'
import {
    name,
    IState,
    ILoginDto,
    IAuthResponseData,
    testAuthCredentials,
    INITIAL_TOKEN_VALUE,
    TEST_ACCESS_TOKEN, TEST_REFRESH_TOKEN
} from './const'
import slice from './slice'
import { isSuccessResponse, Response } from 'src/types/response'
import { AppState } from 'src/store'

enum Endpoints {
    login = 'login',
    check = 'check',
    logout = 'logout',
}

enum AuthErrors {
    forbidden = '403 Forbidden',
}

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
    [Endpoints.login]: createAsyncThunk(
        `${name}/${Endpoints.login}`,
        async (payload: ILoginDto, thunkAPI) => {
            return auth(payload)
        },
    ),
    [Endpoints.check]: createAsyncThunk(
        `${name}/${Endpoints.check}`,
        async (_, thunkAPI) => {
            const state = (thunkAPI.getState() as AppState)[name]
            const {accessToken} = state
            return check(accessToken)
        },
    ),
    [Endpoints.logout]: createAsyncThunk(
        `${name}/${Endpoints.logout}`,
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
        action[Endpoints.login].pending.match,
        (state) => {
            return {...state, isLoading: true}
        },
    )
    builder.addMatcher(
        action[Endpoints.login].fulfilled.match,
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
                accessToken: INITIAL_TOKEN_VALUE,
                refreshToken: INITIAL_TOKEN_VALUE,
                error: action.payload.message,
                isAuthenticated: false,
                isLoading: false,
            }
        },
    )
    builder.addMatcher(
        action[Endpoints.login].rejected.match,
        (state, action) => {
            return {
                ...state,
                error: action.error.message,
                isLoading: false,
            }
        },
    )

    builder.addMatcher(
        action[Endpoints.check].pending.match,
        (state, action) => ({...state, isLoading: true}),
    )
    builder.addMatcher(
        action[Endpoints.check].fulfilled.match,
        (state, action) => ({...state, isAuthenticated: action.payload, isLoading: false}),
    )
    builder.addMatcher(
        action[Endpoints.check].rejected.match,
        (state, action) => ({...state, isAuthenticated: false, isLoading: false}),
    )

    builder.addMatcher(
        action[Endpoints.logout].pending.match,
        (state, action) => ({...state, isLoading: true}),
    )
    builder.addMatcher(
        action[Endpoints.logout].fulfilled.match,
        (state) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {...state, accessToken: INITIAL_TOKEN_VALUE, refreshToken: INITIAL_TOKEN_VALUE, isAuthenticated: false, isLoading: false}
        },
    )
    builder.addMatcher(
        action[Endpoints.logout].rejected.match,
        (state, action) => {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {...state, accessToken: INITIAL_TOKEN_VALUE, refreshToken: INITIAL_TOKEN_VALUE, isAuthenticated: false, isLoading: false}
        },
    )
}

function auth(dto: ILoginDto): Promise<Response<IAuthResponseData>> {
    const isSuccess = dto === testAuthCredentials
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log('auth', isSuccess)
            isSuccess
                ? res({success: true, data: {accessToken: TEST_ACCESS_TOKEN, refreshToken: TEST_REFRESH_TOKEN}})
                : rej({success: false, message: AuthErrors.forbidden})
        }, 500)
    })
}

function check(token: string): Promise<boolean> | boolean {
    const isSuccess = token === TEST_ACCESS_TOKEN
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
