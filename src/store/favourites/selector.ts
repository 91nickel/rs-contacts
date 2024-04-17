import { AppState, ReducersList } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

const SLICE_NAME = ReducersList.favouriteContacts

export default {
    get: () => ({[SLICE_NAME]: state}: AppState) => state.data,
    isLoading: () => ({[SLICE_NAME]: state}: AppState) => state.isLoading,
    includes: (id: ContactDto['id']) => ({[SLICE_NAME]: state}: AppState) => state.data.includes(id),
}
