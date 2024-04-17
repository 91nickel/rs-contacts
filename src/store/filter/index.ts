import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'
import { AppState } from 'src/store'
import { FilterFormValues } from 'src/components/FilterForm'
import ReducersList from "src/store/reducers.list"
import slice from './slice'
import selector from './selector'
import action from './action'


export default slice.reducer

export {action, selector}