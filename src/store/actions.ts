import { createAsyncThunk } from '@reduxjs/toolkit'

export const START_ASYNC_FUNCTION_ACTION = 'START_ASYNC_FUNCTION_ACTION'
export const SUCCESS_ASYNC_FUNCTION_ACTION = 'SUCCESS_ASYNC_FUNCTION_ACTION'
export const RESET_ASYNC_FUNCTION_ACTION = 'RESET_ASYNC_FUNCTION_ACTION'

export const asyncFunctionActionCreator = createAsyncThunk(
    'asyncFunctionActionCreator',
    async (payload, thunkAPI) => {
        thunkAPI.dispatch({type: START_ASYNC_FUNCTION_ACTION})
        const res: string = await new Promise(function (res, rej) {
            setTimeout(() => res('{"success": true}'), 1000)
        })
        console.log(JSON.parse(res))
        // const data = await res.json()
        if (res) {
            thunkAPI.dispatch({type: SUCCESS_ASYNC_FUNCTION_ACTION, payload: res})
        }
    },
)
