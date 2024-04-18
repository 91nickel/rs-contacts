import ReducersList from 'src/store/reducers.list'
import { FilterFormValues } from 'src/components/FilterForm'

export const name = ReducersList.contactsFilter

export type IState = Partial<FilterFormValues>