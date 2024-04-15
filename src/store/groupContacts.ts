import { createSlice } from '@reduxjs/toolkit'
import { AppState } from 'src/store/index'
import { DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { ReducersList } from "src/store/reducers.list"

const SLICE_NAME = ReducersList.groupContacts
const initialState: GroupContactsDto[] = DATA_GROUP_CONTACT

const slice = createSlice({
    name: SLICE_NAME,
    reducers: {},
    initialState,
})

const {} = slice.actions

export const reducer = slice.reducer

export const action = {}

export const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
    byId: (id: GroupContactsDto['id']) => ({[SLICE_NAME]: state}: AppState) => state.find(g => g.id === id),
}
