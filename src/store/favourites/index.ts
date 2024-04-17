import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'src/store'
import { Dispatch } from 'redux'
import { ContactDto } from 'src/types/dto/ContactDto'
import ReducersList from 'src/store/reducers.list'

import selector from './selector'

const SLICE_NAME = ReducersList.favouriteContacts

interface IState {
    data: ContactDto['id'][]
    isLoading: boolean,
}

const initialState: IState = {
    data: [],
    isLoading: false,
}

export const slice = createSlice({
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

const {added, deleted, cleared, loadingChanged} = slice.actions

const reducer = slice.reducer

const action = {
    add: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(added(cid))
    },
    delete: (cid: ContactDto['id']) => (dispatch: Dispatch) => {
        dispatch(deleted(cid))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
    addAsync: createAsyncThunk(
        `${SLICE_NAME}/addAsync`,
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
                thunkAPI.dispatch(added(payload))
            }).catch((data) => {
                console.error(data)
                throw new Error('Something went wrong')
                // thunkAPI.rejectWithValue('Something went wrong')
            })
            // thunkAPI.dispatch(loadingChanged(false))
        },
    ),
}

// const selector = {
//     get: () => ({[SLICE_NAME]: state}: AppState) => state.data,
//     isLoading: () => ({[SLICE_NAME]: state}: AppState) => state.isLoading,
//     includes: (id: ContactDto['id']) => ({[SLICE_NAME]: state}: AppState) => state.data.includes(id),
// }
//
export default reducer

export {action, selector}
