import { FilterFormValues } from 'src/components/FilterForm'
import { Dispatch } from 'redux'
import slice from 'src/store/filter/slice'

const {updated, cleared} = slice.actions

export default {
    update: (filterValues: Partial<FilterFormValues>) => (dispatch: Dispatch) => {
        dispatch(updated(filterValues))
    },
    clear: () => (dispatch: Dispatch) => {
        dispatch(cleared())
    },
}
