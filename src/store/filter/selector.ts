import slice from './slice'
import { AppState } from 'src/store'

const SLICE_NAME = slice.name

export default {
    get: () => ({[SLICE_NAME]: state}: AppState) => state,
}
