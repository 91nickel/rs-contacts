import ReducersList from 'src/store/reducers.list'
import { ContactDto } from 'src/types/dto/ContactDto'

export const name = ReducersList.favouriteContacts

export interface IState {
    data: ContactDto['id'][]
    isLoading: boolean,
}

export type { ContactDto }