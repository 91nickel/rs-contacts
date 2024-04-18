import { AppState } from 'src/store'
import { name, ContactDto } from './const'

const selector = {
    get: () => ({[name]: state}: AppState) => state.data,
    isLoading: () => ({[name]: state}: AppState) => state.isLoading,
    includes: (id: ContactDto['id']) => ({[name]: state}: AppState) => state.data.includes(id),
}

export default selector
