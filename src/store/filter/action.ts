import { Dispatch } from 'redux'
import { IState } from './const'
import slice from './slice'

const {updated, cleared} = slice.actions

export default {
    update: (filterValues: IState) => (dispatch: Dispatch) => {
        dispatch(updated(filterValues))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
}
