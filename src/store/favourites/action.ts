import { ContactDto } from 'src/types/dto/ContactDto'
import { Dispatch } from 'redux'
import { createAsyncThunk } from '@reduxjs/toolkit'
import slice from './slice'

const {added, deleted, cleared, loadingChanged} = slice.actions

export default {
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
        `${slice.name}/addAsync`,
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
