import { createSlice } from '@reduxjs/toolkit'
import { DATA_CONTACT } from 'src/__data__'
import { AppState, ReducersList } from 'src/store/index'
import { ContactDto } from 'src/types/dto/ContactDto'

const SLICE_NAME = ReducersList.contacts
const initialState: ContactDto[] = DATA_CONTACT

const slice = createSlice({
    name: SLICE_NAME,
    reducers: {},
    initialState,
})

const {} = slice.actions

export const reducer = slice.reducer

export const action = {}

type CurrentState = AppState[typeof SLICE_NAME]

export const selector = {
    get: () => (state: CurrentState) => state,
    byId: (id: ContactDto['id']) => (state: CurrentState) => state.find(c => c.id === id),
}
