import slice from './slice'
import selector from './selector'
import action from './action'
import ReducersList from 'src/store/reducers.list'

export const name = ReducersList .contactsFilter

export default slice.reducer

export {action, selector}
