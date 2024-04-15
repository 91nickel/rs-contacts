import { createSlice } from '@reduxjs/toolkit'
import { DATA_CONTACT } from 'src/__data__'
import { AppState } from 'src/store/index'
import { ContactDto } from 'src/types/dto/ContactDto'
import { ReducersList } from "src/store/reducers.list"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

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

export const selector = {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
    byId: (id: ContactDto['id']) => ({[SLICE_NAME]: state}: AppState) => state.find(c => c.id === id),
    byGroup: (ids: GroupContactsDto['contactIds']) => ({[SLICE_NAME]: state}: AppState) => state.filter(c => ids.includes(c.id)),
}
