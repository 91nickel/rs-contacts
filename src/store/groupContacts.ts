import { createSlice } from '@reduxjs/toolkit'
import { AppState, ReducersList } from 'src/store/index'
import { DATA_GROUP_CONTACT } from 'src/__data__'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

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

type CurrentState = AppState[typeof SLICE_NAME]

export const selector = {
    get: () => (state: CurrentState) => state,
}
