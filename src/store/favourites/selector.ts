import slice from './slice'
import { AppState } from 'src/store'
import { ContactDto } from 'src/types/dto/ContactDto'

const SLICE_NAME = slice.name

export default {
    get: () => ({[SLICE_NAME]: state}: AppState) => state.data,
    isLoading: () => ({[SLICE_NAME]: state}: AppState) => state.isLoading,
    includes: (id: ContactDto['id']) => ({[SLICE_NAME]: state}: AppState) => state.data.includes(id),
}
