import { Dispatch } from 'redux'
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit'
import { name, IState, ContactDto } from './const'
import slice from './slice'

const action = {
    add: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(slice.actions.added(cid))
    },
    delete: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(slice.actions.deleted(cid))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(slice.actions.cleared())
    },
    addAsync: createAsyncThunk(
        `${name}/addAsync`,
        async (payload: ContactDto['id'], thunkAPI) => {
            // thunkAPI.dispatch(loadingChanged(true))
            const res = await new Promise<{ success: boolean }>((res, rej) => {
                setTimeout(() => {
                    Math.floor(Math.random() * 100) % 2
                        ? res({success: true})
                        : rej({success: false})
                }, 500)
            }).then((data) => {
                console.log(data)
                thunkAPI.dispatch(slice.actions.added(payload))
            }).catch((data) => {
                console.error(data)
                throw new Error('Something went wrong')
                // thunkAPI.rejectWithValue('Something went wrong')
            })
            // thunkAPI.dispatch(loadingChanged(false))
        },
    ),
}

export default action

export function extraReducers(builder: ActionReducerMapBuilder<IState>) {
    builder.addMatcher(
        action.addAsync.pending.match,
        (state) => {
            return {...state, isLoading: true}
        },
    )
    builder.addMatcher(
        action.addAsync.fulfilled.match,
        (state, action) => {
            return {...state, isLoading: false}
        },
    )
    builder.addMatcher(
        action.addAsync.rejected.match,
        (state) => {
            return {...state, isLoading: false}
        },
    )
}
